var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const config = require("../config/auth.config");
const Job = require("../models/Job");

exports.getJobs = (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        Job.findById(req.job.id).then((job) => res.json(job));
    } catch (e) {
        res.send({ message: "Error in Fetching Jobs" });
    }
};
