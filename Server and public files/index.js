let express = require('express');
let app = express();
let host = 3000
let server = app.listen(host)

app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

let socket = require('socket.io')
let io = socket(server);

let tempRotData;

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('connection:',	socket.id);
    socket.on('btn', btn);
    socket.on("ue4", ue4Com);
    socket.on("rotationData", gettingRotData);

    function gettingRotData(data) {
        //console.log(data);
        tempRotData = data;
        console.log(tempRotData);
        io.emit("getRotData", tempRotData);
    }

    

    function ue4Com() {
        console.log("Msg from ue4");
    }
	
	function btn(data) {
		
		//console.log(data.hello);
	}
}

