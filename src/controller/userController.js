const data = require('../model/fakeData');

const getUser = (req, res) => {
    const { name } = req.query;
    console.log(name);
    const reg = data.find((d) => d.name.split(' ')[0] === name);
    if (!reg) {
       return res.status(400).json({ message: 'usuario não encontrado' });
    }
    res.status(200).json(reg);
};

module.exports = {
    getUser,
};