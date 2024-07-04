import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

import TicketPage from '../TicketPage/TicketPage';
import Ticketstatus from '../TicketStatus/Ticketstatus';
import TicketSummary from '../TicketSummary/TicketSummary';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('ticket'); // Initial selected menu item
  const { id } = useParams()
  const decoded = atob(id)

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'ticket':
        return <TicketPage />;
      case 'reports':
        return <Ticketstatus />;
      case 'summary':
        return <TicketSummary />;

      default:
        return null;
    }
  };

  return (
    <Container fluid>
      <Row className='h-100'>
        <Col md={2}>
          <Sidebar onSelectMenuItem={setSelectedMenuItem} />
        </Col>
        <Col md={10}>
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
