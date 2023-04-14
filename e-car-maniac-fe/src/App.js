import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <>
          {/* Main Router Tag */}
          <Routes>
              {/* Layout Tag */}
              <Route path="/" element="" >
                  {/* Page Tags */}

                  {/* Index Page / Navigation */}
                  <Route path="" element="" />

                  {/* Listing Page */}
                  <Route path="get/list-all" element="" />

                  {/* Id Specific Page */}
                  <Route path="get/:id" element="" />

                  {/* Adding Page */}
                  <Route path="add" element="" />

                  {/* Not-Found Page */}
                  <Route path="*" element="" />
              </Route>
          </Routes>
      </>
  );
}

export default App;
