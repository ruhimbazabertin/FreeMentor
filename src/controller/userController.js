/* eslint-disable max-len */
/* eslint-disable camelcase */

import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt-nodejs';
import dotenv from 'dotenv';
import userModel from '../model/user';
import userSchema from '../helper/userValidation';

dotenv.config();

class userController {
  // signUp
  static signUp(req, res) {
    const {
      firstName, lastName, email, password, address, bio, occupation, expertise, userType,
    } = req.body;


    const idNumber = userModel.length + 1;
    const jwToken = jwt.sign({
      id: idNumber, firstName, lastName, email, address, bio, occupation, expertise, userType,
    }, process.env.SECRET_KEY);
    const hashedPassword = bcryptjs.hashSync(password);
    const newUser = userSchema.validate({
      id: idNumber, firstName, lastName, email, password: hashedPassword, address, bio, occupation, expertise, userType,
    });

    if (newUser.error) { return res.status(400).json({ status: 400, error: newUser.error.details[0].message }); }

    const user = userModel.find(usr => usr.email === email);
    if (user) { return res.status(400).json({ status: 400, error: 'email already exist' }); }

    userModel.push(newUser.value);

    return res.status(201).json({
      status: 201,
      token: jwToken,
      data: newUser.value,
    });
  }
   //SignIn
   static signIn(req,res){
        
    const { email, password} = req.body;
     const foundUser = userModel.find(user => user.email === email);
     if(foundUser){
         const verifyPassword = bcryptjs.compareSync(req.body.password, foundUser.password);
         if(verifyPassword){
             const jwToken = jwt.sign({ id: foundUser.id, firstName: foundUser.firstName, lastName: foundUser.lastName, email:foundUser.email, address:foundUser.address, bio:foundUser.bio, occupation:foundUser.occupation, expertise:foundUser.expertise, userType:foundUser.userType, }, process.env.SECRET_KEY, {expiresIn: '1 day'});
            return res.status(200).json({
                status: 200,
                message: `Logged in as ${foundUser.firstName}`,
                data: {
                    firstName:foundUser.firstName,lastName:foundUser.lastName,email:foundUser.email, address:foundUser.address,bio:foundUser.bio,occupation:foundUser.occupation,expertise:foundUser.expertise,userType:foundUser.userType
                },
               token: jwToken          
            });
         }
         return res.status(404).json({
            status: 404,
            error: 'UserName or password not match.'
        });
    }
    return res.status(404).json({
        status: 404,
        error: 'User not found'
    });
 }
     //View a specific mentor
      static specificMentor(req, res){
        if(req.user.userType === 'user'){
        const { id } = req.params;
        const foundUser = userModel.find(user => user.id === parseInt(id) && user.userType === 'mentor' );
        if(foundUser){
           return res.status(200).json({
            status: 200,
            data: foundUser
             
           })
        }
        return res.status(404).json({
            status: 404,
            error: 'Mentor not found'
        });
    }
    return res.status(403).json({
        status: 403,
        error: 'Unauthorized'
    });
     }
}

export default userController;
