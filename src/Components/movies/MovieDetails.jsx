import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button, Badge, Spinner, Container } from "react-bootstrap";
import { instance } from "../../instant/instance";

function MovieDetails() {
  const { id } = useParams();
  const [prdID, setPrdID] = useState(parseInt(id));
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchMovie() {
    setLoading(true);
    try {
      const res = await instance.get(`/movie/${prdID}`, {
        params: {
          api_key: "2a71efe2358e73c9d5eb7fb1e08a1970",
        },
      });
      setMovie(res.data);
    } catch (error) {
      console.error("Failed to fetch movie", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, [prdID]);

  const onNext = () => {
    setPrdID(prdID + 1);
  };

  const onPrev = () => {
    if (prdID > 1) {
      setPrdID(prdID - 1);
    }
  };

  return (
    <Container className="py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <Spinner animation="border" variant="danger" />
            </div>
          ) : (
            <Card className="bg-dark text-light shadow-lg border-0 rounded-4">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-top-4"
              />
              <Card.Body className="p-4">
                <Card.Title className="h4 fw-bold mb-3 text-danger">
                  {movie.original_title}
                </Card.Title>
                <Card.Text className="text-light small" style={{ lineHeight: "1.8" }}>
                  {movie.overview}
                </Card.Text>
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <Badge bg="danger" className="p-2">
                    ⭐ {movie.vote_average}
                  </Badge>
                  <Button variant="danger" className="rounded-pill px-4 fw-bold">
                    Watch Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Button
              variant="secondary"
              onClick={onPrev}
              disabled={prdID <= 1}
              className="rounded-pill px-3 fw-bold"
            >
              ⬅ Previous
            </Button>
            <Button
              variant="danger"
              onClick={onNext}
              className="rounded-pill px-3 fw-bold"
            >
              Next ➡
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default MovieDetails;
