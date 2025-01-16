const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../middleware/cloudinaryconfig'); // Import the Cloudinary configuration

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        const isPdf = file.mimetype === 'application/pdf';
        return {
            folder: isPdf ? 'AmaviPDFs' : 'AmaviProducts', // Different folders for PDFs and images
            resource_type: isPdf ? 'raw' : 'image', // 'raw' for non-image files like PDFs
            allowed_formats: isPdf ? ['pdf'] : ['jpg', 'png', 'jpeg'],
        };
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
