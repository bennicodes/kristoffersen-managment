import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import About from "../pages/About/About";
import Clients from "../pages/Clients/Clients";
import Contact from "../pages/Contact/Contact";
import Media from "../pages/media/Media";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/media" element={<Media />} />
    </Route>
  )
);
