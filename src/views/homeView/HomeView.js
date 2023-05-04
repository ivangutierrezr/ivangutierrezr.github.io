import React, {Component} from 'react';
import IGRNav from '../../components/IGRNav/IGRNav'
import IGRFooter from '../../components/IGRFooter/IGRFooter';

import './HomeView.css'
import ProfileView from '../profileView/ProfileView';
import SkillsView from '../skillsView/SkillsView';
import ProjectsView from '../projectsView/ProjectsView';

export default class HomeView extends Component {
    state = {
        currentView: "profile"
    }

    changeView = (view) => {
        this.setState({
            currentView: view
        })
    }

    render() {
        return (
            <div className='HomeViewContent'>
                <IGRNav changeView={this.changeView}/>
                {
                    this.state.currentView == "profile" && <ProfileView />
                }
                {
                    this.state.currentView == "skills" && <SkillsView />
                }
                {
                    this.state.currentView == "projects" && <ProjectsView />
                }
                <IGRFooter />
            </div>
        )
    }
}