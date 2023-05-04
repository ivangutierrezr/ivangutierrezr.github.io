import React from 'react';

import Avatar from '@mui/material/Avatar';

import './IGRAvatar.css';

const IGRAvatar = () => {
    return (
        <div className='contentIGRAvatar'>
            <Avatar
                alt="Nelson Iván Gutiérrez R."
                src="/images/profile_image.jpg"
                sx={{ width: 200, height: 200 }}
            />
        </div>
    )
}

export default IGRAvatar;