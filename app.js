let http = require('http');
let server = http.createServer((req,res)=>{
    //res.statusCode=204;
    res.write("Learning server with http");
    res.end();
})
server.listen(4000,()=>{
    console.log("Server is running at port 4000");
})