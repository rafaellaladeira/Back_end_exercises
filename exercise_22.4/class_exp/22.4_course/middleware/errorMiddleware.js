module.exports = (erro , req, res, next) => {
    console.log(erro);
    res.status(400).end();
}