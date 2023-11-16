import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from "./components/timeline/timeline";
import Home from './components/Home/home';
import Events from './components/Events/events';
import Navbar from "./components/navbar/navbar"
import Gls from './components/gls/gls'
import eventsData from './components/Events/data';
import EventInfo from './components/Events/EventInfo';
import Team from './components/team/team'
import TandC from './components/rules/terms';
import Privacy from './components/rules/privacy';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/gallery' element={<Timeline />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/gls' element={<Gls />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<TandC />} />
        {eventsData.map((e) => <Route exact path={'/events/' + e.title} element={<EventInfo title={e.title} imgname={e.imgname} eventDesc={e.description} venue={e.venue} date={e.date} price={e.price} coordinator1={e.coordinator1} coordinator2={e.coordinator2} contact1={e.contact1} contact2={e.contact2} />} />)}
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
