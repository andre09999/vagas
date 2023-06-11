const validate = (req, res, next) => {
    try {
        const { secret } = req.body;
        if (!secret || secret !== 'maçã verde') {
         return res.status(401).json({ message: 'Usuario não tem autorização para este processo' });
        }
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Usuario não tem autorização para este processo' });
    }
};

module.exports = validate;