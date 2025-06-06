import { useEffect } from "react";

const DoctorProfile = () => { 
    const {dToken,profileData,setProfileData,getProfileData}=useContext(DoctorContext);
    useEffect(()=>{ 
        if(dToken){
            getProfileData();
        }
    },[dToken])
    return (
        <div>
         <div className='flex flex-col gap-4 m-5 '>
            <div>
                <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt=""></img>
            </div>
         </div>
        {/* -------------- doctor info---------- */}
        <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>
        <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
        <div className='flex item-center gap-2 mt-1 text-gray-600 '>
            <p>{profileData.degree}-{profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experiance}</button>
        </div>
        {/* doc About */}
        <div>
            <p className='flex item-center gap-1 text-sm font-medium text-neutral-800 mt-3 '>About:</p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
             { profileData.about}
               
</p>
        </div>
        <p className='text-gray-600 font-medium mt-4'>
            Appointment fees: <span className='text-gray-800'>${profileData.fees}</span> 
        </p>
     <div className='flex gap-2 py-2'>
        <p>Address:</p>
        <p className='text-sm'>{profileData.address}</p>
     </div>
     <div className='flex gap-2 pt-2'>
        <input type="checkbox" ></input>
        <label>Available</label>
     </div>
     <button className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
        </div>
        </div>
    )
}
export default DoctorProfile;