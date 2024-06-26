const { Deputy, Faction, Schedule } = require('../models');

exports.getAllDeputies = async (req, res) => {
    try {
        const deputies = await Deputy.findAll();
        res.json(deputies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDeputyById = async (req, res) => {
    try {
        const deputy = await Deputy.findByPk(req.params.id);
        if (deputy) {
            res.json(deputy);
        } else {
            res.status(404).json({ error: 'Deputy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createDeputy = async (req, res) => {
    try {
        const deputy = await Deputy.create(req.body);
        res.status(201).json(deputy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateDeputy = async (req, res) => {
    try {
        const deputy = await Deputy.findByPk(req.params.id);
        if (deputy) {
            await deputy.update(req.body);
            res.json(deputy);
        } else {
            res.status(404).json({ error: 'Deputy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteDeputy = async (req, res) => {
    try {
        const deputy = await Deputy.findByPk(req.params.id);
        if (deputy) {
            await deputy.destroy();
            res.json({ message: 'Deputy deleted' });
        } else {
            res.status(404).json({ error: 'Deputy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
