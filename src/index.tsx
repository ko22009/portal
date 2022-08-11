import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import News from "./pages/News";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
