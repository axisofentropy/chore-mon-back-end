const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const friendRoutes = require("./friendRoutes");
const groupRoutes = require("./groupRoutes");
// const subscriptionRoutes = require("./subscriptionRoutes");
const taskRoutes = require("./taskRoutes");
const groupMemberRoutes = require("./groupMemberRoutes");
const listRoutes = require("./listRoutes");
const notificationRoutes = require("./notificationRoutes");
const inviteRoutes = require("./invitationRoutes");
const commentRoutes = require("./commentRoutes");
const billingRoutes = require("./billingRoutes");
// const validate = require("../auth/checkJwt");

// router.use(validate);

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is the API root endpoint." });
});

router.use("/users", userRoutes);
router.use("/friends", friendRoutes);
router.use("/group", groupRoutes);
// router.use("/subscription", subscriptionRoutes);
router.use("/tasks", taskRoutes);
router.use("/groupmembers", groupMemberRoutes);
router.use("/list", listRoutes);
router.use("/notification", notificationRoutes);
router.use("/invite", inviteRoutes);
router.use("./comments", commentRoutes);
router.use("/charge", billingRoutes);

module.exports = router;
