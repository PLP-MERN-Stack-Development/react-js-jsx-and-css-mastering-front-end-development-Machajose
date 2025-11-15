import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import PostsPage from "./pages/PostsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  </BrowserRouter>
);
