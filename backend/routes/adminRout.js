import express from 'express'
import  {addDoctor,loginAdmin,allDoctors}  from '../controller/adminController.js'
import  upload from "../middleware/multer.js"
import authAdmin from '../middleware/authAdmin.js';
import {changeAvilability} from '../controller/doctorsController.js'
const adminRouter =express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-avilablity',authAdmin,changeAvilability)
export default adminRouter;