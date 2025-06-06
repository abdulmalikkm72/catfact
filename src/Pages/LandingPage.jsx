import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Components/ExampleCarouselImage';


function LandingPage() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='https://th.bing.com/th/id/OIP.siHDPQh5-HXjITrgw5NHewHaFg?rs=1&pid=ImgDetMain' />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='https://cdn.mos.cms.futurecdn.net/TDxgMnN2D4kVouTgstEPYE.jpg' />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage imageUrl='https://th.bing.com/th/id/OIP.8Rmh5K2_EEG0rHRsOSnJAAHaE8?rs=1&pid=ImgDetMain' />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default LandingPage
