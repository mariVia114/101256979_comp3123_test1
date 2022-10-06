const fs = require("fs")
const path = require("path")
const dir = './Logs'

if(fs.existsSync('Logs')){
    fs.readdir(dir, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
          console.log('delete files...', path.basename(`./Logs/${file}.txt`));

      fs.unlink(path.join(dir, file), err => {
        if (err) throw err;
      });
    }
  });
  fs.rm(dir, {
    recursive: true,
  }, (error) => { 
    if (error) {
    return console.log("error occurred in deleting directory", err);
    }
    
    console.log("Directory deleted successfully");
    });
}
