import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import CarList from './Pages/CarList';

function App() {
  return (
      <>
          {/* Main Router Tag */}
          <Routes>
              {/* Layout Tag */}
              <Route path="/" element={<Layout />} >
                  {/* Page Tags */}

                  {/* Index Page / Navigation */}
                  <Route path="" element={<Home />} />

                  {/* Listing Page */}
                  <Route path="get/list-all" element={<CarList />} />

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
