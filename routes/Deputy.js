module.exports = (app) => {
    const deputyController = require('../controllers/deputyController');

    app.get('/api/deputy', deputyController.getAllDeputies);
    app.get('/api/deputy/:id', deputyController.getDeputyById);
    app.post('/api/deputy', deputyController.createDeputy);
    app.put('/api/deputy/:id', deputyController.updateDeputy);
    app.delete('/api/deputy/:id', deputyController.deleteDeputy);
};
