import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Timeline from "./components/timeline/timeline";
import Home from './components/Home/home';
import Events from './components/Events/events';
import Navbar from "./components/navbar/navbar";
import Fotter from './components/fotter/fotter';
import Gls from './components/gls/gls'
import eventsData from './components/Events/data';
import EventInfo from './components/Events/EventInfo';
import Team from './components/team/team'
// not sure how to fix sponsorship maybe we need to add another navbar for this gib tips
// import Appp from './components/sponsorships/spons'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Appp /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/gallery' element={<Timeline />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/gls' element={<Gls />} />
        <Route exact path='/team' element={<Team />} />
        {eventsData.map((e) => <Route exact path={'/events/' + e.title} element={<EventInfo title={e.title} imgname={e.imgname} eventDesc={e.description} venue={e.venue} date={e.date} price={e.price} />} />)}
        <Route />
      </Routes>
      {/* <Fotter /> */}
    </BrowserRouter>
  );
}

export default App;
