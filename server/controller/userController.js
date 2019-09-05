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
      id: idNumber, email, userType,
    }, process.env.SECRET_KEY);
    const hashedPassword = bcryptjs.hashSync(password);
    const newUser = userSchema.validate({
      id: idNumber, firstName, lastName, email, password: hashedPassword, address, bio, occupation, expertise, userType,
    });

    if (newUser.error) { return res.status(400).json({ status: 400, error: newUser.error.details[0].message }); }

    const user = userModel.find(usr => usr.email === email);
    if (user) { return res.status(409).json({ status: 409, error: 'email already exist, Please Login' }); }

    userModel.push(newUser.value);

    return res.status(201).json({
      status: 201,
      message: 'successfully  created ',
      token: jwToken,
      data: newUser.value,
    });
  }

  // SignIn
  static signIn(req, res) {
    const { email, password } = req.body;
    const foundUser = userModel.find(user => user.email === email);
    if (foundUser) {
      const verifyPassword = bcryptjs.compareSync(req.body.password, foundUser.password);
      if (verifyPassword) {
        const jwToken = jwt.sign({
          id: foundUser.id, email: foundUser.email, userType: foundUser.userType,
        }, process.env.SECRET_KEY);
        return res.status(200).json({
          status: 200,
          message: `Logged in as ${foundUser.firstName}`,
          data: {
            token: jwToken,
          },

        });
      }
      return res.status(401).json({
        status: 401,
        error: 'UserName or password not match.',
      });
    }
    return res.status(401).json({
      status: 401,
      error: 'UserName or password not match',
    });
  }
  // Change user to mentor
  static changeToMentor(req, res) {
    if (req.user.userType === 'admin') {
      const { id } = req.params;
      const findUser = userModel.find(user => user.id === parseInt(id) && user.userType === 'user');
      if (findUser) {
        const updateUser = {
          id: findUser.id,
          firstName: findUser.firstName,
          lastName: findUser.lastName,
          email: findUser.email,
          passsword: findUser.password,
          address: findUser.address,
          bio: findUser.bio,
          occupation: findUser.occupation,
          expertise: findUser.expertise,
          userType: 'mentor',
        };

        userModel[userModel.indexOf(findUser)] = updateUser;
        return res.status(200).json({
          status: 200,
          data: updateUser,

        });
      }
      return res.status(404).json({
        status: 404,
        error: 'User not found or may be is a mentor',
      });
    }
    return res.status(403).json({
      status: 403,
      message: 'Unauthorize',
    });
  }
}

export default userController;
