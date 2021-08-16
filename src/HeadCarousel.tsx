import { VFC, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img/head1.jpg';
import img2 from './img/head2.jpg';
import img3 from './img/head3.jpg';

const HeadCarousel: VFC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: number,
    _e: Record<string, unknown> | null,
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="head-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeadCarousel;
