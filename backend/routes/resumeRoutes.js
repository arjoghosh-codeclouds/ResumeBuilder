import express from 'express'
import {protect} from '../middlewares/authmiddleware.js'
import {createResume,deleteResume,getUserResumes, getResumeById,updateResume} from '../controller/resumeController.js'
import { uploadResumeImages } from '../controller/uploadImages.js';

import upload from '../middlewares/uploadmiddleware.js';

const resumeRoutes=express.Router();
resumeRoutes.post('/',protect ,createResume)
resumeRoutes.get('/',protect ,getUserResumes)
resumeRoutes.get('/:id',protect ,getResumeById)
resumeRoutes.put('/:id', protect, updateResume) 
resumeRoutes.delete('/:id',protect ,deleteResume)
resumeRoutes.post(
    '/:id/upload-images', 
    protect, 
    upload.fields([ 
        {
            name: "thumbnail", 
            maxCount: 1 
        },
        { 
            name: "profileImage", 
            maxCount: 1 
        }
    ]),
    uploadResumeImages 
);
export default resumeRoutes;
