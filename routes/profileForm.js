const express = require('express');
const app = express();

const router = express.Router();

const ProfileForm = require("../models/ProfileForm");



router.route("/getAll").get(function (req, res, next) {
    ProfileForm.find(function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})

router.route("/add").post(function (req, res) {
    let form = new ProfileForm(req.body);
    console.log(req.body);
    form
        .save()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch((err) => {
            res.status(400).send("something went wrong on" + err);
        })
})


router.route("/updateState/:id").post(function (req, res, next) {
    ProfileForm.findByIdAndUpdate(req.params.id,
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
                    console.log("ProfileForm updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
});


module.exports = router;