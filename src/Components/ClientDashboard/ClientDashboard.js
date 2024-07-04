import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TicketPage from '../TicketPage/TicketPage';
import Ticketstatus from '../TicketStatus/Ticketstatus';
import Clientsidebar from '../Clientsidebar/Clientsidebar';
import Home from '../Home/Home';
import { useParams } from 'react-router-dom';

const ClientDashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('ticket'); // Initial selected menu item
  const { id } = useParams()
  const decoded = atob(id)
  // console.log(id, atob(id))

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "home":
        return <Home />
      case 'ticket':
        return <TicketPage />;
      case 'reports':
        return <Ticketstatus />;
      default:
        return null;
    }
  };
  return (
    <Container fluid>
      <Row className='h-100'>
        <Col md={3}>
          {/* <Sidebar onSelectMenuItem={setSelectedMenuItem} /> */}
          <Clientsidebar onSelectMenuItem={setSelectedMenuItem} />
        </Col>
        <Col md={9}>
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
}

export default ClientDashboard;

