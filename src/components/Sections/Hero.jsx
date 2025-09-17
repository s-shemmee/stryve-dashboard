import { Activity, Calendar, ChevronDown, Sparkle } from "lucide-react";
import { AlertCircle } from "lucide-react";
import BackgroundShapes from '../BackgroundShapes';

const Hero = () => {
  return (
  <section className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <BackgroundShapes />
      </div>
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
              <div className="flex items-center gap-3 px-4 py-3 bg-white shadow rounded-2xl">
                <div className="relative w-10 h-10">
                  <svg className="w-10 h-10 transform -rotate-90" viewBox="0 0 36 36">
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
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">
                    60
                  </div>
                </div>
                <span className="font-medium text-black">Usage</span>
              </div>

              <a className="flex items-center gap-3 px-4 py-3 font-medium text-black bg-white shadow rounded-2xl" style={{ borderRadius: '1rem' }}>
                <span className="flex items-center justify-center bg-pink-100 rounded-lg p-2.5 mr-2">
                  <Sparkle className="w-5 h-5 text-pink-400" />
                </span>
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
            <span className="flex items-center gap-2 px-3 py-2">
              <Activity className="w-5 h-5 text-teal-600" />
              Scan Type: <span className="font-semibold text-gray-900">Web</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              Date: <span className="font-semibold text-gray-900">12 Jan 25</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-2">
              Website:
              <a href="#" className="font-semibold ">www.websitename.com | scan_name</a>
            </span>
            <span className="flex items-center gap-2 px-3 py-2">
              <Activity className="w-5 h-5 text-teal-600" />
              Status:
              <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-teal-600 rounded">Completed</span>
              <button className="p-1 ml-1 rounded hover:bg-teal-100">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </span>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center w-full pt-4">
            <div className="flex justify-center w-full gap-4 px-2 py-4 bg-white shadow rounded-2xl">
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 transition-colors hover:text-gray-800 rounded-xl">
                Summary
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 transition-colors hover:text-gray-800 rounded-xl">
                Compliance
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 transition-colors hover:text-gray-800 rounded-xl">
                Accessibility
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 transition-colors hover:text-gray-800 rounded-xl">
                Pages
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-600 transition-colors hover:text-gray-800 rounded-xl">
                Files
              </button>
              <button className="flex-1 pb-2 text-lg font-semibold text-gray-800 transition-colors border-b-2 border-teal-600" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
                Issues
              </button>
            </div>
          </div>

          {/* Issues Overview */}
          <div className="flex flex-wrap items-stretch justify-center w-full gap-12 mt-8">
            <div className="flex flex-col items-center w-40 px-4 py-4 bg-white shadow rounded-2xl">
              <span className="mb-2 text-lg font-semibold text-gray-800">Total Issues</span>
              <div className="relative w-24 h-24 mb-2">
                <svg className="w-24 h-24" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#14b8a6" strokeWidth="4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-teal-700">22</div>
              </div>
            </div>

            <div className="flex flex-col items-center w-64 px-4 py-4 text-black bg-white shadow rounded-2xl">
              <span className="mb-6 text-lg font-semibold text-gray-800">Issues by Priority</span>
              <div className="flex items-end justify-center w-full gap-8 pt-4 pb-2 h-28">
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-base font-bold text-gray-800">10</span>
                  <div className="h-20 transition-all bg-teal-600 rounded w-7"></div>
                  <span className="mt-2 text-xs text-gray-700">Critical</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-base font-bold text-gray-800">8</span>
                  <div className="h-16 transition-all bg-teal-100 rounded w-7"></div>
                  <span className="mt-2 text-xs text-gray-700">High</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-base font-bold text-gray-800">6</span>
                  <div className="h-12 transition-all bg-teal-600 rounded w-7"></div>
                  <span className="mt-2 text-xs text-gray-700">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-2 text-base font-bold text-gray-800">4</span>
                  <div className="h-8 transition-all bg-teal-100 rounded w-7"></div>
                  <span className="mt-2 text-xs text-gray-700">Low</span>
                </div>
              </div>
            </div>

            <div className="grid w-full max-w-xl grid-cols-2 gap-6">
              <div className="flex items-center min-w-0 px-4 py-3 border border-gray-300 shadow bg-teal-50 rounded-2xl">
                <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2 text-red-500" />
                <span className="mr-2 text-base font-semibold text-black whitespace-nowrap">Critical Issues</span>
                <span className="ml-auto text-lg font-bold text-black">5</span>
              </div>
              <div className="flex items-center min-w-0 px-4 py-3 bg-white border border-gray-300 shadow rounded-2xl">
                <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2 text-orange-400" />
                <span className="mr-2 text-base font-semibold text-black whitespace-nowrap">High Issues</span>
                <span className="ml-auto text-lg font-bold text-black">8</span>
              </div>
              <div className="flex items-center min-w-0 px-4 py-3 bg-white border border-gray-300 shadow rounded-2xl">
                <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2 text-yellow-400" />
                <span className="mr-2 text-base font-semibold text-black whitespace-nowrap">Medium Issues</span>
                <span className="ml-auto text-lg font-bold text-black">6</span>
              </div>
              <div className="flex items-center min-w-0 px-4 py-3 bg-white border border-gray-300 shadow rounded-2xl">
                <AlertCircle className="flex-shrink-0 w-5 h-5 mr-2 text-green-500" />
                <span className="mr-2 text-base font-semibold text-black whitespace-nowrap">Low Issues</span>
                <span className="ml-auto text-lg font-bold text-black">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
