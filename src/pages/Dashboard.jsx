import Navbar from '../components/Layout/Navbar';
import SideNavbar from '../components/layout/SideNavbar';
import Hero from '../components/Sections/Hero';

const Dashboard = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-100">
      <div className="fixed top-0 left-0 right-0 z-30 w-full">
        <Navbar />
      </div>
      <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] z-20">
        <SideNavbar />
      </div>
      <div className="pt-16 pl-16">
        <Hero />
      </div>
    </div>
  );
};

export default Dashboard;