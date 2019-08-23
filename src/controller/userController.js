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
}

export default userController;
