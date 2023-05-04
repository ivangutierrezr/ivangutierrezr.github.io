import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './IGRFooter.css';

const IGRFooter = () => {
    const iconStyle = { color: 'white', fontSize: 40, margin: '0 5px' }
    return (
        <footer className='contentIGRFooter'>
            <a href="https://github.com/ivangutierrezr" target='_blank'>
                <GitHubIcon sx={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/ivangutierrezr/" target='_blank'>
                <LinkedInIcon sx={iconStyle} />
            </a>
            <a href="https://www.instagram.com/IvanGutierrezR" target='_blank'>
                <InstagramIcon sx={iconStyle} />
            </a>
            <a href="https://www.facebook.com/IvanGutierrezR" target='_blank'>
                <FacebookIcon sx={iconStyle} />
            </a>
            <a href="https://www.twitter.com/IvanGutierrezR" target='_blank'>
                <TwitterIcon sx={iconStyle}/>
            </a>
        </footer>
    )
}

export default IGRFooter;