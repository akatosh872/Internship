module.exports = (app) => {
    const authController = require('../controllers/authController');

    /**
     * @swagger
     * /api/auth/register:
     *   post:
     *     summary: Register a new user
     *     description: Creates a new user account
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       '201':
     *         description: User successfully registered
     */
    app.post('/api/auth/register', authController.register);

    /**
     * @swagger
     * /api/auth/login:
     *   post:
     *     summary: Login to user account
     *     description: Logs in an existing user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/LoginCredentials'
     *     responses:
     *       '200':
     *         description: User successfully logged in
     */
    app.post('/api/auth/login', authController.login);

    /**
     * @swagger
     * /api/auth/users:
     *   get:
     *     summary: Retrieve a list of users
     *     description: Returns a list of all registered users
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/auth/users', authController.getAllUsers);

    /**
     * @swagger
     * /api/auth/check:
     *   get:
     *     summary: Check authentication status
     *     description: Verifies if a user is authenticated
     *     responses:
     *       '200':
     *         description: User is authenticated
     */
    app.get('/api/auth/check', authController.checkAuth);

    /**
     * @swagger
     * /api/auth/{id}:
     *   get:
     *     summary: Retrieve a user by ID
     *     description: Returns a user based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user to retrieve
     *     responses:
     *       '200':
     *         description: A successful response
     */
    app.get('/api/auth/:id', authController.getUserById);

    /**
     * @swagger
     * /api/auth/{id}:
     *   put:
     *     summary: Update a user
     *     description: Updates a user record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       '200':
     *         description: User successfully updated
     */
    app.put('/api/auth/:id', authController.updateUser);

    /**
     * @swagger
     * /api/auth/{id}:
     *   delete:
     *     summary: Delete a user
     *     description: Deletes a user record based on ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user to delete
     *     responses:
     *       '204':
     *         description: User successfully deleted
     */
    app.delete('/api/auth/:id', authController.deleteUser);

    /**
     * @swagger
     * /api/auth/add-profile/{id}:
     *   post:
     *     summary: Add a profile to a user
     *     description: Adds a profile to an existing user
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user to add a profile to
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Profile'
     *     responses:
     *       '200':
     *         description: Profile successfully added to the user
     */
    app.post('/api/auth/add-profile/:id', authController.addProfile);
};