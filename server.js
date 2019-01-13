
const path = require('path');
const express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongodb = require("mongodb");

var model = require("./models/Issue");
var Issue = mongoose.model("Issue")

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('process.env.MONGODB');
mongoose.connect('mongodb://admin:WZD73xKbmFW4js9@ds155164.mlab.com:55164/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});



router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else {
            issue.nombre = req.body.nombre;
            issue.apellido1 = req.body.apellido1;
            issue.apellido2 = req.body.apellido2;
            issue.fecha = req.body.fecha;
            issue.contrasena = req.body.contrasena;
            issue.correo = req.body.correo;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);




// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/instatech'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/instatech/index.html'));
});

// Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 4000);


