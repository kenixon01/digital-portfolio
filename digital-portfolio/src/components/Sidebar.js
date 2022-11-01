import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBIcon
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ minHeight:'100vh' }}>
      <CDBSidebar textColor="#333" backgroundColor="#eaeaea" toggled="false">
        <CDBSidebarHeader prefix={<i className="fa fa-bars"/>} >
            <img src={require('../media/me3.jpg')} style={{ marginBottom:'20px', height:'230px', display:'block', margin:'auto auto',width:'auto', 
            borderRadius:'40%'}}/>
                    
            <br/>Khamilah Enjoli Nixon
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content" >
          <CDBSidebarMenu>
            <NavLink exact to="/digital-portfolio" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home" style={{ color:'black' }}>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/skills" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="hammer" style={{ color:'black' }}>Skills</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/education" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="school" style={{ color:'black' }}>Education</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/experience" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="laptop" style={{ color:'black' }}>Experience</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note" style={{ color:'black' }}>Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/accomplishments" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="trophy" style={{ color:'black' }}>Accomplishments</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" style={{ color:'black' }}>About Me</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/digital-portfolio/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="envelope" style={{ color:'black' }}>Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',display:'flex', flexWrap:'wrap', justifyContent:'center', gap: '20px'
            }}
          >
            <CDBIcon fab icon="linkedin" size="lg" style={{ color:'#217cde'}}/>
            <CDBIcon fab icon="github" size="lg" style={{ color:'#071a2e' }}/>
            <CDBIcon fab icon="discord" size="lg" style={{ color:'#666CC9' }}/>
            <CDBIcon fab icon="stack-overflow" size="lg" style={{ color:'#D77628' }}/>
            <CDBIcon fab icon="reddit" size="lg" style={{ color:'#E84E17' }}/>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;