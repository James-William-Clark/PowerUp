const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const responseData = {
        name:"John Smith",
        weight:75,
        height:175,
    }
     
    const jsonContent = JSON.stringify(responseData);
    res.send(jsonContent);// this gets executed when user visits http://localhost:3000/profile
});

router.post('/', (req, res) => {
    console.log(req.body)
    res.send("");
});

// export the router module so that server.js file can use it
module.exports = router;