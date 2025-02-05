'use client'
import Image from 'next/image'
import React, {  } from 'react'
import logo from '../../../../public/asset/images/logo.png'
import {  Divider, Drawer, IconButton, InputAdornment, List, TextField } from '@mui/material'
import { ChevronRight, Search } from '@mui/icons-material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
    const pathname = usePathname();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    return (
        <>
            <div className='ps-10 max-lg:!hidden  p-5 relative grid grid-flow-col    items-center max-xl:gap-5 gap-10 '>
                <Image alt='logo' src={logo} width={100} height={100} />
                <Divider sx={{ width: 0, borderWidth: '1.5px', marginBottom: '20px' }} orientation="vertical" variant="middle" flexItem />
                <div className='text-lg font-bold flex xl:gap-6 items-center '>
                    <Link href={'/'}><h1 className={`${pathname === '/' ? 'bg-[#F4F4F4]' : ''} p-4 `}> Products</h1></Link>
                    <Link href={'/solutions'}><h1 className={`${pathname === '/solutions' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Solutions</h1></Link>
                    <Link href={'/resources'}><h1 className={`${pathname === '/resources' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Resources</h1></Link>
                    <Link href={'/pricing'}> <h1 className={`${pathname === '/pricing' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Pricing</h1></Link>
                </div>
                <div className='flex items-center gap-3'>
                    <TextField
                        placeholder="Search"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                paddingRight: '0px',
                                width: '210px',
                                height: '33px'
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" className='bg-[#F4F4F4] p-3  rounded-r-full'>
                                        <Search />
                                    </InputAdornment>
                                ),
                            }
                        }}
                    />

                    <Link href={'/contact-us'} className='bg-[#F4F4F4] p-4 text-lg text-black font-bold'>
                        Contact Us
                    </Link>
                    <Link href={'/login'} className='bg-black p-4 text-lg text-white font-bold'>
                        Log in
                    </Link></div>
            </div>
            <div className='ps-10 lg:!hidden  p-5 relative grid grid-flow-col justify-between   items-center max-xl:gap-5 gap-10 '>
                <Image alt='logo' src={logo} width={100} height={100} />
                <div className='flex items-center gap-3'>
                    <TextField
                    className='max-xs:!hidden'
                        placeholder="Search"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                paddingRight: '0px',
                                width: '210px',
                                height: '33px'
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end" className='bg-[#F4F4F4] p-3  rounded-r-full'>
                                        <Search />
                                    </InputAdornment>
                                ),
                            }
                        }}
                    />
                    <Link href={'/contact-us'} className=' max-md:!hidden bg-[#F4F4F4] p-4 text-lg text-black font-bold'>
                        Contact Us
                    </Link>
                    <Link href={'/login'} className='  max-md:!hidden bg-black p-4 text-lg text-white font-bold'>
                        Log in
                    </Link>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer(true)}
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                </div>

                <Drawer className='px-10' open={open} anchor='right'>
                    <div className='flex justify-start mt-10 ps-5 '>
                        <IconButton onClick={toggleDrawer(false)}>
                            <ChevronRight fontSize='large' />
                        </IconButton></div>
                    <List className='px-10'>
                    <Link href={'/'}><h1 className={`${pathname === '/' ? 'bg-[#F4F4F4]' : ''} p-4 `}> Products</h1></Link>
                    <Link href={'/solutions'}><h1 className={`${pathname === '/solutions' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Solutions</h1></Link>
                    <Link href={'/resources'}><h1 className={`${pathname === '/resources' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Resources</h1></Link>
                    <Link href={'/pricing'}> <h1 className={`${pathname === '/pricing' ? 'bg-[#F4F4F4] ' : ''} p-4 `}>Pricing</h1></Link>
                    <Link href={'/contact-us'}> <h1 className={`${pathname === '/contact-us' ? 'bg-[#F4F4F4] ' : ''} p-4 md:!hidden `}>Contact Us</h1></Link>
                    <Link href={'/login'}> <h1 className={`${pathname === '/login' ? 'bg-[#F4F4F4] ' : ''} p-4 md:!hidden`}>Log in</h1></Link>
                    </List>
                </Drawer>
            </div></>
    )
}
