const express= require('express');
const data = require('./data');
// const { use } = require('./login');
const fs = require('fs');

const router=express.Router();
let messageContent='';

router.get(`/`,(req, res,next) => {
 
    messageContent='';
    for(let i=0;i<data.length;i++){
        messageContent+=data[i];
    }
    res.write(`
    <div>${messageContent}</div>
    <form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST"><input id="message" name="message" type="text"placeHolder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>
    `)
   })
router.post(`/`,(req, res, next) => {
    
    data.push(`${req.body.username}:${req.body.message} `)
    res.redirect(`/`)
    
    
})
// localStorage.getItem(`username`)

module.exports = router