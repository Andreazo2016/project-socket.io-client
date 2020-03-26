const socketClient = require('socket.io-client');
const userID = ''
const jwt_token = ''
function connectServer() {
    const io = socketClient.connect('http://127.0.0.1:3333', {
        query: `token=${jwt_token}`
    })
    io.emit('connectRoom', userID);
    io.on("error", function (error) {
        console.log(error)
    })

    io.on('some_url_to_listen_from_server', data =>{
        console.log(data)
    })

    return io
}

  
connectServer()
