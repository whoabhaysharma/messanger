const express = require('express');
const router = express.Router();
const messageController = require("../controllers/messageController")

// Route for getting all users (GET /users)
router.post('/send', messageController.sendMessage);

module.exports = router;