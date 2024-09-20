import express from 'express';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import fs from 'fs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Initialize the app
const app = express();

// Enable CORS for requests from the frontend (adjust origin if needed)
app.use(cors());

// Define where to store uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
  }
});

// Set up multer for file upload
const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
const dir = './uploads';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Handle file upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
    
      if (path.extname(req.file.originalname) !== '.csv' && path.extname(req.file.originalname) !== '.doc' && path.extname(req.file.originalname) !== '.pdf') {
        return res.status(400).json({ message: 'Uploaded file is not a valid format (CSV, DOC, PDF)' });
      }

  // Path to the uploaded file
  const filePath = path.join(__dirname, 'uploads', req.file.filename);

  // Read the uploaded CSV file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error reading file' });
    }
    
    console.log(data); // This will show you the content of the CSV file

    // You can process the CSV data here if needed

    return res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import multer from 'multer';
// import fs from 'fs';
// // Initialize the app
// const app = express();

// // Enable CORS for requests from the frontend (adjust origin if needed)
// app.use(cors());


// // Define where to store uploaded files
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads'); // Save files in the 'uploads' folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique filenames
//   }
// });

// // Set up multer for file upload
// const upload = multer({ storage: storage });

// // Create uploads directory if it doesn't exist
// const dir = './uploads';
// if (!fs.existsSync(dir)){
//   fs.mkdirSync(dir);
// }

// // Handle file upload endpoint
// // app.post('/upload', upload.single('file'), (req, res) => {
// //   if (!req.file) {
// //     return res.status(400).json({ message: 'No file uploaded' });
// //   }

// //   // Path to the uploaded file
// //   const filePath = path.join(__dirname, 'uploads', req.file.filename);

// //   // Send back the CSV file for download
// //   if (path.extname(req.file.originalname) === '.csv') {
// //     return res.download(filePath, req.file.originalname, (err) => {
// //       if (err) {
// //         console.error(err);
// //         res.status(500).json({ message: 'Error sending file' });
// //       }
// //     });
// //   } else {
// //     return res.status(400).json({ message: 'Uploaded file is not a CSV' });
// //   }
// // });

// app.post('/upload', upload.single('file'), (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
  
//     if (path.extname(req.file.originalname) !== '.csv') {
//       return res.status(400).json({ message: 'Uploaded file is not a CSV' });
//     }
  
//     // Here you can add code to process the CSV data as needed
  
//     return res.status(200).json({ message: 'File uploaded successfully', filename: req.file.filename });
//   });
  

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });