import Navbar from '../Navbar';
import SideNavbar from '../SideNavbar';
import Hero from '../Sections/Hero';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Top Navbar */}
      <nav className="w-full">
        <Navbar />
      </nav>
      {/* Main content area: sidebar + hero */}
      <div className="flex flex-1 w-full">
        <aside className="flex-shrink-0">
          <SideNavbar />
        </aside>
        <main className="flex-1">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;