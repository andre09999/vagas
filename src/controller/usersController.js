const data = require('../model/fakeData');

const getUsers = (req, res) => {
    res.status(200).json(data);
};

const create = (req, res) => {
    const { name } = req.body;
    const { job } = req.body;
    if (!name || !job) {
     return res.status(400).json({ message: 'favor colocar dados corretamente' });
    }
    const newUser = {
        name,
        job,
    };

    data.push(newUser);
    
    res.status(201).json(newUser);
};

const remove = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Favor colocar dados corretamente' });
    }
    try {
        const result = data.findIndex((d) => d.name === name);
        if (result < 0) {
            return res.status(400).json({ message: 'Favor colocar dados corretamente' });
        }
        data[result] = null;
        res.status(202).json({ message: `O usuario ${name} foi removido` });
    } catch (e) {
        res.status(400).json({ message: 'Favor colocar dados corretamente' });
    }
};

const atualização = (req, res) => {
    const { id } = req.params;
    try {
        const reg = data.find((d) => d.id === Number(id));
        reg.name = req.body.name;
        reg.job = req.body.job;
        res.send(reg);
    } catch (e) {
        res.status(400).json({ message: 'Dados invalidos' });
    }
};

const acess = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Favor colocar dados corretamente' }); 
    }
    res.status(200).jason({ message: `Usuário ${name}  foi lido 0 vezes.` });
};

module.exports = { getUsers, create, remove, atualização, acess };