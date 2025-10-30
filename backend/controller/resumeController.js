import fs from 'fs';
import path from 'path';
import Resume from '../models/resumeModel.js';

export const createResume = async (req, res) => {
    try {
        const { title } = req.body;

        // Default template
        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
            title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    names: '',
                    progress: '',
                },
            ],
            interests: [''],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
        });

        res.status(201).json(newResume);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create resume', error: error.message });
    }
};

export const getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user._id }).sort({
            updatedAt: -1,
        });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get resumes', error: error.message });
    }
};

export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({ _id: req.params.id, userId: req.user._id });

        if (!resume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.json(resume);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get resume', error: error.message });
    }
};

    export const updateResume = async (req, res) => {
        try {
                // 1. Find the document matching the ID and current user
                const query = { _id: req.params.id, userId: req.user._id };

                const savedResume = await Resume.findOneAndUpdate(
                            query,
                    { $set: req.body }, // Use $set to replace all fields from req.body
                    { new: true, runValidators: true }
                    );

                    if (!savedResume) {
                    return res.status(404).json({ message: 'Resume not found or unauthorized' });
                    }

                            res.json(savedResume);
                    } catch (error) {
                    // This error handling will catch Mongoose validation errors or database errors
                    res.status(500).json({ message: 'Failed to update resume', error: error.message });
                    }
                    };

    export const deleteResume = async (req, res) => {
        try {
        const resume = await Resume.findOne({
        _id: req.params.id,
        userId: req.user._id,
        });

        if (!resume)
                 {
                 return res.status(404).json({ message: 'Resume not found or unauthorized' });
                }

      // Folder where uploads are stored
          const uploadsFolder = path.join(process.cwd(), 'uploads');

      // Delete thumbnail image
        if (resume.thumbnailLink) {
        const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
        if (fs.existsSync(oldThumbnail)) {
        fs.unlinkSync(oldThumbnail);
        }
        }

        // Delete profile preview image
        if (resume.profileInfo?.profilePreviewUrl) {
        const oldProfile = path.join(
        uploadsFolder,
        path.basename(resume.profileInfo.profilePreviewUrl)
        );
        if (fs.existsSync(oldProfile)) {
        fs.unlinkSync(oldProfile);
        }
        }

        // Delete the resume document
        const deleted = await Resume.findOneAndDelete({
        _id: req.params.id,
        userId: req.user._id,
        });

        if (!deleted) {
        return res.status(404).json({ message: 'Resume not found or unauthorized' });
        }

        res.json({ message: 'Resume deleted successfully' });
        } catch (error) {
        res.status(500).json({ message: 'Failed to delete resume', error: error.message });
        }
        };

