const fs = require("fs");

// 1. Membaca  file surat cinta fsw 2
let loveLetter = fs.readFileSync("./index.txt", "utf-8") 

// 2. Proses print isi dari surat cinta
console.log(`ini barisn 7: ${loveLetter}`)

// 3. Membuat file baru untuk balas surat cinta
const loveFeedback = "Aku Juga sayang fsw 2!"
fs.writeFileSync("./balasan.txt", loveFeedback )

//fs.mkdir("COBA_BIKIN_FOLDER_2", () => {})


// Menimpa isi konten dari index.txt
fs.writeFileSync("./index.txt", "Ketimpa gak cinta kita part 3" )

//console.log(writeResult)

let scopeKataBrandon;
// Ini ASYNC nya
// asynchronous file/write
setTimeout(() => {
    scopeKataBrandon = "Masuk timeout gak gw"
    loveLetter = fs.readFile("./index.txt", "utf-8", (err, data) => {
        console.log(`ini dari line 18 ${data}`)
    })

}, 10000)

console.log(spcopeKataBrandon)
console.log(`ini baris line 21 ${loveLetter}`)