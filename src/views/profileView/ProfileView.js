import React, {Component} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import IGRTitle from '../../components/IGRTitle/IGRTitle'
import IGRAvatar from '../../components/IGRAvatar/IGRAvatar'

import './ProfileView.css'

export default class ProfileView extends Component {
    render() {
        const pStyle = {textAlign: 'justify', margin: '10px 0', fontSize: '16px'}
        return (
            <div className='mainContent'>
                <IGRAvatar />
                <IGRTitle text={`Profile`}/>
                <Box sx={{ width: '100%', maxWidth: { xs: '80%', md: '800px' } }}>
                    <p style={{textAlign: 'center', margin: '10px 0'}}>
                        Hi, I'm Nelson Iván Gutiérrez Rendón, welcome to my portafolio!
                    </p>
                    <p style={pStyle}>
                        Full stack software developer with 7+ years’ experience both as fulltime employee and as freelancer from my own company “Antilope Interactive”. Software Engineer from Universidad del Valle – Colombia, Software Technician at Unitecnica Pereira and Business Administrator at Universidad del Valle – Colombia
                    </p>
                    <p style={pStyle}>
                        During my years of experience as a software developer, I’ve had the opportunity to work for several companies, both as fulltime employee and as freelancer from my own company “Antilope Interactive”. For more than 7 years, I’ve been working on several challenging projects where I’ve had the opportunity to learn different technologies and gain experience in the software development process until eventually being able to lead a development team.
                    </p>
                    <p style={pStyle}>
                        Professionally, I like to face new challenges, improve my knowledge, live new experiences, learn about new things and, although I’ve had learned a lot from my working experience so far, I feel that I still have a lot to learn.
                    </p>
                </Box>
            </div>
        )
    }
}