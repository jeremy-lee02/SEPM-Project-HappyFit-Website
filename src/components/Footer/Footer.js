import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer_container'>
        <div className='bg w-full flex justify-center justify-between items-center h-20 flex-col md:flex-row pt-2'>
            <div className='flex flex-row justify-between items-center md:pl-28'>
                <div className='pl-4'>
                    <a href='https://www.youtube.com/channel/UCmFSGzuHD15oYuX2Nnvpvmg' target='_blank' rel="noreferrer">
                        <FaFacebookSquare color='white' fontSize= "2em" />
                    </a> 
                </div>
                {/* replace a tag to youtube link */}
                <div className='pl-4'>
                    <a href='https://www.youtube.com/channel/UCmFSGzuHD15oYuX2Nnvpvmg' target='_blank' rel="noreferrer"> 
                        <FaInstagramSquare color='white' fontSize= "2em" />
                    </a>
                </div>
                <div className='pl-4'>
                    <a href='https://www.youtube.com/channel/UCmFSGzuHD15oYuX2Nnvpvmg' target='_blank' rel="noreferrer">
                        <FaYoutubeSquare color='white' fontSize= "2em" />
                    </a>
                </div>
                <div className='pl-4'> 
                    <a href='https://www.youtube.com/channel/UCmFSGzuHD15oYuX2Nnvpvmg' target='_blank' rel="noreferrer">
                        <FaTwitterSquare color='white' fontSize= "2em" />
                    </a>
                </div>
            </div>

            <div className='flex justify-between items-center md:pr-20 text-white'>
                © 2022 All Rights Reserved: HappyFit
            </div>
        </div>
    </div>
  )
}

export default Footer