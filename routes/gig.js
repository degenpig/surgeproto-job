const express = require('express');
const app = express();

const router = express.Router();

const Gig = require("../models/Gig");
// const ProfileForm = require("../models/ProfileForm");

// const jobController = require("../controllers/job");


router.route("/addGig").post(function (req, res) {
    let gig = new Gig(req.body);
    console.log(req.body);
    gig
        .save()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch((err) => {
            res.status(400).send("something went wrong on" + err);
        })
})



router.route("/getAllGigs").get(function (req, res, next) {
    Gig.find(function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

// router.route("/changeState").post(function (req, res, next) {
//     Job.findByIdAndUpdate(req.params.id,
//         {
//             $set: req.body,
//         },
//         (err, data) => {
//             if (err) {
//                 console.log("Error" + err);
//                 return next(err);

//             } else {
//                 if (data) {
//                     res.json(data);
//                     console.log("Job updated successfully")
//                 } else {
//                     res.status(404).json({
//                         msg: "No data"
//                     })
//                 }

//             }
//         }
//     )
// })


// router.route("/:id").get(function (req, res) {
//     Job.findById(req.params.id, function (err, data) {
//         if (err) {
//             res.status(400).json({
//                 error: err
//             })
//         } else {
//             res.json(data);
//         }
//     })
// })

router.route("/updateState/:id").post(function (req, res, next) {
    Gig.findByIdAndUpdate(req.params.id,
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
                    console.log("Gig updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
});

router.route("/deleteGig/:id").get(function (req, res, next) {
    Gig.findByIdAndRemove(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
            //return next(err);
        } else {
            if (data) {
                res.status(200).json({
                    msg: data,
                    success: "Gig Deleted successfully"
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

router.route("/getGigProfile/:id").get(function (req, res) {
    Gig.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.json(data);
        }
    })
})

router.route("/updateGig/:id").post(function (req, res, next) {
    Gig.findByIdAndUpdate(req.params.id,
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
                    console.log("Gig Profile updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
});

// router.get("/getJobs", jobController.getJobs);

module.exports = router;