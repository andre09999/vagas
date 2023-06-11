const data = require('../model/fakeData');

const getUser = (req, res) => {
    const { name } = req.query;
    const reg = data.find((d) => d.name.split(' ')[0] === name);
    const index = data.findIndex((d) => d.name.split(' ')[0] === name);
    if (!reg) {
        return res.status(400).json({ message: 'usuario não encontrado' });
    }
    data[index].quantity += 1;
    res.status(200).json({ id: reg.id, name: reg.name, job: reg.job });
};

module.exports = {
    getUser,
};