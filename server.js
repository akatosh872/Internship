const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Importing routes
require('./routes/deputy')(app);
require('./routes/schedule')(app);
require('./routes/auth')(app);
require('./routes/faction')(app);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
