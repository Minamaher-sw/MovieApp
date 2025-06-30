// src/components/ReasonCard.js
import { Card } from 'react-bootstrap';
import './ReasonCard.css'; // We'll keep a small CSS file for custom styles not covered by Bootstrap

// Import your chosen icons from react-icons
// You might need to adjust the specific icon names based on what you find visually closest in react-icons


const ReasonCard = ({ icon: IconComponent, title, description }) => {
  return (
    // React Bootstrap Card component
    <Card className="reason-card h-100 border-0 shadow-sm text-start">
      <Card.Body className="d-flex flex-column align-items-start p-4">
        <div className="reason-card-icon-wrapper mb-4">
          {IconComponent && <IconComponent className="reason-card-icon" />}
        </div>
        <Card.Title as="h3" className="reason-card-title mb-3">
          {title}
        </Card.Title>
        <Card.Text className="reason-card-description">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReasonCard;