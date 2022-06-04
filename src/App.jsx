import Garden from "./Garden";
import Manifesto from "./Manifesto";
import React from 'react';
import "./app.scss";

import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/garden" element={<Garden />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </div>
      // <div className="App">
      //   <Garden />
      //     <div>
      //       <nav>
      //         <ul id="navigation">
      //           <li>
      //             <Link to="/garden">Garden</Link>
      //           </li>
      //           <li>
      //           <Link to="/manifesto">Manifesto</Link>
      //           </li>
      //         </ul>
      //       </nav>
      //     </div>
      //       <Routes>
      //         <Route exact path="/garden" element={<Garden />} />
      //         <Route path="/manifesto" element={<Manifesto />} />
      //       </Routes>
      //     </div>
            );
  }
}

export default App;
