import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from "./components/timeline/timeline.jsx";
import Home from './components/Home/home.jsx';
import Events from './components/Events/events.jsx';
import Navbar from "./components/navbar/navbar.jsx"
import Gls from './components/gls/gls.jsx'
import eventsData from './components/Events/data.js';
import EventInfo from './components/Events/EventInfo.jsx';
import Exhibition from './components/exhibition/exhibition.jsx';
// import Team from './components/team/team'
import TandC from './components/rules/terms.jsx';
import Privacy from './components/rules/privacy.jsx';
import Hosp from './components/Hospitality/Hosp.jsx';
import Appp from './components/sponsorships/spons.jsx';
import ContactPage from './components/Hospitality/Contact-us/Contact.jsx';

import Login from './components/login/login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/gallery' element={<Timeline />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/gls' element={<Gls />} />
        <Route exact path='/exhibition' element={<Exhibition />} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<TandC />} />
        <Route exact path='/accommodation' element={<Hosp />} />
        <Route exact path='/sponsorships' element={<Appp />} />
        <Route exact path='/Contacts' element={<ContactPage />} />
        <Route exact path='/login' element={<Login />} />
	{eventsData.map((e) => <Route exact path={'/events/' + e.title} element={<EventInfo title={e.title} imgname={e.imgname} eventDesc={e.description} link={e.reglink} docum={e.pdf} coordinator3={e.coordinator3} coordinator1={e.coordinator1} coordinator2={e.coordinator2} contact1={e.contact1} contact2={e.contact2} contact3={e.contact3} />} />)}

        <Route />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
