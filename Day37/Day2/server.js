const express = require("express");
const path = require("path");
const fs = require("fs");

const outputFolder = './output';

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const app = express();
const PORT = 3000;

app.get("/createFile", (req, res) => {
    const currentTime = new Date();

    const year = currentTime.getFullYear().toString();
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const date = currentTime.getDate().toString().padStart(2, '0');
    const hour = currentTime.getHours().toString().padStart(2, '0');
    const min = currentTime.getMinutes().toString().padStart(2, '0');
    const sec = currentTime.getSeconds().toString().padStart(2, '0');

    const dateTimeForFileName = `${year}-${month}-${date}-${hour}-${min}-${sec}.txt`

    const filePath = path.join(outputFolder, dateTimeForFileName);

    fs.writeFile(filePath, currentTime.toISOString(), (err) => {
        if (err) {
            res.status(500).send(`Error creating file ${err}`);
            return;
        }
        res.send(`File is successfully created at ${filePath}`);
    });
});

app.get('/textfiles', (req, res) => {
    fs.readdir(outputFolder, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({ error: 'Server error' });
        }

        // Filter the files to include only text files with a .txt extension
        const textFiles = files.filter((file) => path.extname(file) === '.txt');

        res.json(textFiles);
    });
});

app.listen(PORT, () => {
    console.log("Server is running", PORT);
});
