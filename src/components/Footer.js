import React from 'react'
import './Footer.css'
import ReactDOM from 'react-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className='relative'>
        <div className='bg w-full flex justify-center justify-between items-center h-20'>
            <div className='flex flex-row justify-between items-center md:pl-28'>
                <div className='pl-4'>
                    <FaFacebookSquare color='white' fontSize= "2em" />
                </div>
                <div className='pl-4'>
                    <FaInstagramSquare color='white' fontSize= "2em" />
                </div>
                <div className='pl-4'>
                <FaYoutubeSquare color='white' fontSize= "2em" />
                </div>
                <div className='pl-4'> 
                    <FaTwitterSquare color='white' fontSize= "2em" />
                </div>
            </div>

            <div className='flex flex-initial justify-between items-center md:pr-20 text-white'>
                © 2022 All Rights Reserved: HappyFit
            </div>
        </div>
    </div>
  )
}

export default Footer