import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("hsc"); // Default active sub-menu

  // ডামি ডেটা (১0 Minute School এর মতো)
  const categories = [
    { id: "hsc", name: "এইচএসসি", icon: "🟥" },
    { id: "ssc", name: "এসএসসি", icon: "🟨" },
    { id: "class8", name: "অষ্টম শ্রেণি", icon: "🟧" },
    { id: "class7", name: "সপ্তম শ্রেণি", icon: "🟩" },
    { id: "class6", name: "ষষ্ঠ শ্রেণি", icon: "🟪" },
  ];

  const subMenuItems = {
    hsc: [
      { name: "এইচএসসি ২৬", link: "/hsc-26" },
      { name: "এইচএসসি ২৭", link: "/hsc-27" },
      { name: "এইচএসসি ২৮", link: "/hsc-28" },
    ],
    ssc: [
      { name: "এসএসসি ২৬", link: "/ssc-26" },
      { name: "এসএসসি ২৭", link: "/ssc-27" },
    ],
    class8: [{ name: "অনলাইন ব্যাচ ২০২৬", link: "/class-8" }],
    class7: [{ name: "অনলাইন ব্যাচ ২০২৬", link: "/class-7" }],
    class6: [{ name: "অনলাইন ব্যাচ ২০২৬", link: "/class-6" }],
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo and Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center font-bold text-xl text-gray-900"
            >
              SHIKBO<span className="text-red-500">.</span>
            </Link>

            {/* Dropdown Trigger Item */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md transition-colors">
                ক্লাস ৬-১২
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mega Dropdown Panel */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-125 bg-white rounded-xl shadow-xl border border-gray-100 flex overflow-hidden z-50 animate-fadeIn">
                  {/* Left Column (Main Categories) */}
                  <div className="w-1/2 border-r border-gray-100 p-2 bg-gray-50/50">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setActiveSubMenu(cat.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${
                          activeSubMenu === cat.id
                            ? "bg-white text-red-500 shadow-sm border border-gray-100"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span>{cat.icon}</span>
                          <span>{cat.name}</span>
                        </div>
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                      <Link
                        to="/free-courses"
                        className="text-xs font-semibold text-green-600 hover:underline flex items-center gap-2"
                      >
                        <span>🟢</span> একাডেমিক ফ্রি কোর্সসমূহ
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (Sub Items based on hover) */}
                  <div className="w-1/2 p-4 bg-white">
                    <div className="space-y-1">
                      {subMenuItems[activeSubMenu]?.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.link}
                          className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 font-medium transition-colors"
                        >
                          <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold">
                            26
                          </span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/english"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                ইংলিশ
              </Link>
              <Link
                to="/store"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              >
                স্টোর
              </Link>
            </div>
          </div>

          {/* Right Side: Search, Language, Contact, and Login */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden lg:block w-64">
              <input
                type="text"
                placeholder="সার্চ করুন..."
                className="w-full bg-gray-100 text-sm text-gray-700 pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 p-0.5 rounded-lg text-xs font-bold">
              <button className="bg-green-600 text-white px-2 py-1 rounded-md">
                BN
              </button>
              <button className="text-gray-600 px-2 py-1">EN</button>
            </div>

            {/* Contact Number */}
            <a
              href="tel:16910"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-green-600"
            >
              📞 <span className="font-mono">16910</span>
            </a>

            {/* Login Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
              লগ-ইন
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
