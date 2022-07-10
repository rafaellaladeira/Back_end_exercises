const error = (error, _req, res, _next) => {
    if (error.status) {
        return res.status(error.status).json({message : error.message});
    }
    console.log(error.status);
    return res.status(500).json({message: 'Internal server error'});
};

module.exports = error;