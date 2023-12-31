/*********************************************************************************

* WEB322 – Assignment 1

* I declare that this assignment is my own work in accordance with Seneca Academic Policy. 

* No part of this assignment has been copied manually or electronically from any other source

* (including web sites) or distributed to other students.

*

* Name: Divyanshu Student ID: 167821214 Date: 19/05/2023

*

* Cyclic Web App URL: https://clean-crab-life-jacket.cyclic.app/

*

* GitHub Repository URL: https://github.com/Divyanshujaaat156969/web322-blog

*

********************************************************************************/








var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Divyanshu Joshi - 167821214");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);