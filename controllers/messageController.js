const notificationapi = require('notificationapi-node-server-sdk').default;
require('dotenv').config();

const sendMessage = (req, res) => {
    const { number, message } = req.body
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET

    notificationapi.init(clientId, clientSecret);

    notificationapi.send({
        notificationId: 'test_notification',
        user: {
            id: "abhaysharma.as2719@gmail.com",
            number: `+91${number}` // Replace with your phone number
        },
        mergeTags: {
            "message": "testMessage"
        }
    })
    res.json({"number" : number, "message" : message});
};

module.exports = {
    sendMessage
};
