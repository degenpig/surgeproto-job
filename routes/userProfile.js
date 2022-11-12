const express = require('express');
const app = express();

const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs")

router.route("/").get(function (req, res, next) {
    User.find(function (err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    })
})


router.route("/getPasswordResetQuestion").post(async function (req, res) {
    let user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (user) res.json(user.passwordResetQuestion);
    else res.json("no user");
})

router.route("/passwordResetCheck").post(async function (req, res) {
    console.log(req.body.email)
    console.log(req.body.passwordResetAnswer)
    let user = await User.findOne({ email: req.body.email });
    if (user.passwordResetAnswer === req.body.passwordResetAnswer) {
        res.json("ok");
    }
    else res.json("wrong");
})

router.route("/resetPassword").post(function (req, res) {
    bcrypt.genSalt(10).then((salt) =>
        bcrypt.hash(req.body.password, salt).then((password) => {
            User.findOneAndUpdate({ email: req.body.email }, { password: password })
                .then(user => res.json("ok"))
                .catch(user => res.json("error"))
        })
    );
})

router.route("/getUserProfile/:id").get(function (req, res) {
    User.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.json(data);
        }
    })
})

router.route("/:id").get(function (req, res) {
    User.findById(req.params.id, function (err, data) {
        if (err) {
            res.status(400).json({
                error: err
            })
        } else {
            res.json(data);
        }
    })
})

router.route("/addUserProfile").post(function (req, res) {
    let userProfile = new UserProfile(req.body);
    console.log(req.body);
    userProfile
        .save()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch((err) => {
            res.status(400).send("something went wrong on" + err);
        })
})

router.route("/updateUserProfile/addExperience/:id").post(function (req, res, next) {
    User.findByIdAndUpdate(req.params.id,
        {
            $push: {
                experience: {
                    title: req.body.title,
                    company: req.body.company,
                    from: req.body.from,
                    to: req.body.to,
                    description: req.body.desc
                }
            }
        },
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.status(200).json(req.body)
                    console.log("User Profile Education updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
});

router.route("/updateUserProfile/updateExperience/:id").post(async function (req, res, next) {
    const user = await User.findById(req.params.id);
    const experience = user.experience.find(
        (comment) => comment.id === req.body.updateId
    );
    experience.title = req.body.title;
    experience.company = req.body.company;
    experience.from = req.body.from;
    experience.to = req.body.to;
    experience.description = req.body.desc;

    user.save()
        .then(
            console.log("Updated!!"),
            res.status(200).json(req.body)
        )
        .catch(err => console.log(err));
});

router.route("/updateUserProfile/deleteExperience/:id").post(function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, {
        $pull: {
            'experience': { // rename this to orders 
                '_id': { $in: req.body.delId }
            }
        }
    }
        ,
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.status(200).json(req.body)
                    console.log("User Profile Experience removed successfully")
                } else {
                    res.status(404).json({
                        msg: "No data..."
                    })
                }

            }
        }
    );
});

router.route("/updateUserProfile/addEducation/:id").post(function (req, res, next) {
    User.findByIdAndUpdate(req.params.id,
        {
            $push: {
                education: {
                    school: req.body.school,
                    degree: req.body.degree,
                    fieldofstudy: req.body.fieldofstudy,
                    from: req.body.from,
                    to: req.body.to,
                    description: req.body.desc
                }
            }
        },
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.status(200).json(req.body)
                    console.log("User Profile Education updated successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    )
});


router.route("/updateUserProfile/addConnection/:id").post(async function (req, res, next) {
    console.log(req.body.creator_id);
    const user = await User.findById(req.params.id);
    const connections = user.connections.find(
        (comment) => comment.person_id === req.body.creator_id
    );
    console.log(connections);
    if (connections === undefined) {

        User.findByIdAndUpdate(req.params.id,
            {
                $push: {
                    connections: {
                        person_id: req.body.creator_id,
                    }
                }
            },
            (err, data) => {
                if (err) {
                    console.log("Error" + err);
                    return next(err);

                } else {
                    if (data) {
                        res.status(200).json(req.body)
                        console.log("User Profile connection updated successfully")
                    } else {
                        res.status(404).json({
                            msg: "No data"
                        })
                    }

                }
            }
        )
    }

});

router.route("/updateUserProfile/updateEducation/:id").post(async function (req, res, next) {
    const user = await User.findById(req.params.id);
    const education = user.education.find(
        (comment) => comment.id === req.body.updateId
    );
    education.school = req.body.school;
    education.degree = req.body.degree;
    education.from = req.body.from;
    education.to = req.body.to;
    education.description = req.body.desc;

    user.save()
        .then(console.log("Updated!!"),
            res.status(200).json(req.body))
        .catch(err => console.log(err));
});

router.route("/updateUserProfile/deleteEducation/:id").post(function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, {
        $pull: {
            'education': { // rename this to orders 
                '_id': { $in: req.body.delId }
            }
        }
    }
        ,
        (err, data) => {
            if (err) {
                console.log("Error" + err);
                return next(err);

            } else {
                if (data) {
                    res.status(200).json(req.body)
                    console.log("User Profile Education removed successfully")
                } else {
                    res.status(404).json({
                        msg: "No data"
                    })
                }

            }
        }
    );
});
router.route("/updateUserProfile/:id").post(function (req, res, next) {
    User.findByIdAndUpdate(req.params.id,
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
    // UserProfile.findById(req.params.id, function(err, employee){
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


module.exports = router;