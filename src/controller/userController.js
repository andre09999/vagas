const data = require('../model/fakeData');

const getUser = (req, res) => {
    const { name } = req.query;

    for (let i = 0; i < data.length; i += 1) {
        if (i.name === name) {
            res.send(data[i]);
        }
    }
};

module.exports = {
    getUser,
};