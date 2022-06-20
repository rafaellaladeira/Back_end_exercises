const validationName = (req, res, next) => {
    const {username} =req.body;
    if(username.length < 3) return res.status(400).json({message: 'invalid data'});
    next();
}

const validationEmail = (req,res, next) => {
    const {email} = req.body;
    if(!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm)) {
        return res.status(400).json({message: 'invalid data'});
    }
    next();
}

const validationPassword = (req, res, next) => {
    const {password} = req.body;
    if(!password.length < 8 || !password.length > 3 || isNaN(password)) {
        return res.status(400).json({message: 'invalid data'});
    }
    next();
}

module.exports = {
    validationName,
    validationPassword,
    validationEmail,
}