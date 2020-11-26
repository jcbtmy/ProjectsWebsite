import React from 'react';

import {
        Navbar,
        Nav,
        NavDropdown,
        NavbarBrand,
        NavItem,
    } from 'react-bootstrap';

import {NavLink} from 'react-router-dom';

import {LinkContainer} from 'react-router-bootstrap';

import {GitLink} from "./GitLink";

const ProjectNavLink = (props) => {

    return(
        <div className="dropdown-item">
            <NavLink to={props.path} className="NavLink">        
                {props.text}
            </NavLink> 
            <GitLink href={props.githref} />
        </div>
    );
}


const BootstrapNavBar = (props) => {

        const routes = props.routes;

        return (
            <div id="nav">
                <Navbar bg="primary" variant="dark" sticky="top" className="justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <LinkContainer to="/">
                <NavbarBrand >Jacob Toomey</NavbarBrand>
                </LinkContainer>
                    <Nav className="mr-auto">
                        <NavDropdown  bg='primary' title="Projects"  id="basic-nav-dropdown" >
                        {
                                routes.map( (route, i) => {
                                    return(
                                            <div key={route.name}>
                                                <ProjectNavLink path={route.path} text={route.name} githref={route.githref}/>
                                                { (i < routes.length -1 ) && <NavDropdown.Divider />}
                                            </div>
                                        );
                                })
                            }
                        
                        </NavDropdown>
                        <LinkContainer to="/Contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );

}


export default BootstrapNavBar;