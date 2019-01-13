//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/instatech'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/instatech/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//######################################//


var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mongodb = require("mongodb");

var model = require("./models/Issue");
var Issue = mongoose.model("Issue")

// import Issue from './models/Issue';

const app2 = express();
const router = express.Router();

app2.use(cors());
app2.use(bodyParser.json());

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

app2.use('/', router);


app2.listen(4000, () => console.log('Express server running on port 4000'));

