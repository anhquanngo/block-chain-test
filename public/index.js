var socket = io("http://localhost:3000")

var nonce = 1

$(document).ready(function () {
    $("#start").click(function () {
        socket.emit("START")
        setInterval(() => {
            nonce++
            socket.emit("NONCE", nonce)
        }, 100);
    })

})