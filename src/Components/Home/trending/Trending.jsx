
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";

const Trending = ({ images }) => {
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <Container fluid className="px-0">
            <Carousel fade interval={4000} indicators={true}>
                {images.map((img, index) => (
                <Carousel.Item key={index} className="position-relative">
                    <img
                    className="d-block w-100"
                    src={`https://image.tmdb.org/t/p/original/${img.backdrop_path}`}
                    alt={img.title || img.name}
                    style={{ maxHeight: "80vh", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
                    <Row className="justify-content-start">
                        <Col md={8}>
                        <h3>{img.title || img.name}</h3>
                        <p className="d-none d-md-block">{img.overview}</p>
                        <Button variant="danger">Watch Now</Button>
                        </Col>
                    </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </Container>
  );
};

export default Trending;
