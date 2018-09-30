const authenticate = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'please login' });
  }
  next();
};

module.exports = { authenticate };
