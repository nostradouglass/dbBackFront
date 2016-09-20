var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BearDb')



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(express.static('./public'));



var Bear = require('./models/bear');

var port = process.env.PORT || 8080;

// Routes for API

var router = express.Router();


//middleware for all request
router.use(function (req, res, next) {
    //do logging
    console.log('Something is happening');
    next();
});


// test route
router.get('/', function (req, res) {
    res.json({
        message: 'Testing API sending simple JSON to /'
    })
});


// Routes that end in /bears
router.route('/bears')

.post(function (req, res) {
    var bear = new Bear(); // create a new instance of the bear model
    bear.name = req.body.name; //se the bears name (comes from the post request)
    bear.age = req.body.age;
  
    bear.save(function (err) {
        if (err)
            res.send(err);

        res.json({
            message: `Bear ${bear.name} created`
        });
    });

})

.get(function (req, res) {
    Bear.find(function (err, bears) {
        if (err)
            res.send(err);
        res.json(bears);
    });
});

router.route('/bears/:id')

.get(function (req, res) {
    Bear.findById(req.params.id, function (err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
})

.put(function (req, res) {

    Bear.findById(req.params.id, function (err, bear) {
        if (err)
            res.send(err);

        bear.name = req.body.name; //update the bears info

        bear.save(function (err) {
            if (err)
                res.send(err)

            res.json({
                message: `Bear updated to ${bear.name}`
            })
        });
    })
})

.delete(function(req, res) {
        _id = req.params.id;
        console.log(_id)
        Bear.remove({_id: _id}, function(err, doc) {
            res.json(doc);
            
        })
    } 
    );




// Register routes
app.use('/api', router);



//Start the server

app.listen(port);

console.log(`Server started on port ${port}`);