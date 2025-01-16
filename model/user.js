const mongoose = require("mongoose");

const cloudinarySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
            required: true,
        },
        cloudinary: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cloudinary", cloudinarySchema);
