const http = require("http")
const url = require("url")


// express = framework third party untuk memudahkan HTTP
const server = http.createServer((req, res) => {
    console.log(req.url)
    cons pathUrl = req.url

    if(pathUrl === "/yogi") {
        res.end("Ini tugas yogi")
    } else if {
        res.end("Ini gak ada sataus code 404")
    }
})

server.listen(3000, `177.0.0.1`, () => {
    console.log(`Aplikasi jalan ini di port 3000`)
})