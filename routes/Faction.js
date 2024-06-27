module.exports = (app) => {
    const factionController = require('../controllers/factionController');

    /**
     * @swagger
     * /api/faction:
     *   get:
     *     summary: Retrieve a list of factions
     *     description: Returns a list of all factions
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/faction', factionController.getAllFactions);

    /**
     * @swagger
     * /api/faction:
     *   post:
     *     summary: Create a new faction
     *     description: Creates a new faction record
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Faction'
     *     responses:
     *       '201':
     *         description: Faction successfully created
     */
    app.post('/api/faction', factionController.createFaction);

    /**
     * @swagger
     * /api/faction/{id}:
     *   get:
     *     summary: Retrieve a single faction by ID
     *     description: Returns a single faction based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the faction to retrieve
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/faction/:id', factionController.getFactionById);

    /**
     * @swagger
     * /api/faction/{id}:
     *   put:
     *     summary: Update an existing faction
     *     description: Updates an existing faction record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the faction to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Faction'
     *     responses:
     *       '200':
     *         description: Faction successfully updated
     */
    app.put('/api/faction/:id', factionController.updateFaction);

    /**
     * @swagger
     * /api/faction/{id}:
     *   delete:
     *     summary: Delete a faction
     *     description: Deletes a faction record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the faction to delete
     *     responses:
     *       '204':
     *         description: Faction successfully deleted
     */
    app.delete('/api/faction/:id', factionController.deleteFaction);
};