module.exports = (app) => {
    const authController = require('../controllers/authController');

    app.post('/api/auth/register', authController.register);
    app.post('/api/auth/login', authController.login);
    app.get('/api/auth/users', authController.getAllUsers);
    app.get('/api/auth/check', authController.checkAuth);
    app.get('/api/auth/:id', authController.getUserById);
    app.put('/api/auth/:id', authController.updateUser);
    app.delete('/api/auth/:id', authController.deleteUser);
    app.post('/api/auth/add-profile/:id', authController.addProfile);
};
