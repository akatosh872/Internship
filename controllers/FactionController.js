const { Faction } = require('../models');

exports.getAllFactions = async (req, res) => {
    try {
        const factions = await Faction.findAll();
        res.json(factions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFactionById = async (req, res) => {
    try {
        const faction = await Faction.findByPk(req.params.id);
        if (faction) {
            res.json(faction);
        } else {
            res.status(404).json({ error: 'Faction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFaction = async (req, res) => {
    try {
        const faction = await Faction.create(req.body);
        res.status(201).json(faction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateFaction = async (req, res) => {
    try {
        const faction = await Faction.findByPk(req.params.id);
        if (faction) {
            await faction.update(req.body);
            res.json(faction);
        } else {
            res.status(404).json({ error: 'Faction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteFaction = async (req, res) => {
    try {
        const faction = await Faction.findByPk(req.params.id);
        if (faction) {
            await faction.destroy();
            res.json({ message: 'Faction deleted' });
        } else {
            res.status(404).json({ error: 'Faction not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};