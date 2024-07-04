import { faHome, faList, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav } from 'react-bootstrap';
import "./Sidebar.css";

const Sidebar = ({ onSelectMenuItem }) => {
  const handleMenuItemClick = (menuItem) => {
    onSelectMenuItem(menuItem);
  };

  return (
  
    <Nav className="flex-column sidebarcolour h-100">
      <Nav.Link onClick={() => handleMenuItemClick('settings')} className='text-light'> <FontAwesomeIcon icon={faHome} className='mx-1'/>Home</Nav.Link>
      <Nav.Link onClick={() => handleMenuItemClick('ticket')} className='text-light'><FontAwesomeIcon icon={faTicket} className='mx-1'/>Ticket</Nav.Link>
      <Nav.Link onClick={() => handleMenuItemClick('reports')} className='text-light'><FontAwesomeIcon icon={faList} className='mx-1'/>Status</Nav.Link>
      <Nav.Link onClick={() => handleMenuItemClick('summary')} className='text-light'><FontAwesomeIcon icon={faList} className='mx-1'/>Ticket Summary</Nav.Link>
    </Nav>
 
  );
}

export default Sidebar;
