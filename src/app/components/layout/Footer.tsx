import { Avatar, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import manufacture from '../../../../public/asset/images/manufacture.png'
import wrench from '../../../../public/asset/images/wrench.png'
import barrel from '../../../../public/asset/images/barrel.png'
import train from '../../../../public/asset/images/train.png'
import university from '../../../../public/asset/images/university.png'
import officeBuilding from '../../../../public/asset/images/office-building.png'
import bridge from '../../../../public/asset/images/bridge.png'
import hospital from '../../../../public/asset/images/hospital-building.png'
import truck from '../../../../public/asset/images/truck.png'
import arvam from '../../../../public/asset/images/arvam.png'
import phone from '../../../../public/asset/images/phone-call.png'
import sms from '../../../../public/asset/images/sms.png'
import timeAndDate from '../../../../public/asset/images/time-and-date.png'
import location from '../../../../public/asset/images/location.png'
import email from '../../../../public/asset/images/mail.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            {/*<div className='bg-[#F9F9F9] text-[18px] ps-12 py-8 pe-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-6'>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={manufacture} />
                    </Avatar>
                    <h1 >Manufacturing</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={wrench} />
                    </Avatar>
                    <h1>Utilities</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={barrel} />
                    </Avatar>
                    <h1>Oil & Gas</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={train} />
                    </Avatar>
                    <h1>Railways</h1></div>
                <div className='flex items-center gap-3 '>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={university} />
                    </Avatar>
                    <h1  >Educational institutions</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={officeBuilding} />
                    </Avatar>
                    <h1>Large offices</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={bridge} />
                    </Avatar>
                    <h1>Bridges</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={hospital} />
                    </Avatar>
                    <h1>Hospitals</h1></div>
                <div className='flex items-center gap-3'>
                    <Avatar className='bg-white h-14 w-14'  >
                        <Image alt='manufacture' src={truck} />
                    </Avatar>
                    <h1>Transportation</h1></div>
    </div> */}
            <div className='bg-black ps-12  p-5 grid grid-cols-1 lg:grid-cols-3 auto-cols-max lg:divide-x gap-5 gap-y-10 divide-white'>
                <div className='mt-5'>
                    <Image alt='arvam' src={arvam} />
                    <h1 className='font-bold leading-[4.5rem] text-[21px] text-white ms-[10px] '>Sign up for newsletter! (Coming Soon!)</h1>
                    <h1 className='font-bold text-[14px] text-white ms-[10px] '>Our weekly newsletter full of inspiration, podcasts,
                        trends & news.</h1>
                    <div className="mt-7 flex flex-wrap items-center gap-5">
                        <TextField
                            placeholder="Email Address"
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '50px',
                                    backgroundColor: 'white',
                                    width: '210px',
                                    height: '33px'
                                },
                            }}
                        />
                        <Link className="flex max-xs:ms-auto lg:ms-auto" href="">
                            <div className="text-white text-lg rounded-full px-4  border-2 bg-[#319FCB]">
                                Subscribe Now
                            </div>
                        </Link>
                    </div>
                </div>
                <div className=" grid grid-cols-1 xs:grid-cols-2 gap-y-10 xs:divide-x divide-white">
                    {/*
                    <div className="mt5">
                        <div className='text-white ps-8'>
                            <h1 className='text-[21px] font-bold '>Support</h1>
                            <div className='text-14px leading-6 mt-1'>
                                <h1>Get Help</h1>
                                <h1>Tutorials</h1>
                                
                                    <h1>Team Training</h1>
                                    <h1>Free Courses</h1>
                                    <h1>Sub-Processors</h1>
                                    <h1>Privacy</h1>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt5">
                        <div className='text-white ps-8'>
                            <h1 className='text-[21px] font-bold '>Solutions</h1>
                            <div className='text-14px leading-6 w-40 mt-1'>
                                <h1>Asset Operations</h1>
                                <h1>Management (AOM)</h1>
                                <h1> Enterprise Asset</h1>
                                <h1>Management (EAM)</h1>
                                <h1>Asset Performance</h1>
                                <h1>Management (APM)</h1>
                                <h1 >DataHub (Data Asset Platform)</h1>
                                <h1>DataHub Demo</h1>
                            </div>
                        </div>
                    </div>
                     
                </div>

                <div className=" grid grid-cols-1  xs:grid-cols-2 gap-y-10 xs:divide-x divide-white">
                    <div className='text-white ps-8'>
                        <h1 className='text-[21px] font-bold '>Resources</h1>
                        <div className='text-14px leading-6 mt-1'>
                            <h1>Asset Operations</h1>
                            <h1>Resource Hub</h1>
                            <h1> Blog</h1>
                            <h1>Learning Center</h1>
                            <h1> What is a Work Order?</h1>
                            <h1>What is Preventive Maintenance?</h1>
                            <h1></h1>
                            <h1>What is Inventory Management?</h1>
                            <h1> </h1>
                        </div>
                    </div>
                   
                    <div className='text-white ps-4 w-48'>
                        <h1 className='text-[21px] font-bold ps-2 '>Contact us</h1>
                        <div className='flex text-[14px] flex-col mt-3 gap-5'>
                            <div className='flex items-center gap-3 '>
                                <Avatar className='bg-white h-8 w-8'  >
                                    <Image alt='manufacture' src={phone} />
                                </Avatar>
                                <h1>+1 (630) 881-8922</h1></div>
                            <div className='flex items-center gap-3'>
                                <Avatar className='bg-white h-8 w-8'  >
                                    <Image alt='manufacture' src={sms} />
                                </Avatar>
                                <h1>+1 (484) 985-2448</h1></div>
                            <div className='flex items-center gap-3'>
                                <Avatar className='bg-white h-8 w-8'  >
                                    <Image alt='manufacture' src={timeAndDate} />
                                </Avatar>
                                <h1>Our weekly</h1></div>
                            <div className='flex items-center gap-3'>
                                <Avatar className='bg-white h-8 w-8'  >
                                    <Image alt='manufacture' src={location} />
                                </Avatar>
                                <h1  >5611 Trinity Lakes Lane Antioch CA 94531</h1></div>
                        </div>
                    </div> */}
                    <div className='text-white ps-4 w-48'>
                        <h1 className='text-[21px] font-bold ps-2 '>Email</h1>
                        <div className='flex text-[14px] flex-col mt-3 gap-5'>
                            <div className='flex items-center gap-3 '>
                                <Avatar className='bg-white h-8 w-8'  >
                                    <Image alt='manufacture' src={email} />
                                </Avatar>
                                <h1>support@arvamtech.com</h1></div>
                                </div>
                    </div>
                </div>
            </div>
        </>
    )
}
