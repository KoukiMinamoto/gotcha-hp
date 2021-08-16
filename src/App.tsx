import { FC } from 'react';
import HeadCarousel from 'HeadCarousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => (
  <div className="App">
    <header className="App-header">
      <HeadCarousel />
    </header>
    <body>
      <div className="wrapper">
        <div className="box1">One</div>
        <div className="box2">
          <p>Two</p>
        </div>
        <div className="box3">
          <p>Three</p>
        </div>
      </div>
    </body>
  </div>
);

export default App;
