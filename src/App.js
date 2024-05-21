import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import User from "./pages/User"
import NotFound from "./pages/NotFound"
import Layout from "./pages/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/menu" element={<Menu/>}/>
        <Route path= "/user/:userId" element={<User />} />
        <Route path= "*" element={<NotFound />} />
       </Route>
      </Routes>
    </BrowserRouter>
  );
  };

export default App;