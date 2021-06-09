var express = require('express')
var path = require("path")
const { get } = require('http')
var app = express()

var s = { name: "Sing-in" }


var mongoose = require('mongoose');
const { hostname } = require('os');


mongoose.connect('mongodb+srv://zeel_prajapati_mongo:zeel_prajapati_mongo@cluster0.zarzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


const kittySchema = new mongoose.Schema({
    name: String,
    sir_name: String,
    Phone_Number: Number,
    E_mail: String,
    problem: String


});


const Contect = mongoose.model('Contect', kittySchema);
const silence = new Contect({ name: 'Silence' });
// console.log(silence.name); // 'Silence'

const hostname2 = "127.0.0.1"
port = 3000


app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.post("/", (req, res) => {
    s.name = "log-out"

    res.render("Home", s)
})

app.get("/", (req, res) => {
    res.render("Home", s)
})



app.post("/done", (req, res) => {

    const fluffy = new Contect({ name: req.body.name, sir_name: req.body.sir_name, Phone_Number: req.body.P_Number, E_mail: req.body.E_mail, problem: req.problem })

    fluffy.save(function(err, fluffy) {
        if (err) return console.error(err);
    });

    Contect.find(function(err, Contect) {
        if (err) return console.error(err);
        // console.log(Express1);
    })
    res.render("Home", s)

})


app.get("/sin-up", (req, res) => {
    res.render('SingIn', s)
})

app.get("/Contect_us", (req, res) => {

    res.render("Contect.pug", s)
})
app.get("/about", (req, res) => {

    res.render("About.pug", s)
})
app.get("/log-out", (req, res) => {
    s.name = "Sing-in"
    res.render("Home", s)
})
app.get("/Over_Coures", (req, res) => {
    res.render("OverCources.pug", s)
})

app.listen(port, () => {


    console.log(`App is running on ${hostname2}:${port}`)
})