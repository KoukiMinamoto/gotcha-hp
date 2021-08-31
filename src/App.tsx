import { FC, useEffect, useState } from 'react';
import HeadCarousel from 'HeadCarousel';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPanel from 'NavPanel';

const scrollAmount = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );

const App: FC = () => {
  // States
  const [isScrollUp, setScrollUp] = useState(false);

  const detectScrollUp = (): void => {
    if (scrollAmount() > 10) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', detectScrollUp);

    return (): void => document.removeEventListener('scroll', detectScrollUp);
  });

  return (
    <>
      <div className="back-ground"> </div>
      <HeadCarousel disapear={isScrollUp} />
      <NavPanel title="私たちについて" contents="hogehoge">
        <h2>私たちについて</h2>
        <p>私たちについて説明しますよー</p>
      </NavPanel>
    </>
  );
};

export default App;
