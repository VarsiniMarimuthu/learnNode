const fs=require('fs')

//Creating a new directory
if(!fs.existsSync){
    fs.rmdir('./new',(err)=>{
        if(err) throw err
        console.log("Directory created")
    })
    }

//Removing a directory
if(fs.existsSync){
fs.rmdir('./new',(err)=>{
    if(err) throw err
    console.log("Directory removed")
})
}
//Exit on uncaught errors
process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}` )
    process.exit(1)
  })