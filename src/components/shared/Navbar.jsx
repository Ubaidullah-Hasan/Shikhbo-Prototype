import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navigation Configuration JSON (Dynamic structure for menus)
  const navConfig = [
    {
      id: "class6-12",
      name: "ক্লাস ৬-১২",
      hasMegaMenu: true,
      hasDropdown: false,
      categories: [
        { id: "hsc", name: "এইচএসসি", icon: "🟥", hasSubItems: true },
        { id: "ssc", name: "এসএসসি", icon: "🟨", hasSubItems: true },
        { id: "class8", name: "অষ্টম শ্রেণি", icon: "🟧", hasSubItems: true },
        { id: "class7", name: "সপ্তম শ্রেণি", icon: "🟩", hasSubItems: true },
        { id: "class6", name: "ষষ্ঠ শ্রেণি", icon: "🟪", hasSubItems: true },
        {
          id: "free-course",
          name: "একাডেমিক ফ্রি কোর্সসমূহ",
          icon: "🟢",
          hasSubItems: false,
          isSpecialLink: true,
          link: "/free-courses",
        },
      ],
      subMenuItems: {
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
      },
    },
    {
      id: "english",
      name: "ইংলিশ",
      hasMegaMenu: false,
      hasDropdown: true,
      dropdownItems: [
        { name: "IELTS Course", link: "/ielts" },
        { name: "Spoken English", link: "/spoken" },
        { name: "English Grammar", link: "/grammar" },
      ],
    },
    {
      id: "store",
      name: "স্টোর",
      hasMegaMenu: false,
      hasDropdown: true,
      dropdownItems: [
        { name: "বইসমূহ", link: "/books" },
        { name: "কোর্সসমূহ", link: "/courses" },
      ],
    },
    {
      id: "others",
      name: "অন্যান্য",
      hasMegaMenu: false,
      hasDropdown: true,
      dropdownItems: [
        { name: "ব্লগ", link: "/blog" },
        { name: "স্কলারশিপ", link: "/scholarship" },
      ],
    },
  ];

  // States
  const [openMenuId, setOpenMenuId] = useState(null); // Tracks active top-level dropdown
  const [activeSubMenu, setActiveSubMenu] = useState("hsc"); // Tracks mega menu active left side tab
  const [isSearchFocused, setIsSearchFocused] = useState(false); // Popover for search suggestions

  const searchRef = useRef(null);

  // Close search suggestions on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LEFT SIDE: Logo & Navigation Links */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center font-black text-2xl text-gray-900 tracking-tight mr-2"
            >
              SI
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 leading-3 block">
                KHBO
                <br />
                SCHOOL
              </span>
            </Link>

            {/* Nav Menu Items from JSON */}
            <div className="hidden lg:flex items-center gap-1">
              {navConfig.map((item) => (
                <div
                  key={item.id}
                  className="relative py-5" // Area expanded to ensure no sudden closure on hover
                  onMouseEnter={() => {
                    setOpenMenuId(item.id);
                    if (item.hasMegaMenu) setActiveSubMenu("hsc");
                  }}
                  onMouseLeave={() => setOpenMenuId(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-red-500 px-3 py-1.5 text-sm font-medium transition-colors rounded-md focus:outline-none bg-transparent border-none">
                    <span>{item.name}</span>
                    {/* Only show downward arrow if it has any menu */}
                    {(item.hasMegaMenu || item.hasDropdown) && (
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${openMenuId === item.id ? "rotate-180 text-red-500" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {/* 1. MEGA DROPDOWN PANEL (Exact 8px top shift without extra outlines/borders) */}
                  {item.hasMegaMenu && openMenuId === item.id && (
                    <div className="absolute left-0 top-full w-130 bg-white rounded-xl shadow-xl border border-gray-100 flex overflow-hidden z-50 animate-fadeIn">
                      {/* Left Column (Categories) */}
                      <div className="w-[52%] border-r border-gray-100 p-2 bg-gray-50/50 flex flex-col justify-between">
                        <div className="space-y-0.5">
                          {item.categories
                            .filter((c) => !c.isSpecialLink)
                            .map((cat) => (
                              <button
                                key={cat.id}
                                onMouseEnter={() => setActiveSubMenu(cat.id)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 text-left text-sm font-medium rounded-lg transition-all border-none outline-none focus:outline-none ${
                                  activeSubMenu === cat.id
                                    ? "bg-white text-red-500 shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100/70"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-base">{cat.icon}</span>
                                  <span>{cat.name}</span>
                                </div>
                                {/* Standard arrow ONLY if it has items inside */}
                                {cat.hasSubItems && (
                                  <svg
                                    className={`w-3 h-3 ${activeSubMenu === cat.id ? "text-red-500" : "text-gray-400"}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2.5"
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                )}
                              </button>
                            ))}
                        </div>

                        {/* Special Bottom Fixed Link (Academic free courses) */}
                        {item.categories
                          .filter((c) => c.isSpecialLink)
                          .map((special) => (
                            <div
                              key={special.id}
                              className="border-t border-gray-100 mt-2 pt-2 px-2"
                            >
                              <Link
                                to={special.link}
                                className="w-full flex items-center gap-2 px-2 py-2 text-xs font-bold text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              >
                                <span>{special.icon}</span> {special.name}
                              </Link>
                            </div>
                          ))}
                      </div>

                      {/* Right Column (Sub Items aligned symmetrically) */}
                      <div className="w-[48%] p-3 bg-white">
                        <div className="space-y-0.5">
                          {item.subMenuItems[activeSubMenu]?.map(
                            (subItem, index) => (
                              <Link
                                key={index}
                                to={subItem.link}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 font-medium transition-colors"
                              >
                                <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-md font-bold tracking-wider">
                                  26
                                </span>
                                {subItem.name}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. REGULAR STANDARD DROPDOWN (For English, Store, Others - Exactly 8px top spacing) */}
                  {item.hasDropdown && openMenuId === item.id && (
                    <div className="absolute left-0 top-full w-48 bg-white rounded-lg shadow-xl border border-gray-100 p-1 z-50 animate-fadeIn">
                      {item.dropdownItems.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 rounded-md font-medium transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Search with Suggestions Window, Language Switcher, Hotline, Login */}
          <div className="flex items-center gap-3">
            {/* Search Container with Suggestion Box */}
            <div
              ref={searchRef}
              className="relative hidden md:block w-64 lg:w-72"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="সার্চ করুন..."
                  onFocus={() => setIsSearchFocused(true)}
                  className={`w-full text-sm text-gray-800 pl-9 pr-4 py-2 rounded-full border border-transparent bg-gray-100 focus:outline-none focus:bg-white focus:border-gray-200 transition-all ${
                    isSearchFocused
                      ? "rounded-b-none rounded-t-2xl bg-white border-gray-200 shadow-sm"
                      : ""
                  }`}
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
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>

              {/* Popular Search Suggestions Overlay */}
              {isSearchFocused && (
                <div className="absolute left-0 right-0 top-full bg-white rounded-b-2xl shadow-xl border-x border-b border-gray-200 p-4 z-50 animate-fadeIn">
                  <div className="text-xs font-bold text-gray-500 mb-3 flex items-center gap-1.5">
                    <span>✨</span> জনপ্রিয় অনুসন্ধান
                  </div>
                  <div className="space-y-1">
                    {[
                      "hsc 26",
                      "english",
                      "HSC 27 অনলাইন ব্যাচ ফিজিক্স",
                      "HSC 27 অনলাইন ব্যাচ বাংলা",
                      "ielts",
                    ].map((term, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-2.5 px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg text-left transition-colors font-medium border-none outline-none"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-gray-400 shrink-0"
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
                        <span className="truncate">{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher (BN / EN toggle style) */}
            <div className="flex items-center bg-gray-100 p-0.5 rounded-lg text-[11px] font-bold shrink-0">
              <button className="bg-emerald-600 text-white px-2 py-1 rounded-md transition-all shadow-sm">
                BN
              </button>
              <button className="text-gray-500 px-2 py-1 hover:text-gray-800 transition-colors">
                EN
              </button>
            </div>

            {/* Hotline (23443) */}
            <a
              href="tel:23443"
              className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <span className="text-emerald-600 text-base">📞</span>
              <span className="font-mono">23443</span>
            </a>

            {/* Login Button */}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4.5 py-2 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95 shrink-0 border-none">
              লগ-ইন
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
