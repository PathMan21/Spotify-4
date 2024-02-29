const express = require("express");
const jwt = require("jsonwebtoken");

app.use(express.json());
const app = express();
const axios = require("axios");

const users = [
    {
        id: "1",
        username: "john",
        password: "1234"
    }

]

app.post("/api/login", (req,res) => {
    const { username, password } = req.body;

    const user = users.find((u) => {
        return u.username === username && u.password === password;
    });
    if (user){
        res.json(user)
    } else {
        res.status(400)
    }

});

app.listen(3000, () => console.log("running backend"));