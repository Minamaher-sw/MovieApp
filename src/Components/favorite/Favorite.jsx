
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import { Card, Button, Container } from 'react-bootstrap';
import { removeFavorite, decrement } from '../../store/slices/favorite.js';
import './favorite.css';

function Favorite() {
    const favorite = useSelector((state) => state.sliceFavorite.favorite);
    const dispatch = useDispatch();

    const delete_ = (obj) => {
        dispatch(removeFavorite(obj.id));
        dispatch(decrement());
    };

    return (
        <Container className="py-4">
        <h2 className="text-light mb-4">My Favorites</h2>
        <div className="row g-4">
            {favorite.map((obj) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={obj.id}>
                <Card className="favorite-card shadow-sm border-0 bg-dark text-light">
                <div className="position-relative">
                    <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                    alt={obj.original_title}
                    className="favorite-img"
                    />
                </div>

                <Card.Body className='position-relative top-0'>
                    <Card.Title className="fs-6 fw-bold">{obj.original_title}</Card.Title>
                    <Card.Text className="text-muted small line-clamp">
                    {obj.overview}
                    </Card.Text>
                    <Button
                        variant="danger"
                        className="delete-btn position-absolute top-0 end-0 m-2 p-3 "
                        onClick={() => delete_(obj)}
                    >
                    <MdDeleteOutline size={20}  />
                    </Button>
                </Card.Body>
                </Card>
            </div>
            ))}
            {favorite.length === 0 && (
            <p className="text-center text-secondary">No favorites added yet.</p>
            )}
        </div>
        </Container>
    );
}

export default Favorite;
