import Image from 'next/image'
import React from 'react'
import logo from '../../../public/asset/images/logo.png'
import mail from '../../../public/asset/images/mail.png'
import arvam from '../../../public/asset/images/arvam1.png'
import flag from '../../../public/asset/images/flag.png'
import { Avatar, Checkbox, InputAdornment, TextField } from '@mui/material'
import Link from 'next/link'

export default function ContactUs() {
    return (
        <div className='flex p-10 gap-10 max-lg:flex-wrap '>
            <div className='w-full lg:w-[40%]'>
                <Image alt='logo' src={logo} />
                <div className='xs:px-10 max-lg:mt-10 mt-32 '>
                    <h1 className='text-[51px] leading-[3.7rem] font-bold ' >Software for Maintenance and Reliability Teams</h1>
                    <h1 className='text-[18px] leading-5 mt-10 ' >
                        ARVAMEAM: mobile-first asset operations toolset centralizes data
                        from across teams and devices into one, easy-to-implement platform.
                        Real-time data provides visibility into the day-to-day maintenance life
                        cycle, asset utilization and performance measurement to support informed
                        decisions.
                    </h1>
                    <h1 className='text-[18px] mt-10 leading-5 ' > <span className='text-[21px] text-[#1B6482] font-bold' >Ditch the paperwork : </span> Seamless collaboration
                        and real-time updates
                        for work orders within and across locations.</h1>
                    <h1 className='text-[18px] mt-10 leading-5 ' > <span className='text-[21px] text-[#1B6482] font-bold' >Info at your fingertips :</span>  Your entire asset history in your back pocket
                        from maintenance history to warranties and depreciation</h1>
                    <h1 className='text-[18px] mt-10 leading-5 ' > <span className='text-[21px] text-[#1B6482] font-bold' >Data-Driven Decisions :</span> Advanced analytics to
                        optimize asset performance with real-time data.</h1>
                    <h1 className='text-[18px] mt-10 leading-5 ' > <span className='text-[21px] text-[#1B6482] font-bold' >Real Time Tracking :</span>  Wireless sensors that make it
                        easy to monitor assets remotely to take preventive maintenance to the next level</h1>
                </div>
            </div>
            <div className='lg:w-[60%] px-5 flex flex-col items-center shadow-[-6px_0px_10px_-6px_rgba(0,0,0,0.5)] relative py-10 bg-[#F6F9FD] border-1 border-[#EBE8E8]'>
                <div className="absolute  top-20 bottom-20 left-0 blur-[0.8px]   bg-gradient-to-b w-[2px] from-transparent via-gray-700 to-transparent  "></div>
                <h1 className='text-[25px] text-center font-bold' >Start your-14day free trial today!</h1>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Email<span className='text-red-500' >*</span></h1>
                    <TextField className='w-[250px] xs:w-[380px]'
                        placeholder="Email Address"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Password<span className='text-red-500' >*</span></h1>
                    <TextField className='w-[250px] xs:w-[380px]'
                        placeholder="Create Password"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 xs:flex gap-5' >
                    <div >
                        <h1 className='text-[18px] mb-1' >First Name<span className='text-red-500' >*</span></h1>
                        <TextField  className='w-[250px] xs:w-[180px]'
                            placeholder="First name"
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '50px',
                                    backgroundColor: 'white',
                                    height: '38px'
                                },
                            }} />
                    </div>
                    <div  >
                        <h1 className='text-[18px] max-xs:mt-8 mb-1' >Last Name<span className='text-red-500' >*</span></h1>
                        <TextField  className='w-[250px] xs:w-[180px]'
                            placeholder="Last name"
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '50px',
                                    backgroundColor: 'white',
                                    height: '38px'
                                },
                            }} />
                    </div>
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Mobile Number<span className='text-red-500' >*</span></h1>
                    <TextField className='w-[250px] xs:w-[380px]'
                        placeholder="+1"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
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
                <div className='mt-10 flex gap-3' >
                    <h1 className='text-[18px] text-[#0092E4] font-bold ' >Verify by Email Instead  </h1>
                    <Avatar className='bg-white h-8 w-8'  >
                        <Image alt='manufacture' src={mail} />
                    </Avatar>
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Company Name<span className='text-red-500' >*</span></h1>
                    <TextField className='w-[250px] xs:w-[380px]'
                        placeholder="Enter your company name"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 ' >
                    <h1 className='text-[18px] mb-1' >Number of Technicians<span className='text-red-500' >*</span></h1>
                    <TextField className='w-[250px] xs:w-[380px]'
                        placeholder="1"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                height: '38px'
                            },
                        }} />
                </div>
                <div className='mt-8 flex items-start px-5 sm:px-16 md:px-40 lg:px-16 xl:px-28 ' >
                    <Checkbox className='-mt-2' />
                    <h1 className='text-[18px] ' >
                        By checking this box, you consent to receive a
                        verification SMS. Charges may apply. Your number
                        is used solely for security.
                    </h1>
                </div>
                <Link className='flex justify-center mt-10 ' href={''}>
                    <div className="text-white font-bold  text-lg rounded-full text-[18px]  bg-[#000000] py-1 px-10  xs:px-20   ">
                        Start a free Trial
                    </div>
                </Link>

            <h1 className='text-[18px] mt-6 text-center' >Not Ready yet? <Link href={''} className='text-[#0092E4]'>Schedule a touraccount</Link></h1>
            <div className="text-[17px] xs:text-[18px] mt-6   flex flex-wrap items-center justify-center">
                <span>By clicking above, you agree to the</span>
                <Image alt="arvam" src={arvam} />
                <span>Terms of use</span>
            </div>
        </div>
        </div >
    )
}
