import React from 'react';
import { HashRouter ,Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Header from "./pages/Header";
import './style/style.css'





function App() {

  


  return (
    <HashRouter>
        <Header />
        <Routes>
                <Route index element={<Home />} />
                <Route path="destination" element={<Destination />} />
                <Route path="crew" element={<Crew />} />
                <Route path="technology" element={<Technology />} />
        </Routes>
    </HashRouter>
  );
}


export default App;