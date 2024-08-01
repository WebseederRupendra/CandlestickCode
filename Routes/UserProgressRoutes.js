const express = require("express");
const router = express.Router();
const {checkProgress} = require('../middlewares/UserProgressMiddleware');
const {createUserProgress, getUserProgress,updateUserProgress,deleteUserProgress} = require('../Controllers/UserProgressCOntroller')
// User Progress Routes
router.post('/user-progress', createUserProgress); // Define the route
router.get("/user-progress/:userId", getUserProgress);
router.put("/user-progress/:userId", updateUserProgress);
router.delete("/user-progress/:userId", deleteUserProgress);


module.exports = router;

