module.exports = (app) => {
    const deputyController = require('../controllers/deputyController');

    /**
     * @swagger
     * /api/deputy:
     *   get:
     *     summary: Retrieve a list of deputies
     *     description: Returns a list of all deputies
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/deputy', deputyController.getAllDeputies);

    /**
     * @swagger
     * /api/deputy/{id}:
     *   get:
     *     summary: Retrieve a single deputy by ID
     *     description: Returns a single deputy based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the deputy to retrieve
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/deputy/:id', deputyController.getDeputyById);

    /**
     * @swagger
     * /api/deputy:
     *   post:
     *     summary: Create a new deputy
     *     description: Creates a new deputy record
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateDeputyDto'
     *     responses:
     *       '201':
     *         description: Deputy successfully created
     */
    app.post('/api/deputy', deputyController.createDeputy);

    /**
     * @swagger
     * /api/deputy/{id}:
     *   put:
     *     summary: Update an existing deputy
     *     description: Updates an existing deputy record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the deputy to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateDeputyDto'
     *     responses:
     *       '200':
     *         description: Deputy successfully updated
     */
    app.put('/api/deputy/:id', deputyController.updateDeputy);

    /**
     * @swagger
     * /api/deputy/{id}:
     *   delete:
     *     summary: Delete a deputy
     *     description: Deletes a deputy record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the deputy to delete
     *     responses:
     *       '204':
     *         description: Deputy successfully deleted
     */
    app.delete('/api/deputy/:id', deputyController.deleteDeputy);
};
