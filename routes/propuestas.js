//donde se mete la logica del api en la routa de propuestas
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//all in propuesta collection
router.get('/', function(req, res){
    console.log('get request at /propuesta');
        mongoose.model('propuesta').find(function(err, docs){
            //console.log(docs);
            res.json(docs);
        });
});

//find one
router.get('/:id', function(req, res){
    console.log('get request at /propuesta');
        mongoose.model('propuesta').find(function(err, docs){
            //console.log(docs);
            res.json(docs);
        });
});

//save a new propuesta
router.post('/', function(req, res){
    console.log('post request /propuesta');
        var newPropuesta =  mongoose.model('propuesta')(req.body);
        newPropuesta.save(function(err, doc){
            if(err) throw err;
            return res.json(doc);
        });
});

//delete one propuesta
router.delete('/:id', function(req, res){
    console.log('delete request /propuesta');
});

//update one propuesta
router.put('/', function(req, res){
    console.log('put request /propuesta');
});

module.exports = router;
