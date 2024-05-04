import React from "react";
import { Card, Col, Button} from "react-bootstrap";
import noimg from "./asset/noimg.jpeg";

function Cards({ author, description, title, url, image }) {
  return (
    <>
      <Col lg={3} md={6} sm={12} className="mb-3 mt-3">
        <Card
          style={{ width: "20rem", height: "30rem", borderRadius: "20px" }}
          className="shadow bg-dark text-light"
        >
          {image ? (
            <Card.Img
              variant="top"
              src={image}
              className="img-fluid"
              style={{ height: "11rem", borderRadius: "20px" }}
            />
          ) : (
            <Card.Img
              variant="top"
              src={noimg}
              className="img-fluid"
              style={{ height: "11rem", borderRadius: "20px" }}
            />
          )}
          <Card.Body>
            <Card.Title className="txt-bold">
              {title.slice(0, 20)}...
            </Card.Title>
            {description ? (
              <Card.Text>{description.slice(0, 50)}...</Card.Text>
            ) : (
              <Card.Text className="text-danger">
                Sorry But there is no description about the news
              </Card.Text>
            )}
            <Button variant="success" className="rounded-pill " href={url}>
              See More
            </Button>
            {author ? (
              <Card.Text className="ms-1">{author}</Card.Text>
            ) : (
              <Card.Text className="ms-1">null</Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Cards;
