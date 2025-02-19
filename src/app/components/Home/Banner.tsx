import React from 'react'
import banner from '../../../../public/asset/images/home-banner.png'
import bsmi_logo from '../../../../public/asset/images/bsmi_logo.png'
import Image from 'next/image'
import Link from 'next/link'
//import { KeyboardArrowRight } from '@mui/icons-material'

export default function Banner() {
    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-2 gap-10 gap-y-10 p-10 pe-5 '>
                <div>
                    <div className='font-bold text-[50px] leading-[3.7rem]'>
                        <h1 className='text-[#1B6482]   '>ARVAM EAM</h1>
                        <h1 >More Wrench Time, Less Punch Time</h1> 
                    </div>
                    <h1 className='text-[22px] mt-6 text-justify '>A shop floor friendly Enterprise Asset Management (EAM) solution with latest and greatest technology components to meet modern day demands yet simple in construction and use</h1>
                    <div className='mt-12 leading-[3rem]'>
                        <Link href={'/contact-us'}> <h1 className='text-lg inline bg-black text-white p-4'> Request a Demo</h1></Link>
                    </div>
                </div>
                <Image className='flex mx-auto max-lg:order-first ' alt='banner' src={banner} />
            </div>
            <div className='bg-[#F9F9F9] ps-10 pb-15 p-5 relative '>
                <div className='font-bold text-[30px] leading-[3.7rem]'>
                    <h1 className='text-[#1B6482]   '>Customer Testimonial</h1>
                </div>
                <div className="absolute  left-60 right-60 bottom-0 bg-gradient-to-r h-[2.5px] from-transparent via-black/30 to-transparent "></div>
                
                <h1 className='text-[18px]' >Bay Standard Manufacturing (BSMI), USA has partnered with ARVAM to successfully implement
                    their EAM software solution. With minimal prior experience in managing our
                    assets and maintenance, the team at ARVAM has been incredibly supportive
                    throughout the implementation process. Their hands-on training and the
                    software&apos;s user-friendly design have exceeded our expectations.
                    We are excited about the long-term partnership and the opportunities
                    this solution will bring to our operations </h1>
                <h1 className='text-[20px] right-60 text-right'> Mark Hearney, Operations Head</h1>

                    <Image alt='manufacture' className='float-right' src={bsmi_logo} />

                {/*<h1 className='text-[18px] right-60 text-right'> Bay Standard Manufacturing Inc CA USA</h1>*/}


            </div>
        </div>
    )
}
