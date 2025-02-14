import React from 'react'
//import mixBlend from '../../../../public/asset/images/mix-blend.png'
//import Image from 'next/image'

export default function HomeContent() {
    return (
        <>
            <div className='ps-10 p-5 '>
                <h1 className='text-[35px] text-[#319FCB] font-bold'>ARVAM EAM- Why choose us?</h1>
                <div className="grid max-xs:grid-cols-1 max-md:grid-cols-2 grid-cols-4 px-4 ">
                    <div className="grid grid-flow-row auto-rows-max place-items-center relative">
                        <div className="p-5 lg:p-10 rounded-full relative ring-[40px]  lg:ring-[48px] shadow-inner ring-lime-100 mt-20  w-44 h-44 lg:w-52 lg:h-52 flex  items-center justify-center">
                            <h1 className="text-center font-bold text-[#1B6482] text-2xl">Asset Management Made Simple</h1>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-8 w-[2px] bg-[#DEE1E5]"></div>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                        </div>
                        <div className="text-center mt-24 lg:px-12 px-2 text-[22px]">
                            <h1>
                                With ARVAM EAM learning curve will not be steep making it easy to adopt
                                by all involved in Inspection and Maintenance
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-flow-row auto-rows-max place-items-center relative me-[14px]">
                        <div className="p-5 lg:p-10 rounded-full relative ring-[40px]  lg:ring-[48px] shadow-inner ring-sky-100 max-md:mt-20 mt-48  w-44 h-44 lg:w-52 lg:h-52 flex  items-center justify-center">
                            <h1 className="text-center font-bold text-[#1B6482] text-2xl">Inspection Effectiveness</h1>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-8 w-[2px] bg-[#DEE1E5]"></div>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                        </div>
                        <div className="text-center mt-24 lg:px-12 px-2 text-[22px]">
                            <h1>
                                Inspection integration with maintenance will result in Asset monitoring
                                which will pave way for Asset Performance Management
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-flow-row auto-rows-max place-items-center relative ms-[14px]">
                        <div className="p-5 lg:p-10 rounded-full relative ring-[40px]  lg:ring-[48px] shadow-inner ring-pink-100 max-md:mt-20 mt-48   w-44 h-44 lg:w-52 lg:h-52 flex  items-center justify-center">
                            <h1 className="text-center font-bold text-[#1B6482] text-2xl">Cost Optimization</h1>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-8 w-[2px] bg-[#DEE1E5]"></div>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                        </div>
                        <div className="text-center mt-24 lg:px-12 px-2 text-[22px]">
                            <h1>
                                Achieving 10-20 reduction in maintenance cost reduction through ARVAM EAM is a certain
                                outcome for sustained cost effectiveness and performance
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-flow-row auto-rows-max place-items-center relative">
                        <div className="p-5 lg:p-10 rounded-full relative ring-[40px]  lg:ring-[48px] shadow-inner ring-yellow-100 mt-20 w-44 h-44 lg:w-52 lg:h-52 flex  items-center justify-center">
                            <h1 className="text-center font-bold text-[#1B6482] text-2xl">Reliability and Safety</h1>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-8 w-[2px] bg-[#DEE1E5]"></div>
                            <div className="absolute -bottom-[72px] lg:-bottom-[80px] left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                        </div>
                        <div className="text-center mt-24 lg:px-12 px-2 max-lg:ps-8 text-[22px]">
                            <h1>
                                Reliability and Safety are key pillars in ARVAM EAM. With optimal
                                asset management process major asset failures and catastrophes can be avoided at all times
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
             {/*<div className='bg-[#F4F4F480] ps-10 p-5  '>
                <h1 className='text-[#319FCB] font-bold text-lg'>Version Stability :</h1>
                <h1> ARVAM EAM will assure users that frequent upgrades will not shake user
                    stability. User adoption disruption due to frequent upgrades has become a single
                    big impediment in achieving intended results in several facilities and organizations.
                    We will assure that this will not be the case with ours</h1>
            </div>
            <div className='relative '>
                <div className="relative flex mt-56 justify-center -space-x-[13.2rem]">
                    <div className="mix-blend-multiply shadow-inner bg-pink-100 w-[19rem] h-[19rem]  rounded-full"></div>
                    <div className="mix-blend-multiply shadow-inner -translate-y-40 bg-sky-100 w-[19rem] h-[19rem] rounded-full"> <h1>Planet</h1> </div>
                    <div className="mix-blend-multiply shadow-inner bg-lime-100 w-[19rem] h-[19rem] rounded-full"></div>
                </div>
            </div> 
            <div className=' grid grid-cols-3 justify-center mt-10 '>
                <div className='relative'>
                    <div>
                        <div className="absolute top-[13rem] left-[12rem] ">
                            <ol className='list-decimal '>
                                <li>Environmental<br /> Responsibility</li>
                                <li>Conservation Goals</li>
                                <li>Societal obligation</li>
                            </ol>
                        </div>
                        <div className="absolute top-[16.3rem] left-[21.7rem] z-10  h-[2px] w-[14rem] bg-[#DEE1E5]"></div>
                        <div className="absolute top-[16rem] left-[21.7rem]   h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                    <div>
                        <div className="absolute top-[21.5rem] left-[12rem] ">
                            <ol className='list-decimal '>
                                <li>Personal Goal</li>
                                <li>Personal Safety</li>
                                <li>Business Commitment</li>
                            </ol>
                        </div>
                        <div className="absolute top-[23.3rem] left-[22rem]  h-[2px] w-[5.6rem] bg-[#DEE1E5]"></div>
                        <div className="absolute top-[23rem] left-[22rem]   h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                    <h1 className='text-[25px] font-bold absolute z-10 left-[29rem] top-[21rem] '>Human</h1>
                </div>
                <div className='relative'>
                    <Image alt='mix-blend' src={mixBlend} className='mt-20 ' />
                    <div>
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 ">
                            <ol className='list-decimal '>
                                <li>Nature</li>
                                <li>Future</li>
                                <li>Resources</li>
                            </ol>
                        </div>
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 h-8 w-[2px] bg-[#DEE1E5]"></div>
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                    <h1 className='text-[25px] font-bold absolute top-40 left-1/2 transform -translate-x-1/2 '>Planet</h1>
                    <div>
                        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 ">
                            <ol className='list-decimal '>
                                <li>Existential Threats</li>
                                <li>Neighborhood Safety</li>
                                <li>Enterprise Goal</li>
                            </ol>
                        </div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-28 w-[2px] bg-[#DEE1E5]"></div>
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                </div>
                <div className='relative'>
                    <div>
                        <div className="absolute top-[15rem] right-[11rem] ">
                            <ol className='list-decimal '>
                                <li>Environment impact</li>
                                <li>Industry Reputation</li>
                            </ol>
                        </div>
                        <div className="absolute top-[16.3rem] right-[21rem]   h-[2px] w-[14rem] bg-[#DEE1E5]"></div>
                        <div className="absolute top-[16rem] right-[21rem]   h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                    <div>
                        <div className="absolute top-[22rem] right-[8rem] ">
                            <ol className='list-decimal '>
                                <li>Value Addition</li>
                                <li>Internal and External Safety</li>
                                <li>Economic viability</li>
                            </ol>
                        </div>
                        <div className="absolute top-[23.3rem] right-[21rem]   h-[2px] w-[7rem] bg-[#DEE1E5]"></div>
                        <div className="absolute top-[23rem] right-[21rem]   h-3 w-3 rounded-full bg-[#DEE1E5]"></div>
                    </div>
                    <h1 className='text-[25px] font-bold absolute right-[28.5rem] top-[21rem] '>Enterprise</h1>
                </div>
            </div >
            <div className='ps-12 p-5 mt-20'>
                <h1 className='text-[35px] font-bold '>VERTICALS</h1>
            </div>*/}
        </>
    )
}
