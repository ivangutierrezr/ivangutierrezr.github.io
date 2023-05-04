import React, {Component} from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import IGRTitle from '../../components/IGRTitle/IGRTitle'

import './SkillsView.css'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1)
}));

export default class SkillsView extends Component {
    state = {
        skills: [
            {
                title: `FRONTEND DEVELOPMENT`,
                items: [
                    `HTML5`,
                    `CCS3`,
                    `SASS`,
                    `JavaScript`,
                    `ReactJS`,
                    `React Native`,
                    `Android`,
                ]
            },
            {
                title: `BACKEND DEVELOPMENT`,
                items: [
                    `Java`,
                    `Python`,
                    `NodeJS`,
                    `GraphQL`,
                    `RabbitMQ`,
                    `Express`,
                    `PHP`,
                ]
            },
            {
                title: `FRAMEWORKS`,
                items: [
                    `AngularJS`,
                    `Meteor`,
                    `Django`,
                ]
            },
            {
                title: `DATABASES`,
                items: [
                    `MySQL`,
                    `PostgreSQL`,
                    `MongoDB`
                ]
            },
            {
                title: `INFRASTRUCTURE`,
                items: [
                    `Linux`,
                    `AWS`,
                    `DigitalOcean`,
                    `Firebase`,
                    `Heroku`,
                    `Google API`,
                ]
            },
            {
                title: `DEVELOPMENT TOOLS`,
                items: [
                    `Linux `,
                    `Docker`,
                    `Git`,
                    `Bitbucket`,
                    `Trello`,
                    `Slack`,
                ]
            },
            {
                title: `LANGUAGES`,
                items: [
                    {
                        language: `Spanish`,
                        values: [
                            {
                                item: `Reading`,
                                value: `Native`
                            },
                            {
                                item: `Writing`,
                                value: `Native`
                            },
                            {
                                item: `Hearing`,
                                value: `Native`
                            },
                            {
                                item: `Speaking`,
                                value: `Native`
                            }
                        ]
                    },
                    {
                        language: `English`,
                        values: [
                            {
                                item: `Reading`,
                                value: `High`
                            },
                            {
                                item: `Writing`,
                                value: `High`
                            },
                            {
                                item: `Hearing`,
                                value: `High`
                            },
                            {
                                item: `Speaking`,
                                value: `Medium`
                            }
                        ]
                    }
                ]
            },
        ]
    }

    render() {
        const titleStyle = {
            width: '100%',
            textAlign: 'center',
            fontWeight: 500,
            fontSize: '24px',
            margin: '10px 0'
        }
        const subtitleStyle = {
            width: '100%',
            textAlign: 'left',
            fontWeight: 500,
            fontSize: '20px',
            margin: '10px 0'
        }
        return (
            <div className='mainContent'>
                <IGRTitle text={`Skills & Knowledge`}/>
                <Box sx={{ width: '100%', maxWidth: { xs: '80%', md: '800px' } }}>
                    <Grid container spacing={{xs: 1, md: 2}}>
                        {
                            this.state.skills.map((skill, s) => {
                                return <Grid key={s} xs={12} md={skill.title == `LANGUAGES` ? 12 : 6}>
                                    <Item>
                                        <span style={titleStyle}>
                                            {skill.title}
                                        </span>
                                        {
                                            skill.title == `LANGUAGES` ? <Grid container spacing={{xs: 1, md: 2}}>
                                                {
                                                    skill.items.map((item, i) => {
                                                        return <Grid xs={12} md={6}>
                                                            <Item key={i}>
                                                                <span style={subtitleStyle}>
                                                                    {item.language}
                                                                </span>
                                                                <ul>
                                                                    {
                                                                        item.values.map((value, v) => {
                                                                            return <li key={v}>{value.item}: {value.value}</li>
                                                                        })
                                                                    }
                                                                </ul>
                                                            </Item>
                                                        </Grid>
                                                    })
                                                }
                                            </Grid> : <ul>
                                                {
                                                    skill.items.map((item, i) => {
                                                        return <li key={i}>{item}</li>
                                                    })
                                                }
                                            </ul>
                                        }
                                    </Item>
                                </Grid>
                            })
                        }
                    </Grid>
                </Box>
            </div>
        )
    }
}