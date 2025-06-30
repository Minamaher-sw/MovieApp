import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'; // optional for extra Netflix styles

function FAQ({ eventKey, header, children }) {
    return (
        <Accordion.Item eventKey={eventKey} className="faq-item border-0 p-2 mb-2">
            <Accordion.Header className="faq-header">{header}</Accordion.Header>
            <Accordion.Body className="faq-body">
                {children}
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default FAQ;