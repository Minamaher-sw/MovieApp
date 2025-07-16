import {  Container ,Row, Col, Accordion} from "react-bootstrap"
import Hero from "./hero/HeroSection"
import Footer from "./footer/Footer"
import { instance } from '../../instant/instance';
import { useEffect, useState } from 'react';
import Trending from "./trending/Trending";
import ReasonCard from "./Card/DCard";
import { BsDisplay, BsCloudDownload, BsStars, BsPeople } from 'react-icons/bs';
import FAQ from "./freqquestion/FAQ";
import { NavLink } from "react-router-dom";
const reasonsData = [
    {
        icon: BsDisplay,
        title: 'Enjoy on your TV',
        description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    },
    {
        icon: BsCloudDownload,
        title: 'Download your series to watch offline',
        description: 'Save your favourites easily and always have something to watch.',
    },
    {
        icon: BsStars,
        title: 'Watch everywhere',
        description: 'Stream unlimited films and series on your phone, tablet, laptop and TV.',
    },
    {
        icon: BsPeople,
        title: 'Create profiles for children',
        description: 'Send children on adventures with their favourite characters in a space made just for them – free with your membership.',
    },
];

const netflixFAQs = [
  {
    eventKey: "0",
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
  },
  {
    eventKey: "1",
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts."
  },
  {
    eventKey: "2",
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."
  },
  {
    eventKey: "3",
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    eventKey: "4",
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch"
  }]
function Home(){
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        try {
        const res = await instance.get("/movie/popular", {
            params: {
            api_key: "2a71efe2358e73c9d5eb7fb1e08a1970",
            page: 1
            }
        });
        setMovies(res.data.results);
        } catch (err) {
        console.error(err);
        }
    };

    useEffect(()=>{
    fetchMovies()
    },[])
    return<>
         <NavLink
                      to="/main/profile"
                      className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                    >
                      profile
        </NavLink>
        <Hero/>
        <section className="reasons-section position-relative bg-dark"> {/* py-5 for vertical padding, bg-dark for background */}
            <h2 className="reasons-heading  position-absolute m-3 top-0 start-0 z-2 text-light">Trending Films</h2> {/* text-start for left align, mb-5 for margin-bottom, text-light for heading color */}
            <Trending images={movies} />
        </section>
        <section className="reasons-section py-5 bg-dark"> {/* py-5 for vertical padding, bg-dark for background */}
            <Container> {/* Bootstrap Container for responsive width */}
                <h2 className="reasons-heading text-start mb-5 text-light">More reasons to join</h2> {/* text-start for left align, mb-5 for margin-bottom, text-light for heading color */}
                    <Row xs={1} md={2} lg={4} className="g-4"> {/* Responsive grid with gutters */}
                    {reasonsData.map((reason, index) => (
                        <Col key={index} className="d-flex"> {/* d-flex to make columns flex containers for consistent card height */}
                        <ReasonCard
                            icon={reason.icon}
                            title={reason.title}
                            description={reason.description}
                        />
                        </Col>
                    ))}
                    </Row>
            </Container>
        </section>
        <Container >
            <h2 className="reasons-heading text-start mb-5 text-light">Frequency Question</h2>
            <Accordion >
            {netflixFAQs.map((reason) => (
                            <FAQ
                                eventKey={reason.eventKey}
                                header={reason.question}
                                children={reason.answer}
                            />
            ))}
            </Accordion>
        </Container>
        <Footer/>

    </>
}

export default Home