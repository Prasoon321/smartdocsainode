const express = require("express");
const router = express.Router();
const uploadPdfController = require("../controller/uplaodcontroller");
const upload = require('../middleware/cloudinarymiddleware'); // Import the multer setup



// Route for PDF uploads
router.post(
    "/upload-pdf",
    upload.single('pdf'), // Accept a single PDF file
    uploadPdfController
);

module.exports = router;
