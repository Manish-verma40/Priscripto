import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        
          const imageFile = req.file;

        if (!name || !password || !email || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validating strong password
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must have at least 8 characters" });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
             image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
             address,
            date: Date.now()
        };

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "Doctor added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//API for the admin login
const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            
 
              const token=jwt.sign(email+password,process.env.JWT_SECRET)
              res.json({success:true,token})
        }else{

            res.json({sucess:false,message:"invalid credentials"})
        }
   
    }catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
//API to get all the doctors list for the admin panel
const allDoctors=async(req,res)=>{
    try{
        const doctors=await doctorModel.find({}).select("-password");
        console.log(doctors);
        res.json({success:true,doctors})
    }catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
// Api to get All Appointments for the Admin
 const allAppointments= async(req,res)=>{
  try{
    const appointments=await appointmentModel.find({});
      console.log(appointments);
      res.json({success:true,appointments})
  }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
  }
 }
 //API to get data for admin panel
 const adminDashboard=async (req,res)=>{
  try{
   const doctors=await doctorModel.find({});
   const users=await userModel.find({});
   const appointments=await appointmentModel.find({});
   const dashData={
    doctors:doctors.length,
    appointments:appointments.length,
    patients:users.length,
    latestAppointments:appointments.reverse().slice(0,5)
   }
   res.json({success:true,dashData});
  }catch(error){
    console.log(error);
    res.json({ success: false, message: error.message });
  }
 }
 
export {addDoctor,loginAdmin,allDoctors,allAppointments,adminDashboard};
