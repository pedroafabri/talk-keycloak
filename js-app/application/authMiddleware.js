module.exports = (req, res, next) => {
  const { authorization } = req.headers
  const token = (authorization || '').replace('Bearer', '')

  if(!token) return res.status(401).send('YOU HAVE NO POWER HERE!')

  next()
}