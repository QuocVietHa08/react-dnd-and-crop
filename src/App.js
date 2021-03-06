
import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './component/Home';
import DndComponent from './component/Dnd/DndComponent';
import CropImage from './component/crop/CropImage';


function App() {
  return (
    <div className="App">
      <h1>Select the route that you want </h1>
      <ul>
        <li><a href="/dnd"> drag and drop</a></li>
        <li><a href="/crop">crop image</a></li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="dnd" element={<DndComponent />} />
        <Route exact path="crop" element={<CropImage />} />
      </Routes>
    </div>
  );
}

export default App;
