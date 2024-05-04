import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './asset/Business-logo.png'


function Post() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFilteredData] = useState([]);

    // const apikey = "db0f4d490365463ebf1a58f2cd733bc5"

    useEffect(() => {
        axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`)
            .then(response => {
                setNews(response.data.articles)
                console.log(response.data.articles);
            })
            .catch(error => {
                console.error('error fetching data: ', error);
            });

    }, []);


    useEffect(() => {
        const filtered = news.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered)

    }, [searchQuery, news]);


    return (
        <>
            {/* <Container className="bg-dark"> */}
                <InputGroup className="mt-2 text-center w-25 mb-2" >
                    <Form.Control
                        placeholder="Search by Title.."
                        aria-label="Username"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </InputGroup>

                <Card className="bg-black">
                    <Card.Body>
                        <Card.Img variant="top" style={{
                            background: 'red', padding: '5px', width: '50rem', height: '350px', display: 'block',
                            marginLeft: 'auto', marginRight: 'auto'
                        }} src={logo} />
                    </Card.Body>
                </Card>

            {/* </Container> */}

            <Container className="">
                <Row>
                    {filtered.map((item) => (

                                <Cards
                                    key={item.title}
                                    author={item.author}
                                    content={item.content}
                                    description={item.description}
                                    publishedAt={item.publishedAt}
                                    title={item.title}
                                    url={item.url}
                                    image={item.urlToImage}
                                />

                    ))}
                </Row>
            </Container>    
        </>
    )
}

export default Post;