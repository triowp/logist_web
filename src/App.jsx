import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { routes } from './routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;