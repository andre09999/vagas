const data = require('../model/fakeData');

const getUsers = (req, res) => {
    res.send(data);
};

const create = (req, res) => {
    const { name } = req.body;
    const { job } = req.body;
    
    const newUser = {
        name,
        job,
    };

    data.push(newUser);
    
    res.send(newUser);
};

const remove = (req, res) => {
    const { name } = req.query;

    for (let i = 0; i < data.length; i += 1) {
        if (i.name === name) {
            data[i] = null;
        }
    }

    res.send('success');
};

const atualização = (req, res) => {
    const { id } = req.query;
    try {
        const reg = data.find((d) => d === id);
        reg.name = req.body.name;
        reg.job = req.body.job;
        res.send(reg);
    } catch (e) {
        res.status(400).json({ message: 'Dados invalidos' });
    }
};

const acess = (req, res) => {
    const { name } = req.query;

    res.send(`Usuário ${name}  foi lido 0 vezes.`);
};

module.exports = { getUsers, create, remove, atualização, acess };