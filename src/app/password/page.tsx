
'use client'
import Image from 'next/image';
import React from 'react'
import landingImage from '../../../public/asset/images/landing_page.png'
import logo from '../../../public/asset/images/logo.png'
import { Avatar, Divider, InputAdornment, Switch, TextField } from '@mui/material';
import Link from 'next/link';
import { Domain, Visibility, VisibilityOff } from '@mui/icons-material';

export default function Password() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className='relative mt-10 min-h-screen flex justify-center '>
            <div className=' absolute right-2 max-xs:-top-8 xs:right-[5%] lg:right-[15%] '>
                <Image height={100} width={100} alt='logo' src={logo} /></div>
            <div className='absolute top-[17%] left-[47%] md:left-[50%] px-2 '>
                <h1 className='text-[35px] font-bold leading-7 '>Enter your password</h1>
                <div className='  flex flex-wrap justify-center items-center gap-2 xs:gap-4 my-5 xs:my-10'>
                    <Avatar className='bg-[#000000]  h-16 w-16'  >
                        <Domain  fontSize='large' />
                    </Avatar>
                    <div className='leading-5 text-wrap'>
                        <h1 className=' xs:text-[20px]  text-[#4A4A4A]' >adhiyaman@arvamtech.com</h1>
                        <h1 className=' xs:text-[18px] text-[#817D7D]' >Email address</h1>
                    </div>
                </div>
                <div className=' text-[#817D7D] '>
                    <h1 className='text-[20px]  mb-2'>Password</h1>
                    <TextField className='block'
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'white',
                                width: '100%',
                                height: '38px'
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" className='cursor-pointer' onClick={handleClickShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </InputAdornment>
                                )
                            }
                        }} />
                    <div className='flex flex-wrap gap-5 items-center justify-between mt-2'>
                        <div className='flex items-center'>
                            <Switch sx={{
                                '& .MuiSwitch-thumb': {
                                    color: 'white',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: '#000000',
                                },
                            }} />
                            <h1 className='text-[16px] text-[#817D7D]' >Stay signed in</h1></div>
                        <Link className='mx-auto' href={''}>
                            <div className="text-white  text-lg rounded-full text-[18px]  bg-[#000000] inline-block px-5 pb-[2px]  ">
                                Continue
                            </div>
                        </Link></div>
                </div>
                <div className='lg:mt-[115%] md:mt-[90%] sm:mt-[60%] max-md:ml-[5%] mt-[20%]'>
                    <Divider sx={{
                        borderWidth: '1.2px',
                        borderColor: '#CFCFCF',

                    }}></Divider>

                    <Link href={''}><h1 className='text-[18px] mt-[2rem] lg:mt-[4rem] text-[#0092E4]'>Reset your password</h1></Link>
                    <Link href={''}><h1 className='text-[18px] mt-[1rem] text-[#0092E4]'>Sign in to a different account</h1></Link>
                </div> </div>
            <div></div>
            <Image alt='landing_image' src={landingImage} />
        </div>
    )
}
