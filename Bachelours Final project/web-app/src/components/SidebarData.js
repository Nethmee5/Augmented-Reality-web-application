import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConstructionIcon from '@mui/icons-material/Construction';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WorkIcon from '@mui/icons-material/Work';


export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <HomeIcon/>,
        cName:'nav-text'
    },

    {
    title: 'Dashboard',
    path: 'Dashboard',
    icon: <DashboardIcon/>,
    cName:'nav-text'
    },

    {
    title: 'Projects',
    path: '/ApproveProposals',
    icon: <ConstructionIcon/>,
    cName:'nav-text'
    },

    {   
    title: 'Meetings',
    path: '/Chatbox',
    icon: <GroupsIcon/>,
    cName:'nav-text'

    },
{
    title: 'Contracts',
    path: '/Contracts',
    icon: <WorkIcon/>,
    cName:'nav-text'
},

{

    title: 'Finished Projects',
    path: '/FinishedProjects',
    icon: <CheckCircleOutlineIcon/>,
    cName:'nav-text'
},


]