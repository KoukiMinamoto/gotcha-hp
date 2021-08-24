import { VFC } from 'react';

import headerLogo from './svg/header_logo.svg';
import style from './styles/HeadCarousel.module.scss';
// import img1 from './img/head1.jpg';
// import img2 from './img/head2.jpg';
// import img3 from './img/head3.jpg';

const HeadCarousel: VFC<{ disapear: boolean }> = (props) => {
  // const [_index, setIndex] = useState(0);

  // const handleSelect = (
  //   selectedIndex: number,
  //   _e: Record<string, unknown> | null,
  // ) => {
  //   setIndex(selectedIndex);
  // };
  const { disapear } = props;

  return (
    <>
      <div className={disapear ? style['carousel-disapear'] : style.carousel}>
        <img className={style.headerLogo} src={headerLogo} alt="header_logo" />
        <div className={style.scrollIcon}>
          <div className={style.box1} />
          <div className={style['scroll-up']}> Scroll Up </div>
        </div>
      </div>
    </>
  );
};

export default HeadCarousel;
