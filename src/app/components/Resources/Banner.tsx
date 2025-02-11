import React from 'react'
import banner from '../../../../public/asset/images/resource-banner.png'
import Image from 'next/image'
import Link from 'next/link'
import { KeyboardArrowRight } from '@mui/icons-material'

export default function Banner() {
    return (
        <div>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-40 gap-y-10 p-10 pe-5 '>
                <div>
                    <div className='font-bold text-[50px] leading-[3.7rem]'>
                        <h1 className='text-[#1B6482]   '>ARVAM EAM</h1>
                        <h1 >More Wrench Time, Less Punch Time</h1> </div>
                    <h1 className='text-[18px] mt-6 text-justify '>Our Enterprise Asset Management (EAM) is a best of breed application suitable
                    for all Asset intensive and sensitive organizations. We have designed and developed this
                    keeping the challenges of end users in mind. This is a vital element of our product
                    among others. In addition to this, our advisory wrapped solution deployment
                    offers true benefits to the facility or enterprise</h1>
                    <div className='mt-12 leading-[3rem]'>
                        <Link href={'/contact-us'}> <h1 className='text-lg inline bg-black text-white p-4'> Request a Demo</h1></Link>
                        {/*} <h1>Not Ready yet? <Link href={'/contact-us'} className='text-[#319FCB] font-bold'>Sign up for free</Link><KeyboardArrowRight className='-ms-1' /> </h1>*/}
                    </div>
                </div>
                <Image className='-mt-10 flex mx-auto max-lg:order-first ' alt='banner' src={banner} />
            </div>
        </div>
    )
}
