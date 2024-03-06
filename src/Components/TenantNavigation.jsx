import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaUserCircle} from 'react-icons/fa'; 
import { GiNightSleep } from "react-icons/gi";
import MainSearchBar from './MainSearchBar';

function TenantNavigation(){
    return (
        <div>
        <Navbar className='bar'>
          <Container>
          <Nav className='justify-content-front bar'>
            <Navbar.Brand href='/'><GiNightSleep color='#08415c' size={30}/></Navbar.Brand>
            </Nav>
           <MainSearchBar/>

            <Nav className='justify-content-end barcontent'>
           
            <NavDropdown title={<FaUserCircle size={30}/>} className='barcontent'>
                <NavDropdown.Item className='barcontent' href="/wishlist">Wishlist</NavDropdown.Item>
                <NavDropdown.Item className='barcontent' href="/settingL">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  className='barcontent' href="/signup">Sign out</NavDropdown.Item>
              </NavDropdown>


            </Nav>
          </Container>
        </Navbar>
       
      </div>
      );
    };
    
export default TenantNavigation;