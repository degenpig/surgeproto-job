const express = require('express');
const app = express();

const router = express.Router();

const Job = require("../models/Job");
const ProfileForm = require("../models/ProfileForm");

const jobController = require("../controllers/job");


router.route("/getAllJobs").get(function (req, res, next) {
    Job.find(function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

router.route("/updateState/:id").post(function (req, res, next) {
    Job.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.json(data);
                    console.log("Job State updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
})


router.route("/:id").get(function (req, res) {
    Job.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.json(data);
        }
    })
})

router.route("/addJob").post(function (req, res) {
    let employee = new Job(req.body);
    console.log(req.body);
    employee
        .save()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch((err) => {
            res.status(400).send("something went wrong on" + err);
        })
})


router.route("/updateJob/:id").post(function (req, res, next) {
    Job.findByIdAndUpdate(req.params.id,
        {
            $set: req.body,
        },
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.status(200).json(req.body)
                    console.log("User Profile updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
    // Job.findById(req.params.id, function(err, employee){
    //     if(!employee)
    //         return next(new Error("Unable to find emoloyee with this id"));
    //     else{
    //         employee.firstName = req.body.firstName;
    //         employee.lastName = req.body.lastName;
    //         employee.phone= req.body.phone;
    //         employee.email = req.body.email;
    //     }
    //     employee.save()
    //     .then(()=>{res.json("Employee updated successfully")})
    //     .catch(err=>{
    //         res.status(400).send("Unable to update employee")
    //     })
    // })
});

router.route("/deleteJob/:id").get(function (req, res, next) {
    Job.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
            //return next(err);
        } else {
            if (data) {
                res.status(200).json({
                    msg: data,
                    success: "Job Deleted successfully"
                })
            } else {
                res.status(400).json({
                    msg: "No data",
                })
            }
        }
    }
    );
});


router.route("/getJobProfile/:id").get(function (req, res) {
    Job.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.json(data);
        }
    })
})

// router.get("/getJobs", jobController.getJobs);

module.exports = router;