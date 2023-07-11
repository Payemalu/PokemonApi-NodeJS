const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const passport = require('passport');

const init = () => {
    // Extract the jwt from the following schema and use it as a key in secretOrkey
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
        secretOrKey: 'secretPassword'
    };

    passport.use(new JwtStrategy(opts, (decoded, done) => {
        console.log('decoded jwt', decoded);
        return done(null, decoded);
    }));
}

const protectWithJwt = (req, res, next) => {
    if(req.path == '/' || req.path == '/auth/login'){
        return next();
    }
    return passport.authenticate('jwt', {session: false})(req, res, next);
}

exports.init = init;
exports.protectWithJwt = protectWithJwt;