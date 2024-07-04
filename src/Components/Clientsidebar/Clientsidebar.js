// import React from 'react'
// import "./Clientsidebar.css"
// import { faHome, faList, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Nav } from 'react-bootstrap';

// const Clientsidebar = ({ onSelectMenuItem }) => {
//   const handleMenuItemClick = (menuItem) => {
//     onSelectMenuItem(menuItem);
//   };

//   return (
//     <Nav className="flex-column sidebarcolour h-100">
//       <Nav.Link onClick={() => handleMenuItemClick('home')} className='text-light'> <FontAwesomeIcon icon={faHome} className='mx-1'/>Home</Nav.Link>
//       <Nav.Link onClick={() => handleMenuItemClick('ticket')} className='text-light'><FontAwesomeIcon icon={faTicket} className='mx-1'/>Ticket</Nav.Link>
//       <Nav.Link onClick={() => handleMenuItemClick('reports')} className='text-light'><FontAwesomeIcon icon={faList} className='mx-1'/>Status</Nav.Link>
//       <Nav.Link onClick={() => handleMenuItemClick('reports')} className='text-light'><FontAwesomeIcon icon={faUser} className='mx-1'/>Profile</Nav.Link>
//     </Nav>
//   );
// }

// export default Clientsidebar;



import React from 'react';
import "./Clientsidebar.css";
import { faHome, faList, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Navbar } from 'react-bootstrap';

const Clientsidebar = ({ onSelectMenuItem }) => {
  const handleMenuItemClick = (menuItem) => {
    onSelectMenuItem(menuItem);
  };

  return (
    <Navbar expand="md" className="flex-md-column sidebarcolour">
      <Navbar.Toggle aria-controls="sidebar-collapse" />
      <Navbar.Collapse id="sidebar-collapse">
        <Nav className="flex-md-column flex-row sidebar-nav">
          <Nav.Link onClick={() => handleMenuItemClick('home')} className='text-light'><FontAwesomeIcon icon={faHome} className='mx-1'/>Home</Nav.Link>
          <Nav.Link onClick={() => handleMenuItemClick('ticket')} className='text-light'><FontAwesomeIcon icon={faTicket} className='mx-1'/>Ticket</Nav.Link>
          <Nav.Link onClick={() => handleMenuItemClick('status')} className='text-light'><FontAwesomeIcon icon={faList} className='mx-1'/>Status</Nav.Link>
          <Nav.Link onClick={() => handleMenuItemClick('profile')} className='text-light'><FontAwesomeIcon icon={faUser} className='mx-1'/>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Clientsidebar;
