import Image from 'next/image'
import React from 'react'
import setting1 from '../../../../public/asset/images/setting1.png'
import setting2 from '../../../../public/asset/images/setting2.png'
import setting3 from '../../../../public/asset/images/setting3.png'
import checkMark from '../../../../public/asset/images/check-mark.png'
import cross from '../../../../public/asset/images/cross.png'
import solution from '../../../../public/asset/images/solution-image2.png'
import Link from 'next/link'

export default function PricingContent() {
    return (<>
        <div className='p-10 pe-5' >
            <h1 className='font-bold text-[35px] my-5 ' >ARVAM EAM Pricing For Predictive Maintenance & Asset Management</h1>
            <div className='flex gap-20 max-lg:flex-wrap lg:gap-5 xl:gap-20 justify-center'>
                <div className='flex flex-col items-center justify-center' >
                <h1 className='font-bold text-[28px] py-10  mb-16' >Professional</h1>
                    <div className='border border-[#F4F4F4] px-6 shadow-lg w-[19rem] relative'>
                        <div className=' flex justify-center -mt-16 relative '>
                            <Image alt='settings' src={setting3} />
                            <div className=" absolute inset-0 mb-5 flex flex-col items-center justify-center">
                                <h1 className="text-[18px] font-bold flex items-center gap-1">
                                    $ <span className="text-[31px]">50</span>
                                </h1>
                                <h1 className="text-[15px] font-bold leading-[2px]">month</h1>
                            </div>
                        </div>
                        <h1 className='font-bold text-[18px] text-[#7B7575] my-5 text-center '>Price per user</h1>
                        <a href ='/contact-us'>
                        <button className=' bg-[#F4F4F4] px-6 flex mx-auto py-2   border border-[#E5E5E5]' ><h1 className='text-[18px] font-bold' >Get started</h1></button>
                        </a>
                        <h1 className='text-[18px] mt-7 px-5 h-28 '>Standalone operations can add value to their existing maintenance tools for a competitive edge.</h1>
                        
                        <ul className="  font-bold my-8 text-[16px]  ">
                            <li className='flex gap-2 my-2'>
                                <Image alt='settings' src={checkMark} />
                                Security
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Work Center
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Reports
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Dashboards
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Failure Prevention
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Reliability Analytics
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Mobility
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Inventory
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Purchase
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                IIoT
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Third Party Appln Interface
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center' >
                    <h1 className='font-bold text-[28px] py-10  mb-16' >Premium</h1>
                    <div className='border border-[#F4F4F4] px-6 shadow-lg w-[19rem] relative'>
                        <div className=' flex justify-center -mt-16 relative '>
                            <Image alt='settings' src={setting2} />
                            <div className=" absolute inset-0 mb-5 flex flex-col items-center justify-center">
                                <h1 className="text-[18px] font-bold flex items-center gap-1">
                                    $ <span className="text-[31px]">75</span>
                                </h1>
                                <h1 className="text-[15px] font-bold leading-[2px]">month</h1>
                            </div>
                        </div>
                        <h1 className='font-bold text-[18px] text-[#7B7575] my-5 text-center '>Price per user</h1>
                        <a href ='/contact-us'>
                        <button className=' bg-[#F4F4F4] px-6 flex mx-auto py-2   border border-[#E5E5E5]' ><h1 className='text-[18px] font-bold' >Get started</h1></button>
                        </a>
                        <h1 className='text-[18px] mt-7 px-5 h-28 '>Automate maintenance and engineer uptime at more than one facility. </h1>
            
                        <ul className="  font-bold my-8 text-[16px]  ">
                        <li className='flex gap-2 my-2'>
                                <Image alt='settings' src={checkMark} />
                                Security
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Work Center
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Reports
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Dashboards
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Failure Prevention
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Reliability Analytics
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Mobility
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Inventory
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Purchase
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                IIoT
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={cross} />
                                Third Party Appln Interface
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center' >
                    <h1 className='font-bold text-[28px] py-10  mb-16' >Enterprise</h1>
                    <div className='border border-[#F4F4F4] px-6 shadow-lg w-[19rem] relative'>
                        <div className=' flex justify-center -mt-16 relative '>
                            <Image alt='settings' src={setting1} />
                            <div className=" absolute inset-0 mb-5 flex flex-col items-center justify-center">
                                <h1 className="text-[18px] font-bold flex items-center gap-1">
                                    $ <span className="text-[31px]">100</span>
                                </h1>
                                <h1 className="text-[15px] font-bold leading-[2px]">month</h1>
                            </div>
                        </div>
                        <h1 className='font-bold text-[18px] text-[#7B7575] my-5 text-center '>Price per user</h1>
                        <a href ='/contact-us'>
                        <button className=' bg-[#F4F4F4] px-6 flex mx-auto py-2   border border-[#E5E5E5]' ><h1 className='text-[18px] font-bold' >Get started</h1></button>
                        </a>
                        <h1 className='text-[18px] mt-7 px-5 h-28 '>Large enterprise-level firms can consolidate all operations under one complete maintenance solution.</h1>
                        
                        <ul className="  font-bold my-8 text-[16px]  ">
                        <li className='flex gap-2 my-2'>
                                <Image alt='settings' src={checkMark} />
                                Security
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Work Center
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Reports
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Dashboards
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Failure Prevention
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Reliability Analytics
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Mobility
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Inventory
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Purchase
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                IIoT
                            </li>
                            <li className='flex gap-2 my-3'>
                                <Image alt='settings' src={checkMark} />
                                Third Party Appln Interface
                            </li>
                        </ul>
                    </div>
                </div>
            </div></div>
        {/*
        <div className='bg-[#F1F9F1] px-14 py-6 flex max-md:flex-wrap gap-5 justify-between  '>
            <div className='w-[40rem]'>
                <h1 className='text-[28px] font-bold  '>Take charge of your operation&apos;s maintenance today!</h1>
                <h1 className='text-[20px] mt-4' >Collaborate with our implementation team to choose the best plan for your company — and begin engineering uptime outcomes immediately.</h1>
                <div className='mt-10 mb-8 justify-self-center self-center '>
                    <Link href={'/contact-us'}> <h1 className='text-lg inline bg-black text-white p-4'> Request a Demo</h1></Link>
                </div>
            </div>
            <Image alt='solution' className='max-md:mx-auto max-md:order-first' src={solution} />
        </div>
        <div className='bg-[#F4F4F4] ps-10 p-6  '>
            <h1 className='text-[18px]'>
                <span className='text-[21px] font-bold '> CUSTOMER VOICE: </span>
                ARVAM EAM has been
                a great choice for BSMI to manage their
                inspection and maintenance processes</h1>
        </div>
       <div className='bg-[#FFFFFF] ps-10 p-6  '>
            <h1 className='text-[35px] font-bold  '>VERTICALS</h1>
        </div>*/}
    </>
    )
}
