import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navber from './Component/Navber/Navber';
import OrderReview from './Component/OrderReview/OrderReview';
import Shop from './Component/Shop/Shop';




function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route index path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/ordereview" element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
