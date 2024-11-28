import '../../App.css';
import NavBar from '../../components/common/header/NavBar';
import Sidebar from '../../components/Home/Sidebar';
import '../../components/styles/Sidebar.css';
import Hero from '../../components/Home/Main';
import CoursesSection from '../../components/Home/CoursesSection';
import Placement from '../../components/Home/PlacementSection';
import StudentTestimonials from '../../components/Home/StudentTestimonials';
import Footer from '../../components/common/footer/Footer';
import Courses from "../../components/Home/Courses";
import CollegeIntro from "../../components/Home/CollegeIntro";
import NewsEvents from '../../components/Home/NewsEvents';
import CircularNotices from '../../components/Home/CircularNotices';
import PlacementMenu from '../../components/Home/PlacementMenu';
import AwardsSection from '../../components/Home/AwardsSection';
import Popup from '../../components/Home/Popup';
import ShivalikLabs from '../../components/Home/ShivalikLabs';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Sidebar />
      <CoursesSection />
      <CollegeIntro />
      <Courses />
      <ShivalikLabs />
      <StudentTestimonials />
      <CircularNotices />
      <AwardsSection />
      <NewsEvents />
      <PlacementMenu />
      <Placement />
      <Footer />
      <Popup />
    </div>
  );
};

export default HomePage;
