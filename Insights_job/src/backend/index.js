import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';


const app = express();

// Enable CORS
app.use(cors());
app.use(express.json()); // To handle JSON payloads

// Set up multer for in-memory file storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Handle file upload and return the CSV content
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  if (path.extname(req.file.originalname) !== '.csv') {
    return res.status(400).json({ message: 'Uploaded file is not a valid CSV format' });
  }

  // Convert the buffer to a string
  const csvData = req.file.buffer.toString('utf8');

  // Send the CSV content to the frontend
  return res.status(200).json({
    message: 'File uploaded successfully',
    filename: req.file.originalname,
    data: csvData // Send the CSV content
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
