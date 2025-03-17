/*
console.log("Heloo world")
console.log(global)
*/

/*
//core models
const os=require('os')
const path=require('path')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(__filename)
console.log("__________")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
*/

/*
const math=require('./math')
console.log(math.add(3,3))
console.log(math.sub(3,3))
console.log(math.mul(3,3))
console.log(math.div(3,3))
*/

/*
const {add,sub,mul,div}=require('./math')
console.log(add(3,3))
console.log(sub(3,3))
console.log(mul(3,3))
console.log(div(3,3))
*/

/*
import {add,sub,mul,div} from './math.js'
console.log(add(3,3))
console.log(sub(3,3))
console.log(mul(3,3))
console.log(div(3,3))
*/

//File systems
/*
//Reading a file
const fs=require('fs')
const path=require('path')
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
//Asynchronously reads the entire contents of a file.
console.log("hi")
  
//Exit on uncaught errors
process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}` )
    process.exit(1)
})
  */  

/*
//Writing a file
const fs=require('fs')
const path=require('path')
fs.writeFile(path.join(__dirname,'files','create.txt'),'Created a new file', (err, data) => {
    if (err);
    console.log('write complete');
    fs.appendFile(path.join(__dirname,'files','create.txt'),'\n\nCreated a new file,and updated', (err, data) => {
      if (err);
      console.log('append complete');
      fs.rename(path.join(__dirname,'files','create.txt'),path.join(__dirname,'files','new.txt'), (err, data) => {
        if (err);
        console.log('rename complete');
      })
    })
  }); 

  //We can create a new file using appendFile
  fs.appendFile(path.join(__dirname,'files','append.txt'),'\n\nCreated a new file using appendFile', (err, data) => {
    if (err);
    console.log('new file created using append complete');
  }); 
//Exit on uncaught errors
process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}` )
    process.exit(1)
})
*/

//Better way for callback hell-> using aync await
const path=require('path')
const fsPromises=require('fs').promises
const fileOps = async() => {
  try{
    const data=await fsPromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'files','create.txt'),'Created a new file')
    console.log('write complete');
    await fsPromises.appendFile(path.join(__dirname,'files','create.txt'),'\n\nCreated a new file,and updated')
    console.log('append complete');
    await fsPromises.rename(path.join(__dirname,'files','create.txt'),path.join(__dirname,'files','new.txt'))
    console.log('rename complete');
    //Deleting a file
    await fsPromises.unlink(path.join(__dirname,'files','start.txt'))
  }catch(err){
    console.error(err);
  }
}
fileOps()
//Exit on uncaught errors
process.on('uncaughtException', err=>{
  console.error(`There was an uncaught error: ${err}` )
  process.exit(1)
})