const express = require("express");
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views")

const Block = require('./controllers/Block')
const BlockChain = require('./controllers/BlockChain')

var blockChain = new BlockChain();
var listUser = []
var nonce

io.on('connection', (socket) => {
    listUser.push(socket.id)

    socket.on('NONCE', function (data) {
        nonce = data
    })

    socket.on('START', function () {
        let chain = blockChain.chain;

        let prevhash = chain[chain.length - 1].hash;


        let newBlock = new Block(prevhash, nonce);

        blockChain.addNewBlock(newBlock);

        console.log(blockChain);
    })


});

http.listen(3000, () => {
    console.log('listening on :3000');
});

app.get('/', (req, res) => {
    res.render('index');
});