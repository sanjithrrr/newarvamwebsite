import { Avatar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import webManagement from '../../../../public/asset/images/web-management.png'
import phone from '../../../../public/asset/images/phone.png'
import checklist from '../../../../public/asset/images/checklists.png'
import testing from '../../../../public/asset/images/testing.png'
import cloud from '../../../../public/asset/images/cloud-data.png'
import integration from '../../../../public/asset/images/integration.png'
import dashboard from '../../../../public/asset/images/dashboard.png'
import interview from '../../../../public/asset/images/interview.png'
import report from '../../../../public/asset/images/report.png'
import warning from '../../../../public/asset/images/warning.png'
import qualityControl from '../../../../public/asset/images/quality-control.png'
import trophy from '../../../../public/asset/images/trophy.png'

export default function ResourceContent() {
    return (
        <>
            <div className=' ps-10 p-5  '>
                <h1 className='text-[35px] font-bold py-10' >Key Features of ARVAM EAM:</h1>
                <div className='my-10 grid md:grid-cols-2 lg:grid-cols-3 items-start gap-16 lg:gap-x-5 xl:gap-x-16  ' >
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] max-xs:h-[20.5rem]  w-[20rem] h-[17.5rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Preventive Maintenance</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='web-management' src={webManagement} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Our radically different Preventive maintenance design ensures the
                            avoidance of mundane Preventive Maintenance processes that often lead to
                            over maintenance and ignoring key
                            maintenance as well that will result in under maintenance
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] w-[20rem] max-xs:w-[18rem] h-[17.5rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center'>
                            <h1 className='text-[21px] font-bold'>Mobility</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='phone' src={phone} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8'>
                            ARVAM EAM mobile will help field maintenance operatives to
                            handle inspection and maintenance activities without the
                            need to operate their computers
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] w-[20rem] max-xs:w-[18rem] h-[17.5rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Inventory and Stores</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='checklist' src={checklist} />
                            </Avatar>
                        </div>
                        <div className='text-[18px] p-4 pe-8 '>
                            Vital module to manage spares and consumables. Cost optimization
                            is important for maintenance management and effective
                            inventory and purchase management ensures this
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] max-xs:h-[15.5rem] w-[20rem]  lg:h-[14rem] h-[14rem] md:h-[17.5rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Work Order</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='testing' src={testing} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Core module where all inspection and maintenance activities are operationalized.
                            It is a one stop shop for updating and completing maintenance activities
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[14rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Internet of Things</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='cloud' src={cloud} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Our EAM has ability to integrate with sensors mounted on critical assets
                            and process critical inspection and maintenance activities
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18em] w-[20rem] h-[14rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>External Integration</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={integration} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            ARVAM EAM can integrate with third party systems
                            in bi-directional or unidirectional
                            modes for specific business functions
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[14rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Dashboards</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={dashboard} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            User specific dashboards for monitoring key indices. It is an excellent
                            oversight tool for all levels of maintenance and manufacturing personnel
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[14rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Work Request</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={interview} />
                            </Avatar>
                        </div>
                        <div className='text-[18px] p-4 pe-8 '>
                            Easy to use module to enable interdepartmental
                            communication and coordination
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[14rem] lg:h-[14rem] md:h-[29rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Reports</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={report} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Custom reports that can be developed based on specific
                            needs of the facility or enterprise
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[29rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Failure Prevention</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={warning} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Breakdowns are undesirable events that must be prevented or
                            managed in such a way that they do not re-occur. Our Failure
                            Prevention module assists inspection, maintenance and reliability
                            engineers to capture the breakdown causes and register details
                            about the causes and prevention processes.
                            This will serve as a ready reckoner for all present and future workforce
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] max-xs:h-[32.5rem] w-[20rem] h-[29rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>Inspection</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={qualityControl} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 '>
                            Inspection of assets is greatly emphasized in ARVAM EAM.
                            Predictive maintenance need not always have sophisticated
                            predictive maintenance paraphernalia. Simple visual checks,
                            visual observation and corrections will help avoid complex
                            breakdowns. That said, we are not leaving a value-based
                            inspection process in our application. Visual and Value
                            based inspection will provide necessary oversight capability
                            to maintenance teams to avoid costly sudden breakdowns
                        </div>
                    </div>
                    <div className='bg-[#F9F9F9] max-xs:w-[18rem] w-[20rem] h-[29rem] ' >
                        <div className='bg-[#CCE4F2] ps-4 p-2 flex justify-between items-center '>
                            <h1 className='text-[21px] font-bold'>What you achieve</h1>
                            <Avatar className='bg-white h-10 w-10'  >
                                <Image alt='integration' src={trophy} />
                            </Avatar>
                        </div>
                        <div className='text-[20px] p-4 pe-8 flex flex-col gap-5 '>
                            <p >10-15% Reduction in Maintenance Expenses Annually</p>
                            <p >0 Accidents due to Asset Failures</p>
                            <p >20% reduction in inventory</p>
                            <p >100% EAM adoption by Maintenance Department</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className='bg-[#F4F4F4] ps-10 p-6 relative '>
                <h1 className='text-[18px]'>
                    <span className='text-[21px] font-bold '> CUSTOMER VOICE: </span>
                    ARVAM EAM has been a choice for BSMI to manage their
                    inspection and maintenance processes
                </h1>
                    <h1 className='text-[35px] mt-10 font-bold '>VERTICALS</h1>
            </div>*/}
            </>
    )
}
