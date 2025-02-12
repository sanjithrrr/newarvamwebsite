import React from 'react'
import image1 from '../../../../public/asset/images/solution-image1.png'
import image2 from '../../../../public/asset/images/solution-image2.png'
import image3 from '../../../../public/asset/images/solution-image3.png'
import image4 from '../../../../public/asset/images/solution-image4.png'
import image5 from '../../../../public/asset/images/solution-image5.png'
import Image from 'next/image'
export default function SolutionContent() {
    return (
        <>
            <div className=' ps-10 p-5 '>
                <h1 className='text-[35px] mt-10 font-bold '>Improve Your Company’s Maintenance Management Processes?</h1>
                <h1 className='text-[21px] mt-9 text-[#1B6482] font-bold '>These ARVAM EAM articles provide guidance for improving maintenance and asset management practices.</h1>
                <div className='my-20 grid md:grid-cols-2 lg:grid-cols-3  items-start gap-16 gap-y-32 ' >
                    <div className='flex flex-col gap-10 items-center '>
                        <div className='bg-[#EAF3F7] h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center ' >
                            <Image alt='quality' src={image1} />
                        </div>
                        <h1 className='text-[25px] text-center px-10 font-bold'>Predictive Maintenance</h1>
                    </div>
                    <div className='flex flex-col gap-10 items-center '>
                        <div className='bg-[#E7F7E79C]  h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center' >
                            <Image alt='maintenance' src={image2} />
                        </div>
                        <h1 className='text-[25px] text-center px-10 font-bold'>Corrective Maintenance</h1>
                    </div>
                    <div className='flex flex-col gap-10 items-center'>
                        <div className='bg-[#E1E2E4]  h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center' >
                            <Image alt='work-order' src={image3} />
                        </div>
                        <h1 className='text-[25px] text-center px-10 font-bold'>Smart Work Orders</h1>
                    </div>
                    <div className='flex flex-col gap-10 items-center'>
                        <div className='bg-[#E7F7E79C]  h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center' >
                            <Image alt='dummy' src={image2} />
                        </div>
                        <h1 className='text-[25px] font-bold px-10 text-center'>Seamless Upgrades</h1>
                    </div>
                    <div className='flex flex-col gap-10 items-center'>
                        <div className='bg-[#F2F3F5]  h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center' >
                            <Image alt='dummy' src={image4} />
                        </div>
                        <h1 className='text-[25px] font-bold px-10 text-center'>Compliance</h1>
                    </div>
                    <div className='flex flex-col gap-10 items-center   '>
                        <div className='bg-[#ECF3F7]  h-80 max-xs:w-[19rem] w-[22rem] lg:w-[19rem] xl:w-[22rem] flex justify-center items-center' >
                            <Image alt='software' src={image5} />
                        </div>
                        <h1 className='text-[25px] font-bold px-10 text-center'> Quality Performance</h1>
                    </div>
                </div>
            </div>

            {/*<div className='bg-[#F4F4F4] ps-10 p-5 mt-10 '>
                <h1 className='text-[18px]'><span className='font-bold text-[21px]'>CUSTOMER VOICE:</span> ARVAM EAM has been a choice for BSMI to manage their inspection and maintenance processes</h1>
            </div>
            <div className='ps-10 p-5 '>
                <h1 className='text-[35px] font-bold '>VERTICALS</h1>
            </div>*/}
            </>
    )
}
