const axios = require('axios').default
const JWT = require('jsonwebtoken')
const publicKey = require('./jwt-key')
const realmName = 'Products';

module.exports = async (req, res, next) => {
  if(!req.headers.authorization) return res.status(401).send('YOU HAVE NO POWER HERE!')

  const token = req.headers.authorization.replace(/bearer/gi, '').trim()
  
  try{
    JWT.verify(token, publicKey)
    next()
  }catch(e){
    console.error(e)
    return res.status(401).send('YOU HAVE NO POWER HERE!')
  }

}