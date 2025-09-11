import { ChevronDown,Menu, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-white shadow-md">
      <div className="flex items-center justify-between w-full mx-auto">
        <button aria-label="Menu" className="text-gray-800">
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative flex items-center space-x-2">
          <button
            aria-label="User Menu"
            className="flex items-center justify-center w-10 h-10 text-gray-800 bg-teal-500 rounded-md hover:bg-teal-600"
          >
            <User className="w-6 h-6" />
          </button>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;