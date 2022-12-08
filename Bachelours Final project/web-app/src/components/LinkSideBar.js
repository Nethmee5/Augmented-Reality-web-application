import React from "react";
import {BrowseRouter as Router,Route} from 'react-router-dom';
import Switch from 'React';
import Sidebar from "./Sidebar";







const Home= () => {
    return <h1> dashboard</h1>
};
const Dashboard = () => {
    return <h1> dashboard</h1>
};

const Projects = () => {
    return <h1> dashboard</h1>
};
const ProjectSuggestion = () => {
    return <h1> dashboard</h1>
};
const ProjectApprove = () => {
    return <h1> dashboard</h1>
};
const ProjectSupervision = () => {
    return <h1> dashboard</h1>
};
const Meetings = () => {
    return <h1> dashboard</h1>
};
const Contracts = () => {
    return <h1> dashboard</h1>
};
const FinishedProjects= () => {
    return <h1> dashboard</h1>
};

const LinkSideBar= (props) => {
    return(
    <div className="Link-Menus">
        <Router>
            <Sidebar/>

            <Switch>
                <Route path={'/Home'}>
                    <Home/>

                </Route>
                <Route path={'/Dashboard'}>
                    <Dashboard/>
                    
                </Route>
                <Route path={'/Projects'}>
                    <Projects/>
                    
                </Route>
                <Route path={'/Projects/ProjectSuggestion'}>
                    <ProjectSuggestion/>
                    
                </Route>
                <Route path={'/Projects/ProjectApprove'}>
                    <ProjectApprove/>
                    
                </Route>
                <Route path={'/Projects/ProjectSupervision'}>
                    <ProjectSupervision/>
                    
                </Route>
                <Route path={'/Meetings'}>
                    <Meetings/>
                    
                </Route>
                <Route path={'/Contracts'}>
                    <Contracts/>
                    
                </Route>
                <Route path={'/FiishedProjects'}>
                    <FinishedProjects/>
                    
                </Route>
            </Switch>
            </Router>

    </div>
)

}
export default LinkSideBar;

