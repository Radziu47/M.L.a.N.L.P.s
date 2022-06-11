const express = require("express");
const { Server } = require("http");
const { Socket } = require("socket.io");
const app = express();
const path = require("path");
const { use } = require("express/lib/application");
const { read } = require("fs");

const http = require("http").Server(app);
const port = 3000;

// attach http server to Socket.io
const io = require("socket.io")(http);


// route
app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

http.listen(port, () => {
    console.log(`App listenning on port:${port}`);
})
let users = [];
let sol = 0;
let wyn = 0;
let wyniks = [];
let winner;
io.on('connection', socket =>{

    socket.on("ready", req =>{
        socket.broadcast.emit("onready", req);
        let obj={}
        obj["userid"] = req.socketid;
        obj["ready"] = req.player_ready;
        obj["end"] = false;
        users.push(obj);
        let ready = false;
        if (users.length == 2) {
            
            users.forEach(element => {
                if (element) {
                    ready = true
                }
            });
            if (ready) {
                io.emit('start', ready);
            }
        }
    })
    socket.on('karty', ilo =>{
        if (ilo == 2) {
            socket.broadcast.emit('kartyend', ilo)
        } else if (ilo == 1) {
            socket.broadcast.emit('kartyend', ilo)
        }else{
            return
        }
    })
    
    socket.on('koniec', wynik =>{
        socket.broadcast.emit('Question', wynik);
        if (wyn == 0) {
            wyn = wynik;
        }
        sol++;
        if (sol ==2) {
            if (wynik >= 21 && wyn < 21 ) {
                const read1 = true;
                const read2 = false;
                socket.emit('realend', (read1,read2));
                socket.broadcast.emit('realend', (read2,read1));
            }else if(wyn >= 21 && wynik < 21 ){
                const read1 = false;
                const read2 = true;
                socket.emit('realend', (read1,read2));
                socket.broadcast.emit('realend', (read2,read1));
            }else{
                const wymik = 21 - wynik;
                const wym = 21 - wyn;
                console.log(wym, wymik);
                if (wym > wymik) {
                    const read1 = true;
                    const read2 = false;
                    socket.emit('realend', (read1,read2));
                    socket.broadcast.emit('realend', (read2,read1));
                }else if(wymik > wym){
                    const read1 = false;
                    const read2 = true;
                    socket.emit('realend', (read1,read2));
                    socket.broadcast.emit('realend', (read2,read1));
                }else if(wym == wymik){
                    const read1 = true;
                    const read2 = true;
                    socket.emit('realend', (read1,read2));
                    socket.broadcast.emit('realend', (read2,read1));
                }
                
            }
            socket.emit('koniec-end', wyn);
            socket.broadcast.emit('koniec-end', wynik);
        }
    })
})