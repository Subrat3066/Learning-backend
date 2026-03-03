let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res)=>{
    console.log("this is running");
    res.write("Backend running successfully");
    res.end();
});
server.listen(4000,()=>{
    console.log("Server is runnit on port 4000");
});