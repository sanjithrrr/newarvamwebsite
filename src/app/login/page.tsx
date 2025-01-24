
import Image from 'next/image';
import React from 'react'
import landingImage from '../../../public/asset/images/landing_page.png'
import logo from '../../../public/asset/images/logo.png'
import { Divider, TextField } from '@mui/material';
import Link from 'next/link';

export default function Login() {
    return (
        <div className='relative mt-10 flex justify-center  '>
            <div className=' absolute right-2 max-xs:-top-8 xs:right-[5%] lg:right-[15%] '>
                <Image height={100} width={100} alt='logo' src={logo} /></div>
            <div className='absolute top-[17%] left-[47%] md:left-[50%] px-2 '>
                <h1 className='text-[35px] font-bold '>Sign in</h1>
                <h1 className='text-[20px]'>
                    New user? <Link href={''} className='text-[#0092E4] max-xs:block'>Create an account</Link>
                </h1>
                <div className='mt-20   text-[#817D7D] w-[100%] sm:w-[140%]'>
                    <h1 className='text-[20px] mb-2'>Email address</h1>
                    <TextField className='block'
                        placeholder="Enter email"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width:'100%',
                                height: '38px'
                            },
                        }}
                    />
                    <Link className='flex justify-end mt-4 ' href={''}>
                        <div className="text-white  text-lg rounded-full text-[18px]  bg-[#000000] inline-block px-5 pb-[2px]  ">
                            Continue
                        </div>
                    </Link>
                </div>
                {/* <Divider className='text-[18px] mt-8' sx={{
                    '&::before, &::after': {
                        borderWidth: '1.2px',
                        borderColor: '#CFCFCF',
                    }
                }}>Or</Divider>
                <div className='mt-36 flex flex-col justify-center gap-5 '>
                <Link href={''} className='border-[1.5px] text-[18px] border-[#CFCFCF] px-20 py-3 rounded-full' >Continue with Google</Link>
                    <Link href={''} className='border-[1.5px] text-[18px] border-[#CFCFCF] px-20 py-3 rounded-full' >Continue with Facebook</Link>
                    <Link href={''} className='border-[1.5px] text-[18px] border-[#CFCFCF] px-20 py-3 rounded-full' >Continue with Apple</Link>
                </div> */}
                <Link href={''}><h1 className='text-[18px] mt-[20%] text-[#0092E4]'>Get help signing in</h1></Link>
            </div>
            <div></div>
            <Image  alt='landing_image' src={landingImage} />
        </div>
    )
}
