import React, {Component} from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import IGRTitle from '../../components/IGRTitle/IGRTitle'

import './ProjectsView.css'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1)
}));

export default class ProjectsView extends Component {
    state = {
        projects: [
            {
                image: `./images/megametricas.png`,
                imageText: null,
                project: `Megametricas (Lite and Pro Version)`,
                projectLocation: `Cali, Colombia`,
                description: `Web application for evaluation, monitoring and auditing of companies. This app is been used for 10k+ users right now.`,
                client: `Calidad Empresarial E.A.T`,
                website: `https://megametricas.com.co`,
                clientImage: `./images/calidad.png`
            },
            {
                image: `./images/thinksafe.png`,
                imageText: `ThinkSafe`,
                project: `ThinkSafe`,
                projectLocation: `New York, USA`,
                description: `Web application for training on high risk works.`,
                client: `ThinkSafe Inc.`,
                website: `https://www.thinksafeinc.com`,
                clientImage: null
            },
            {
                image: `./images/presuntoinocente.jpg`,
                imageText: null,
                project: `Presunto Inocente`,
                projectLocation: `Madrid, Spain`,
                description: `Mobile application to generate written and legal consents to have sexual relations according to Spain Law. This app is only available in Spain and can be dowloaded on Android PlayStore`,
                client: `Lorenzo Pérez`,
                website: `https://play.google.com/store/apps/details?id=com.presuntoinocente.presuntoinocente&gl=ES`,
                clientImage: null
            },
            {
                image: `./images/tnt.png`,
                imageText: null,
                project: `TNT Comidas Rápidas`,
                projectLocation: `Cartago, Colombia`,
                description: `Web application for internal menu service. This app is not public and right now is used by TNT workers`,
                client: `Restaurante TNT Comidas Rápidas`,
                website: `https://www.facebook.com/profile.php?id=100070044764585`,
                clientImage: null
            }
        ],
        otherProjects: [
            {
                project: `Peekerz`,
                image: `./images/peekerz.png`,
                website: `https://play.google.com/store/apps/details?id=com.peekerzapp.peekerz`,
            },
            {
                project: `Prosegur`,
                image: `./images/prosegur.png`,
                website: ``,
            },
            {
                project: `Cooperación Española`,
                image: `./images/cooperacion.png`,
                website: ``,
            },
            {
                project: `Misión Vida`,
                image: `./images/misionvida.jpg`,
                website: ``,
            },
        ]
    }

    render() {
        return (
            <div className='mainContent'>
                <IGRTitle text={`Projects`}/>
                <Box sx={{ width: '100%', maxWidth: { xs: '80%', md: '800px' } }}>
                    <p style={{textAlign: 'center', margin: '10px 0'}}>
                        Here, you can find my recent projects working as freelance developer.
                    </p>
                    <Grid container spacing={1}>
                        {
                            this.state.projects.map((project, s) => {
                                return <Grid key={s} xs={12} md={12}>
                                    <Card sx={{margin: '10px 0'}}>
                                        <CardActionArea>
                                            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <img src={project.image} alt={project.project} height={100} />
                                            </div>
                                            <CardContent>
                                                <p className='cardTitle'>
                                                    {project.project}
                                                </p>
                                                <p className='cardSubtitle'>
                                                    {project.description}
                                                </p>
                                                <p className='cardSubtitle'>
                                                    Project location: {project.projectLocation}
                                                </p>
                                                <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <a href={project.website} target='_blank' className='websiteLink'>Website</a>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            })
                        }
                    </Grid>
                </Box>
            </div>
        )
    }
}