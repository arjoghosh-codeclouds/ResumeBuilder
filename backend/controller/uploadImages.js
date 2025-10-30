// file: backend/controller/uploadImages.js (or similar)
import resume from "../models/resumeModel.js"
import path from 'path'
import fs from "fs";



export const uploadResumeImages = async (req, res) => {
   
    try {
       
        const resumeId = req.params.id;
       
        const Resume = await resume.findOne({ _id: resumeId, userId: req.user._id });

        if (!Resume) {
            return res.status(404).json({ message: "Resume not found" });
        }

        const uploadFolder = path.join(process.cwd(), "uploads");
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        const newThumbnail = req.files.thumbnail?.[0]; 
        const newProfileImage = req.files.profileImage?.[0];

        if (newThumbnail) {
           
            Resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
        }
        
        if (newProfileImage) {
            Resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
        }

        await Resume.save();
        res.status(200).json({
            message: "Image uploaded successfully",
            thumbnailLink: Resume.thumbnailLink,
            profilePreviewUrl: Resume.profileInfo.profilePreviewUrl
        });

    } catch (error) {
        console.error(`Error uploading images: ${error}`);
        res.status(500).json({
            message: "Failed to upload images",
            error: error.message
        });
    }
};