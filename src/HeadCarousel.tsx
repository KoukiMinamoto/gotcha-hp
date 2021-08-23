import { VFC } from 'react';
import headerLogo from './svg/header_logo.svg';
// import img1 from './img/head1.jpg';
// import img2 from './img/head2.jpg';
// import img3 from './img/head3.jpg';

const HeadCarousel: VFC = () => (
  // const [_index, setIndex] = useState(0);

  // const handleSelect = (
  //   selectedIndex: number,
  //   _e: Record<string, unknown> | null,
  // ) => {
  //   setIndex(selectedIndex);
  // };
  <>
    <div className="carousel">
      <img className="header-logo" src={headerLogo} alt="header_logo" />
      <div className="box1" />
      <div className="scroll-up"> Scroll Up </div>
    </div>
  </>
);

export default HeadCarousel;
