const fs=require('fs')
const path = require('path')
const rs=fs.createReadStream(path.join(__dirname,'files','bigfile.txt'),{encoding:'utf-8'})
const ws=fs.createWriteStream(path.join(__dirname,'files','new_bigfile.txt'))

/*
rs.on('data',(dataChunk) => {
    ws.write(dataChunk)
})
*/
//efficient method
rs.pipe(ws);