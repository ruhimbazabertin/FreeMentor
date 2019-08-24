import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    // eslint-disable-next-line consistent-return
    jwt.verify(req.token, process.env.SECRET_KEY, (error, data) => {
      if (error) {
        // throw new Error(`Authentication failed ${error}`);
        return res.status(401).json({
          status: 401,
          error: `Authentication failed ${error}`,
        });
      }
      req.user = data;
    });
    next();
  }
};

export default auth;
