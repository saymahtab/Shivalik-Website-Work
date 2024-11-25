
import './App.css'
import Header from './components/Home/Header.jsx';
import Sidebar from './components/Home/Sidebar';
import './components/Home/Sidebar.css';
import Hero from './components/Home/Main.jsx';
import CoursesSection from './components/Home/CoursesSection';
import Placement from './components/Home/PlacementSection.jsx';
import StudentTestimonials from './components/Home/StudentTestimonials.jsx';
import Footer from './components/Home/Footer.jsx';
import Courses from "./components/Home/Courses.jsx";
import CollegeIntro from "./components/Home/CollegeIntro.jsx";
import NewsEvents from './components/Home/NewsEvents.jsx';
import CircularNotices from './components/Home/CircularNotices.jsx';
import PlacementMenu from './components/Home/PlacementMenu.jsx';
import AwardsSection from './components/Home/AwardsSection.jsx';
import Popup from './components/Home/Popup.jsx';
import ShivalikLabs from './components/Home/ShivalikLabs.jsx'

function App() {
  
  return (
    <>
    <div>
      
        <Header />
       <Hero></Hero>
        <Sidebar />
        <CoursesSection />
        {/* <CollegeHighlights /> */}
        <CollegeIntro/>
        <Courses />
        <ShivalikLabs/>
        <StudentTestimonials />
        <CircularNotices/>
      
        <AwardsSection/>
        <NewsEvents/>
        <PlacementMenu/>
        <Placement/>
        <Footer/>
        </div>
        <Popup />
    </>
      
  )
}

export default App
