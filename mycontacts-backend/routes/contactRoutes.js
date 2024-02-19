const express = require('express')

const router = express.Router();

router.route('/').get((req,resp)=>{
    resp.status(200).json({message : "get all contacts"});
});

router.route('/').post((req,resp)=>{
    resp.status(200).json({message : "Create contacts"});
});

router.route('/:id').get((req,resp)=>{
    resp.status(200).json({message : `get contacts for ${req.params.id}`});
});

router.route('/:id').put((req,resp)=>{
    resp.status(200).json({message : `Update contacts for ${req.params.id}`});
});

router.route('/:id').delete((req,resp)=>{
    resp.status(200).json({message : `Delete contacts for ${req.params.id}`});
});

module.exports = router;