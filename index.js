
const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('./dist'));

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}!`);
});
