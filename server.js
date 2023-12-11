const fs = require("fs");
const OS = require("os");

const path = require("path");
const basepath = "client";
const cssLink = "<head><link rel='stylesheet' href='style.css'></head>";
const htmlHeader = "<h1>This is the HTML file</h1>";


let R = Math.floor(Math.random() * 256);
let G = Math.floor(Math.random() * 256);
let B = Math.floor(Math.random() * 256);
let randomColor = "rgb(" + R + "," + G + "," + B + ")";
const backgroundColor = randomColor;

const makeBaseFiles = (location) => {
    fs.writeFileSync(path.join(location, "index.html"), htmlHeader + cssLink);
    fs.writeFileSync(path.join(location, "style.css"), "body{background:"+backgroundColor+"}");
}

const makeFile = () => {
    try{
        if (fs.existsSync(basepath)) {
            fs.rmSync(basepath, { recursive: true, force: true });
        }
        fs.mkdirSync(basepath);
        makeBaseFiles(basepath);
        fs.writeFileSync(path.join(basepath, "info.txt"), "<p>This is being run on a computer</p>");
        
        let newDir = path.join(basepath, "contact");
        fs.mkdirSync(newDir);
        makeBaseFiles(newDir);

        fs.mkdirSync(path.join(basepath, "about"));
        makeBaseFiles(path.join(basepath, "about"));

        fs.mkdirSync(path.join(basepath, "blog"));
        makeBaseFiles(path.join(basepath, "blog"));
    }
    catch (error) {
        console.log(error.message)
    }
    console.log(OS)
}

makeFile()