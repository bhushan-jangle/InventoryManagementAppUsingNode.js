const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');
module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            
            '/users/authenticate',
            '/users/register',
            '/api/item/add',
            '/api/group/add',
            '/api/item/all',
            '/api/item/byitemid/:id',
            '/api/item/byuserid/:userId',
            '/api/item/byitemnumber/:itemNumber',
            '/api/group/all',
            '/api/group/bygroupid/:id',
            '/api/group/byuserid/:userId',
            '/api/group/bygroupnumber/:groupNumber',
            '/api/item/byitemid/:id',
            '/api/item/byitemnumber/:itemNumber',
            '/api/group/bygroupid/:id',
            '/api/group/bygroupnumber/:groupNumber',
            '/api/item/byitemid/:id',
            '/api/item/byitemnumber/:itemNumber',
            '/api/group/bygroupid/:id',
            '/api/group/bygroupnumber/:groupNumber'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }
    done();
};