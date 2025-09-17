import { Home, CreditCard, FileText, Axe, Activity, Monitor, CirclePlay , BookOpen, Settings } from 'lucide-react';

const SideNavbar = () => {
  return (
    <aside className="flex flex-col items-center w-16 h-screen py-6 space-y-8 bg-white shadow-md">
      <button aria-label="Home" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <Home className="w-6 h-6" />
      </button>
      <button aria-label="Credit Card" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <CreditCard className="w-6 h-6" />
      </button>
      <button aria-label="File" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <FileText className="w-6 h-6" />
      </button>
      <button aria-label="Accessibility" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <Axe className="w-6 h-6" />
      </button>
      <button aria-label="Activity" className="p-2 text-white bg-teal-600 rounded-md ">
        <Activity className="w-5 h-5" />
      </button>
      <button aria-label="Monitor" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <Monitor className="w-6 h-6" />
      </button>
      <button aria-label="Play" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <CirclePlay className="w-6 h-6" />
      </button>
      <button aria-label="Docs" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <BookOpen className="w-6 h-6" />
      </button>
      <button aria-label="Settings" className="p-2 text-gray-700 rounded-md hover:text-teal-600 bg-slate-100">
        <Settings className="w-6 h-6" />
      </button>
    </aside>
  );
};

export default SideNavbar;