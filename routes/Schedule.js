module.exports = (app) => {
    const scheduleController = require('../controllers/scheduleController');

    app.get('/api/schedule', scheduleController.getAllSchedules);
    app.post('/api/schedule', scheduleController.createSchedule);
    app.get('/api/schedule/:id', scheduleController.getScheduleById);
    app.put('/api/schedule/:id', scheduleController.updateSchedule);
    app.delete('/api/schedule/:id', scheduleController.deleteSchedule);
    app.put('/api/schedule/signUp/:id', scheduleController.signUpForSchedule);
};
