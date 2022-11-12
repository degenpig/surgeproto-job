const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const user = require("./routes/user");
const job = require("./routes/job");
const userProfile = require("./routes/userProfile");
const profileForm = require("./routes/profileForm");
const transfer = require("./routes/transfer");
const JobTransfer = require("./routes/JobTransfer");
const AdminMailbox = require("./routes/AdminMailbox");
const Msg = require("./routes/Msg");
const GigTransfer = require("./routes/GigTransfer");
const gig = require("./routes/gig");
const InitiateMongoServer = require("./config/db");

// Tron Server
const tron = require("./controllers/tron");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();
app.use(cors());

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/api", user);
app.use("/api/job", job);
app.use("/api/userProfile", userProfile);
app.use("/api/profileForm", profileForm);
app.use("/api/transfer", transfer);
app.use("/api/job_transfer", JobTransfer);
app.use("/api/adminMailbox", AdminMailbox);
app.use("/api/msg", Msg);
app.use("/api/gig_transfer", GigTransfer);
app.use("/api/gig", gig);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

// tron.transferListener();