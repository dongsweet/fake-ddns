'use strict';
const PORT = 7001;
const express = require('express');
const app = express();
var currentIp = "127.0.0.1";
init();

function init() {

    app.listen(PORT, function () {
        console.log(`Demo server listening on port ${PORT}.`);
    });

    app.get("/get", (req, res) => {
        res.send(currentIp);
    });

    app.get("/update", (req, res) => {
        currentIp = req.header('x-forwarded-for') || req.ip || "127.0.0.1";
        res.send("OK, " + currentIp);
    });
}

