import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"; 
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import ServiceTemplate from "./pages/servicetemplate";
import WhatsappButton from "./components/icons/WhatsappButton";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimda" element={<About />} /> 
        <Route path="/hizmetler" element={<Services />} /> 
        <Route path="/iletisim" element={<Contact />} /> 
        {/* Dynamic route for all individual service pages */}
        <Route path="/:serviceName" element={<ServiceTemplate />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </Router>
  );
}
