var fs = require("fs");
var path = require('path');

const directoryPath = path.join(__dirname, 'md-list');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        console.log('at the dir path, there is some files')
        var howManyMdFiles = files.length;
        console.log(howManyMdFiles)

        for (var i = 0; i < howManyMdFiles; i++) {
            console.log(i + ' th md file : ' + files[i])
           

        }
    }
})


