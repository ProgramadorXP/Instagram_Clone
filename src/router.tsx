import { Routes, Route, BrowserRouter } from "react-router";
import App from "./App";
import Profile from "./pages/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} index />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
