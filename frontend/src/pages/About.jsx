import React from 'react'

import aboutImage from '../assets/about_image.png'
const About=()=>{
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-600'>
                <p>ABOUT<span className='text-gray-800 font-medium'>US</span></p>
            </div>
     <div className='flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={aboutImage} alt=""/>
     <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
        <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way</p>
        <b className='text-gary-800'>Our Vision</b>
        <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it</p>
     </div>
     </div>
       <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>
        WHY <span className='text-gray-800 font-medium '>CHOOSE US</span>
        </p>
       </div>
       <div className='flex flex-col md:flex-row mt-20'>
    <div className='border border-gray-300 py-6 px-3 rounded-lg mr-2 hover:border-gray-600 hover:bg-gray-200'>
        <p className='text-gray-800 text-xl font-medium mb-2'>EFFICIENCY:</p>
        <p className='text-gray-600 text-sm'>
            Streamlined appointment scheduling that fits into your busy lifestyle
        </p>
    </div>
    <div className='border border-gray-300 p-4 rounded-lg mr-2 hover:border-gray-600 hover:bg-gray-200'>
        <p className='text-gray-800 text-xl font-medium mb-2'>CONVIENENCE:</p>
        <p className='text-gray-600 text-sm'>
            Access to a network of trusted healthcare professionals in your area
        </p>
    </div>
    <div className='border border-gray-300 p-4 rounded-lg mr-2 hover:border-gray-600 hover:bg-gray-200'>
        <p className='text-gray-800 text-xl font-medium mb-2'>PERSONALIZATION:</p>
        <p className='text-gray-600 text-sm'>
            Tailored recommendations and reminders to help you stay on top of your health
        </p>
    </div>
</div>

        </div>
    )
}
export default About;