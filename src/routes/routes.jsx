import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import ClientDetail from "../components/ClientDetail/ClientDetail";
import About from "../pages/About/About";
import Clients from "../pages/Clients/Clients";
import Contact from "../pages/Contact/Contact";
import Media from "../pages/Media/Media";
import Press from "../pages/Press/Press";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Navbar routing */}
      <Route index element={<App />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/media" element={<Media />} />
      <Route path="/press" element={<Press />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Internal routing */}
      <Route path="/clients/:slug" element={<ClientDetail />} />
    </Route>
  )
);
