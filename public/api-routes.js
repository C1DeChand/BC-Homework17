const express = require("express");
const mongoose = require("mongoose");

const db = require("./models");
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.get("/api/workouts/range", (req, res) => {
    
});

app.get("/exercise/:id", (req, res) => {
    
});

app.get("/api/workouts", (req, res) => {
    
});

app.post("/api/workouts", ({ body }, res) => {
    
});

app.post("/exercise", ({ body }, res) => {
    
});

app.post("/exercise/:id", (req, res) => {
    
});

app.put("/api/workouts", ({ body }, res) => {
    
});