const express = require('express');
const app = express();

const router = express.Router();

const AdminMailbox = require("../models/AdminMailbox");
// const ProfileForm = require("../models/ProfileForm");

// const jobController = require("../controllers/job");

router.route("/addMsg").post(function (req, res) {
    let info = new AdminMailbox(req.body);
    console.log(req.body);
    info
        .save()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch((err) => {
            res.status(400).send("something went wrong on" + err);
        })
})



router.route("/getAll").get(function (req, res, next) {
    AdminMailbox.find(function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

// router.route("/updateState/:id").post(function (req, res, next) {
//     AdminMailbox.findByIdAndUpdate(req.params.id,
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
//                     console.log("AdminMailbox State updated successfully")
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

// router.route("/updateJob/:id").post(function (req, res, next) {
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
// });

router.route("/deleteMsg/:del_id").get(function (req, res, next) {
    AdminMailbox.findByIdAndRemove(req.params.del_id, function (err, data) {
        if (err) {
            res.json(err);
            //return next(err);
        } else {
            if (data) {
                res.status(200).json({
                    msg: data,
                    success: "Msg Deleted successfully"
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

// router.get("/getJobs", jobController.getJobs);

module.exports = router;