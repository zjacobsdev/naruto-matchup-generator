const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;
var players = ["Po","Jackie Chan", "Bruce Lee"]
var bot =["Naruto", "Sasuke", "Sakura","Hinata", "Gaara", "Rock Lee", "Choji","Shikamura","Shino","Ino"]


function randomPick(arr){
  let pick = Math.floor(Math.random() * arr.length)
    return arr[pick]
}


const url = "mongodb+srv://zjakedev:7NTHJ7JQnToWybQh@snackr-app-hgf4g.mongodb.net/test?retryWrites=true";
const dbName = "demo";

app.listen(8000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to localhost:8000");
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  db.collection('matchup').find().toArray((err, result) => {

    if (err) return console.log(err)
    res.render('index.ejs', {matchup: result})
  })
})


// Save player and get match up
app.post('/arena', (req, res) => {

  players.push(req.body.player)
  let playerPick = req.body.player
  let botPick = randomPick(bot)

  db.collection('matchup').save({player: playerPick , opponent: botPick }, (err, result) => {
    if (err) return console.log(err)
    //console.log(result)
    console.log('saved to database')
    res.redirect('back');
  })
})


app.post('/random', (req, res) => {

  let playerPick = randomPick(players)
  console.log(players)
  console.log(playerPick)
  let botPick = randomPick(bot)
  db.collection('matchup').save({player: playerPick , opponent: botPick }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  })
})



// find and delete  post 
app.delete('/arena', (req, res) => {
  db.collection('matchup').deleteMany({player:req.body.player, opponent:req.body.opponent}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
