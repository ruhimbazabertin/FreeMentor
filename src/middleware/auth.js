import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(req.token, process.env.SECRET_KEY, (error, data) => {
      if (error) {
        throw new Error(`Authentication failed ${error}`);
      } else {
        req.user = data;
      }
    });
    next();
  }
};

export default auth;
