import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa';


function TenantCard(){
      // use {} add component from db for future developmemt
      const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
    return(
        <div className='pro-card'>
        <Card style={{ width: '25vw' }}>
            {/* Carousels, use mapping function with db data */}
            <Carousel interval={null}> 
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/house1.jpeg`)} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/detail1.jpeg`)} />
            </Carousel.Item>
            <Carousel.Item>
              <Card.Img variant="top" src={require(`../imgs/detail2.jpeg`)} />
            </Carousel.Item>
        </Carousel>

      <Card.Body>
        <Card.Title>Sample Property Name
        <Button  onClick={toggleLike} className="like-button">
            {liked ? <FaHeart color="red" /> : <FaRegHeart />}
          </Button>
        </Card.Title>
        <Card.Text>
         Address: Property address
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Some features: a, b, c</ListGroup.Item>
        <ListGroup.Item>Some amentites: d, e, f</ListGroup.Item>
        <ListGroup.Item>Some Safety: g, h, i</ListGroup.Item>
      </ListGroup>
    </Card>

            
        </div>
    )
}
export default TenantCard