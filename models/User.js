// //FILENAME : User.js

// const mongoose = require("mongoose");

// const UserSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: String,
//     default: "user"
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   }
// });

// // export model user with UserSchema
// module.exports = mongoose.model("user", UserSchema);

//FILENAME : User.js

const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true
  },
  passwordResetQuestion: {
    type: String,
    default: null
  },
  passwordResetAnswer: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: "user"
  },
  job: {
    type: String,
    default: "visitor"
  },
  location: {
    type: String,
    default: ""
  },
  about: {
    type: String,
    default: ""
  },
  bio: {
    type: String,
    default: ""
  },
  skills: {
    type: [String],
  },
  avatar: {
    type: String,
    default: "img/default_avatar.png"
  },
  experience: {
    type: [
      {
        title: {
          type: String
        },
        company: {
          type: String
        },
        location: {
          type: String
        },
        from: {
          type: String
        },
        to: {
          type: String
        },
        description: {
          type: String
        },
        avatar: {
          type: String
        }
      }
    ],
    // default: [
    //   {
    //     title: "title",
    //     company: "company",
    //     location: "location",
    //     from: "2000-01-01",
    //     to: "2000-01-01",
    //     description: "description",
    //     avatar: "avatar"
    //   }
    // ]
  },
  education: {
    type: [
      {
        school: {
          type: String
        },
        degree: {
          type: String
        },
        fieldofstudy: {
          type: String
        },
        from: {
          type: String
        },
        to: {
          type: String
        },
        description: {
          type: String
        },
        avatar: {
          type: String
        }
      }
    ],
    // default: [
    //   {
    //     school: "school",
    //     degree: "degree",
    //     fieldofstudy: "fieldofstudy",
    //     from: "2000-01-01",
    //     to: "2000-01-01",
    //     description: "description",
    //     avatar: "avatar"
    //   }
    // ]
  },
  // test: {
  //   type: [
  //     {
  //       name: {
  //         type: String,
  //       },
  //       degree: {
  //         type: String,
  //       }
  //     }
  //   ],
  //   default: [
  //     {
  //       name: "Daniel",
  //       degree: "Bachelor",
  //     }
  //   ]
  // },

  social: {
    instagram: {
      type: String,
      default: "",
    },
    facebook: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    youtube: {
      type: String,
      default: "",
    },
    github: {
      type: String,
      default: "",
    },
  },
  connections: {
    type: [
      {
        person_id: {
          type: String
        },
      }
    ],
  },
  views: {
    type: [String]
  },
  profile_sign: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);