module.exports = (app) => {
    const scheduleController = require('../controllers/scheduleController');

    /**
     * @swagger
     * /api/schedule:
     *   get:
     *     summary: Retrieve a list of schedules
     *     description: Returns a list of all schedules
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/schedule', scheduleController.getAllSchedules);

    /**
     * @swagger
     * /api/schedule:
     *   post:
     *     summary: Create a new schedule
     *     description: Creates a new schedule record
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Schedule'
     *     responses:
     *       '201':
     *         description: Schedule successfully created
     */
    app.post('/api/schedule', scheduleController.createSchedule);

    /**
     * @swagger
     * /api/schedule/{id}:
     *   get:
     *     summary: Retrieve a single schedule by ID
     *     description: Returns a single schedule based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the schedule to retrieve
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/schedule/:id', scheduleController.getScheduleById);

    /**
     * @swagger
     * /api/schedule/{id}:
     *   put:
     *     summary: Update an existing schedule
     *     description: Updates an existing schedule record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the schedule to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Schedule'
     *     responses:
     *       '200':
     *         description: Schedule successfully updated
     */
    app.put('/api/schedule/:id', scheduleController.updateSchedule);

    /**
     * @swagger
     * /api/schedule/{id}:
     *   delete:
     *     summary: Delete a schedule
     *     description: Deletes a schedule record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the schedule to delete
     *     responses:
     *       '204':
     *         description: Schedule successfully deleted
     */
    app.delete('/api/schedule/:id', scheduleController.deleteSchedule);

    /**
     * @swagger
     * /api/schedule/signUp/{id}:
     *   put:
     *     summary: Sign up for a schedule
     *     description: Allows a user to sign up for a specific schedule
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the schedule to sign up for
     *     responses:
     *       '200':
     *         description: Successfully signed up for the schedule
     */
    app.put('/api/schedule/signUp/:id', scheduleController.signUpForSchedule);
};