import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import CarList from './Pages/CarList';
import Car from './Pages/Car';
import AddCar from './Pages/AddCar';
import NotFound from './Pages/NotFound';

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
                  <Route path="get/:id" element={<Car />} />

                  {/* Adding Page */}
                  <Route path="add" element={<AddCar />} />

              </Route>

              {/* Not-Found Page */}
              <Route path="*" element={<NotFound />} />

          </Routes>
      </>
  );
}

export default App;
