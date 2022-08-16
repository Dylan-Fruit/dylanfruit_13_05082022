import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import store from "./app/store";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
