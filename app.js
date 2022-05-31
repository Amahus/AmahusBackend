const express = require("express");
const { pool } = require("./config");

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});