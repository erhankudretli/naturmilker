import jwt from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const domain = 'dev-umutgungor.eu.auth0.com'
const audience = 'https://dev-umutgungor.eu.auth0.com/api/v2/'

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`
  }),

  audience: audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256']
})

export default checkJwt
