import { Activity, Calendar, ChevronDown, Sparkle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 py-8">
        <div className="max-w-[1100px] mx-auto flex flex-col space-y-4 w-full z-10">
          {/* Breadcrumbs and Actions */}
          <div className="flex items-center justify-between w-full">
            <nav className="text-sm font-medium text-gray-800">
              <ol className="flex space-x-2">
                <li>Home</li>
                <li>&gt;</li>
                <li>Scans</li>
                <li>&gt;</li>
                <li>Websites</li>
                <li>&gt;</li>
                <li>Scan_name</li>
                <li>&gt;</li>
                <li>Issues</li>
              </ol>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#66b2b2"
                      strokeWidth="4"
                      strokeDasharray="100"
                      strokeDashoffset="40"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800">
                    60%
                  </div>
                </div>
              </div>
              <a className="flex items-center font-medium text-black underline">Usage</a>

              <a className="flex items-center font-medium text-black underline">
                <Sparkle className="w-5 h-5 mr-2 text-pink-400" />
                Upgrade Now
              </a>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col text-left">
            <h1 className="text-5xl font-semibold text-gray-800">
              Title
            </h1>
          </div>

          {/* Scan Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-base font-medium text-center text-gray-700">
            <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
              <Activity className="w-5 h-5 text-teal-600" />
              Scan Type: <span className="font-semibold text-gray-900">Web</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
              <Calendar className="w-5 h-5 text-teal-600" />
              Date: <span className="font-semibold text-gray-900">12 Jan 25</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
              Website:
              <a href="#" className="font-semibold ">www.websitename.com | scan_name</a>
            </span>
            <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
              <Activity className="w-5 h-5 text-teal-600" />
              Status:
              <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-teal-600 rounded">Completed</span>
              <button className="p-1 ml-1 rounded hover:bg-teal-100">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center w-full pt-4 border-b border-gray-300">
            <div className="flex justify-center w-full gap-4">
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
                Summary
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
                Compliance
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
                Accessibility
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
                Pages
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
                Files
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-800 border-b-2 border-teal-600">
                Issues
              </button>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
