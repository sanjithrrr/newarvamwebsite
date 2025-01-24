import React from 'react'
import banner from '../../../../public/asset/images/resource-banner.png'
import Image from 'next/image'
import Link from 'next/link'
import { KeyboardArrowRight } from '@mui/icons-material'

export default function Banner() {
    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-40 gap-y-10 p-10 pe-8 '>
                <div>
                    <div className='font-bold text-[50px] leading-[3.7rem]'>
                        <h1 className='text-[#1B6482]   '>ARVAM EAM</h1>
                        <h1 >More Wrench Time, Less Punch Time</h1> </div>
                    <h1 className='text-[18px] mt-6 text-justify '>A shop floor friendly EAM solution with latest and greatest technology components to meet modern day demands yet simple in construction and use</h1>
                    <div className='mt-12 leading-[3rem]'>
                        <Link href={''}> <h1 className='text-lg inline bg-black text-white p-4'> Request a Demo</h1></Link>
                        <h1>Not Ready yet? <Link href={''} className='text-[#319FCB] font-bold'>Sign up for free</Link><KeyboardArrowRight className='-ms-1' /> </h1>
                    </div>
                </div>
                <Image className='flex mx-auto max-lg:order-first ' alt='banner' src={banner} /></div>
            <div className='bg-[#F9F9F9] ps-10 p-5 relative '>
                <div className="absolute  left-60 right-60 bottom-0 bg-gradient-to-r h-[2.5px] from-transparent via-black/30 to-transparent "></div>
                <h1 className='text-[18px]'><span className='text-[21px] font-bold text-[#1B6482]'>ARVAM EAM: </span> Our Enterprise Asset Management (EAM) is a best of breed application suitable
                    for all Asset intensive and sensitive organizations. We have designed and developed this
                    keeping the challenges of end users in mind. This is a vital element of our product
                    among others. In addition to this, our advisory wrapped solution deployment
                    offers true benefits to the facility or enterprise</h1>
            </div>
        </div>
    )
}
