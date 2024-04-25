const express = require('express');
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));
var imgNumber1 = 1;

const dir1 = './input/';
const dir2 = './input/';

// Configure Multer for file storage
// const storage = multer.diskStorage({
//   destination: 'uploads/', // Set the directory for uploaded files
//   filename: (req, file, cb) => {
//     cb(null, imgNumber++ + '.' + file.originalname.split('.').pop());
//   }
// });

// For saving in different folders
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'image1') {
      cb(null, dir1);
    } else if (file.fieldname === 'image2') {
      cb(null, dir2);
    } else {
      // Handle unexpected file names (optional)
      cb(new Error('Invalid file name'));
    }
  },
  filename: function (req, file, cb) {
    cb(null, (imgNumber1++)%2 + '.' + file.originalname.split('.').pop());
  }
});


const upload = multer({ storage });


// Serve static files from the 'public' directory
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Assuming index.html has the file input
});

// Route to handle file upload
app.post('/upload', upload.fields([
  { name: 'image1' },
  { name: 'image2' }
]), (req, res) => {
  if (!req.files.image1 && !req.files.image2) {
    return res.status(400).send('No file uploaded');
  } else {
    res.json({
      msg : "sent"
    });
  }

});

app.post('/verify', (req, res) =>{
  const model = req.body.model;
  console.log(model);

  modelName = model + ".py"

  const process = spawn('python', [modelName]);

  process.stdout.on('data', function(chunk){
    var textChunk = chunk.toString('utf8');
    res.json({
      msg: textChunk
    })
  })

})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
