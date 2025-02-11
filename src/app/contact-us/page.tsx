import Image from 'next/image'
import React from 'react'
import logo from '../../../public/asset/images/logo.png'
//import map from '../../../public/asset/images/map.png'
//import arvam from '../../../public/asset/images/arvam1.png'
import flag from '../../../public/asset/images/flag.png'
import { InputAdornment, TextField } from '@mui/material'
import Link from 'next/link'

export default function ContactUs() {
    return (
        <div className='flex p-10 gap-10 max-lg:flex-wrap '>
            <div className='w-full lg:w-[15%]'>
                <Link href={'/'}>
                    <Image alt='logo' src={logo} />
                </Link>
            </div>
            <div className='lg:w-[85%] px-5 flex flex-col items-center  shadow-[-6px_0px_10px_-6px_rgba(0,0,0,0.5)] relative py-10 bg-[#F6F9FD] border-1 border-[#EBE8E8]'>
                <div className="absolute  top-20 bottom-20 left-0 blur-[0.8px]   bg-gradient-to-b w-[2px] from-transparent via-gray-700 to-transparent  "></div>
                <h1 className='text-[25px] text-center  font-bold' >Contact Us For ARVAM EAM Solutions</h1>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >First Name<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="First Name"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Last Name<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="Last Name"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Email Address<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="work@email.com"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Company Name<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="Enter your company name"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Phone Number<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="+1"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start" className='bg-[#F4F4F4] px-[1rem] -ms-4 py-[1.2rem] rounded-l-full  '>
                                        <Image alt='flag' src={flag} />
                                    </InputAdornment>
                                ),
                            }
                        }}
                    />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >How did you hear about us?<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="Please share"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Number of Users<span className='text-red-500' >*</span></h1>
                    <TextField
                        placeholder="1"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: {xs:'250px', sm:'380px'},
                                height: '38px'
                            },
                        }} />
                </div>
                <h1 className=' mt-8 text-[16px] px-5 sm:px-16 md:px-32 lg:px-16 xl:px-28 ' >
                    ARVAM EAM needs the contact information you provide to us to
                    contact you about our products and services. You may unsubscribe
                    from these communications at any time. For information on how to
                    unsubscribe, as well as our privacy practices and commitment to
                    protecting your privacy, please review our Privacy Policy.
                </h1>
                <Link className='flex justify-center mt-10 ' href={''}>
                    <div className="text-white font-bold  text-lg rounded-full text-[18px]  bg-[#000000] py-1 px-10  xs:px-20  ">
                        Submit
                    </div>
                </Link>

            </div>
        </div>
    )
}