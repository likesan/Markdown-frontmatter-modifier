var fs = require("fs");
var path = require('path')

var mdPath = './md-list/2019-12-10-42Seoul-사전준비.md'

var wholeFileStr = fs.readFileSync(mdPath, "utf8");

// find specific length of frontmatter by '---' '---' indexes
var searchingFrontMatter = wholeFileStr.indexOf('---')

if (searchingFrontMatter == -1) {
    console.log('frontmatter does not set properly, have a look!')
    var splitedWholeFile = wholeFileStr.split('\n')
    splitedWholeFile.splice(1,0,'---');
    console.log(splitedWholeFile)
    splitedWholeFile.filter((str)=>{
        console.log(str)
        return str
    })
    var output = splitedWholeFile.join('\n')
    fs.writeFileSync(mdPath,output)

} else {
    console.log('Frontmatter exists!')
    var searchingFrontMatterFromEnd = wholeFileStr.lastIndexOf('---')

        console.log(searchingFrontMatter, searchingFrontMatterFromEnd)
        return true,
        searchingFrontMatterFromEnd
    }

    //show up only frontmatter part
    var frontMatterPart = wholeFileStr.substring(0, searchingFrontMatterFromEnd + 3)

    // title insert
    const isThereATitle = () => {
        if (frontMatterPart.indexOf('title') == -1) {
            return false
        } else {
            return true
        }
    }
    var title = path.basename(mdPath)
    const fileNameExtractor = () => {
        // decluttering unnecessary part from file name
        var indexOfDotMd = title.indexOf('.')
        var removeDotMd = title.substr(0, indexOfDotMd)
        var removeDatesDotMd = removeDotMd.substr(11, indexOfDotMd)
        var removeHypenFromFileName = removeDatesDotMd.replace(/-/g, ' ')
        var willBeTheTitle = removeHypenFromFileName;

        return willBeTheTitle
    }

    var lines = wholeFileStr.split('\n')
    if (isThereATitle() == true) {
        console.log('there is a title already')
    } else {
        console.log("there is no title frontmatter, so will be added")
        var insertTitle = frontMatterPart.slice(3, 0) + 'title : ' + fileNameExtractor();

        lines.splice(1, 0, insertTitle); // add Title in FrontMatter
        lines = lines.filter((str) => {
            return str
        }) // remove empty space?
        var output = lines.join('\n'); // bridge each array children with \n
        fs.writeFileSync(mdPath, output) // title added output overwrites origin md file
        console.log('frontmatter proc done!')
    }

    // date insert
    const isThereADate = () => {
        if (frontMatterPart.indexOf('date') == -1) {
            console.log('there is not date, so false return')

            return false
        } else {
            console.log('yes there is a date in ' + frontMatterPart.indexOf('date'))

            return true
        }
    }

    if (isThereADate() == true) {
        console.log('there is a date already')
    } else {
        var date = title.substr(0, 10)
        console.log(date);
        var insertDate = 'date : ' + date;
        lines.splice(1, 0, insertDate);
        lines = lines.filter((str) => {
            console.log(str)
            return str
        })
        var output = lines.join('\n')
        fs.writeFileSync(mdPath, output)
    }