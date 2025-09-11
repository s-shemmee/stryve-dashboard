import { Home, CreditCard, FileText, Axe, Activity, Monitor, CirclePlay , BookOpen, Settings } from 'lucide-react';

const SideNavbar = () => {
  return (
    <aside className="flex flex-col items-center w-16 h-screen py-6 space-y-8 bg-white shadow-md">
      <button aria-label="Home" className="text-gray-700 hover:text-teal-600">
        <Home className="w-6 h-6" />
      </button>
      <button aria-label="Credit Card" className="text-gray-700 hover:text-teal-600">
        <CreditCard className="w-6 h-6" />
      </button>
      <button aria-label="File" className="text-gray-700 hover:text-teal-600">
        <FileText className="w-6 h-6" />
      </button>
      <button aria-label="Accessibility" className="text-gray-700 hover:text-teal-600">
        <Axe className="w-6 h-6" />
      </button>
      <button aria-label="Activity" className="p-2 text-white bg-teal-600 rounded-md ">
        <Activity className="w-5 h-5" />
      </button>
      <button aria-label="Monitor" className="text-gray-700 hover:text-teal-600">
        <Monitor className="w-6 h-6" />
      </button>
      <button aria-label="Play" className="text-gray-700 hover:text-teal-600">
        <CirclePlay className="w-6 h-6" />
      </button>
      <button aria-label="Docs" className="text-gray-700 hover:text-teal-600">
        <BookOpen className="w-6 h-6" />
      </button>
      <button aria-label="Settings" className="text-gray-700 hover:text-teal-600">
        <Settings className="w-6 h-6" />
      </button>
    </aside>
  );
};

export default SideNavbar;