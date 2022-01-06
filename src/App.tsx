import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {nav} from './data/Navigation';



function App() {
    
    return (
      <BrowserRouter>
        <div className="container">
          <div className="sidebar">
            <nav>
              <ul>
                {nav.map((elem) => (
                  <li key={elem.url}>
                    <Link to={elem.url}>{elem.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="content">
            <Routes>
                {nav.map((elem) => (
                  <Route key={elem.url} path={elem.route} element={elem.element}/>
                ))}
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
