const usermodel = require("../model/user"); // Import the user model

// New PDF upload controller
const uploadPdfController = async (req, res) => {
    try {
        console.log("entered controller")
        // const { name, email } = req.body;

        // Ensure a PDF file is provided
        if (!req.file) {
            return res.status(400).send({ error: "A PDF file is required" });
        }

        const pdfPath = req.file.path;
        console.log("PDF uploaded:", pdfPath);

        // const newUser = new usermodel({
        //     name,
        //     email,
        //     cloudinary: [pdfPath], // Store PDF URL
        // });

        // await newUser.save();

        res.status(201).send({
            success: true,
            message: "PDF uploaded successfully",
            // user: newUser,
            pdfpath: pdfPath
        });
    } catch (error) {
        console.error("Error uploading PDF:", error);
        res.status(500).send({
            success: false,
            message: "Error uploading PDF",
            error,
        });
    }
};

module.exports = uploadPdfController;
