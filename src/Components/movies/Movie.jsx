
import  { useEffect, useState } from 'react';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Card, Button, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { instance } from '../../instant/instance';
import { GrPrevious, GrNext } from "react-icons/gr";
// import { debounce } from 'lodash';
import './Movie.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, increment } from '../../store/slices/favorite';
import { productAction } from '../../store/slices/product';

function Movie() {
  console.log("hi")
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.sliceProduct.products);
  const loading = useSelector((state) => state.sliceProduct.loading);
  const [movies, setMovies] = useState([]);
  const [counter, setCounter] = useState(1);
  const [pages] = useState(500);
  const [input, setInput] = useState({ value: "" });
  const navigate = useNavigate();
  const favorite = useSelector((state) => state.sliceFavorite.favorite);
useEffect(() => {
  dispatch(productAction(counter));
}, [counter]);

  useEffect(() => {
    if (productData) {
      setMovies(productData);
    }
  }, [productData]);

  // const fetchMovies = async () => {
  //   setLoading(true);
  //   try {
  //     const endpoint = input.value.trim().length > 0 ? "/search/movie" : "/movie/popular";
  //     const res = await instance.get(endpoint, {
  //       params: {
  //         api_key: "2a71efe2358e73c9d5eb7fb1e08a1970",
  //         query: input.value.trim(),
  //         page: counter
  //       }
  //     });
  //     setMovies(res.data.results);
  //     setPages(res.data.total_pages);
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   setLoading(false);
  // };

  // const debouncedSearch = useCallback(debounce(fetchMovies, 500), [input.value, counter]);

  // useEffect(() => {
  //   debouncedSearch();
  // }, [input.value, counter]);

  const validateInput = (ev) => {
    setInput({ value: ev.target.value });
    if (ev.target.value.trim().length === 0) setCounter(1);
  };
  const data = useSelector((state)=>state.sliceProduct.products)
  console.log(data)

  
  const changeFavorite = (obj) => {
    if (!favorite.some(movie => movie.id === obj.id)) {
      dispatch(addFavorite(obj));
      dispatch(increment());
    }
  };

  return (
    <div className="bg-dark min-vh-100 py-4">
      <Container>
        <form className='d-flex justify-content-center mb-4' onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control w-50 rounded-start"
            placeholder="Search movies..."
            value={input.value}
            onChange={validateInput}
          />
          <Button variant="danger" className="rounded-end">Search</Button>
        </form>

        {loading ? (
          <div className="text-center text-light my-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <div className="row g-4">
            {movies.map((movie) => (
              <div className="col-md-4 col-lg-3" key={movie.id}>
                <Card className="bg-black text-light border-0 shadow card-hover overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                    className="rounded-top card-img-hover"
                    style={{ height: '350px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="fs-6 text-danger card-title-hover">{movie.original_title}</Card.Title>
                      <Card.Text className="text-light small line-clamp">
                        {movie.overview}
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <Button
                        variant="danger"
                        size="sm"
                        className="rounded-pill btn-hover"
                        onClick={() => navigate(`/main/details/${movie.id}`)}
                      >
                        show Details
                      </Button>
                      <Button variant="outline-light btn-hover" size="sm" onClick={() => changeFavorite(movie)}>
                        <MdOutlineFavoriteBorder
                          style={{
                            color: favorite.some(f => f.id === movie.id) ? 'tomato' : 'white',
                            fontSize: '1.5rem',
                          }}
                        />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Button
            variant="light"
            disabled={counter <= 1}
            onClick={() => setCounter(prev => Math.max(prev - 1, 1))}
          >
            <GrPrevious />
          </Button>
          <Button
            variant="light"
            disabled={counter >= pages}
            onClick={() => setCounter(prev => Math.min(prev + 1, pages))}
          >
            <GrNext />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Movie;
