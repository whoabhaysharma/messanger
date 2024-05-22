const express = require('express');
require('dotenv').config();
const app = express();

// Include routes
const messageRoutes = require('./routes/messageRoutes');

app.use(express.json());
// Use routes
app.use('/message', messageRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
