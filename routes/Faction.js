module.exports = (app) => {
    const factionController = require('../controllers/factionController');

    app.get('/api/faction', factionController.getAllFactions);
    app.post('/api/faction', factionController.createFaction);
    app.get('/api/faction/:id', factionController.getFactionById);
    app.put('/api/faction/:id', factionController.updateFaction);
    app.delete('/api/faction/:id', factionController.deleteFaction);
};
