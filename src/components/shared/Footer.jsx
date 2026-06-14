import { Link } from 'react-router-dom';
import { ImWhatsapp } from "react-icons/im";



const Footer = () => {
  // ডাইনামিক লিঙ্ক কনফিগারেশন
  const footerLinks = {
    company: [
      { name: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি', link: '/career' },
      { name: 'শিক্ষক হিসাবে যোগ দিন', link: '/join-as-teacher' },
      { name: 'অ্যাফিলিয়েট রেজিস্ট্রেশন', link: '/affiliate' },
      { name: 'প্রাইভেসি পলিসি', link: '/privacy-policy' },
      { name: 'রিফান্ড পলিসি', link: '/refund-policy' },
      { name: 'ব্যবহারকারীর শর্তাবলী', link: '/terms' },
    ],
    others: [
      { name: 'ফ্রি নোটস ও গাইড', link: '/free-notes' },
      { name: 'চাকরি প্রস্তুতি কোর্সসমূহ', link: '/job-preparation' },
      { name: 'সার্টিফিকেট ভেরিফাই করুন', link: '/verify-certificate' },
      { name: 'ফ্রি ডাউনলোড', link: '/free-download', isGreen: true },
    ],
  };


  return (
    <footer className="bg-[#191c21] text-gray-300 pt-16 pb-18 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          
          {/* Column 1: Logo and App Downloads */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-black text-white tracking-tight flex items-center">
              SHIKBO<span className="text-xs font-bold text-gray-400 ml-1 leading-3 block">SCHOOL</span>
            </Link>
            <p className="text-sm text-gray-400">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
            
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-2">
              {/* Google Play */}
              <a href="https://play.google.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#22262f] hover:bg-[#2b303c] border border-gray-700/50 rounded-lg px-4 py-2 transition-all w-48">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">Get it on</p>
                  <p className="text-sm font-bold text-white font-sans leading-tight mt-0.5">Google Play</p>
                </div>
              </a>
              {/* App Store */}
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#22262f] hover:bg-[#2b303c] border border-gray-700/50 rounded-lg px-4 py-2 transition-all w-48">
                <span className="text-2xl text-white">🍏</span>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none">Download on the</p>
                  <p className="text-sm font-bold text-white font-sans leading-tight mt-0.5">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 tracking-wide">কোম্পানি</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:text-white transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Other Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 tracking-wide">অন্যান্য</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.others.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.link} 
                    className={`transition-colors block py-0.5 ${item.isGreen ? 'text-emerald-500 hover:text-emerald-400 font-semibold' : 'hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-5 tracking-wide">আমাদের যোগাযোগ মাধ্যম</h3>
            
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                কল করুন: <a href="tel:23443" className="text-emerald-500 font-bold hover:underline ml-1">23443</a> <span className="text-xs text-gray-500">(24x7)</span>
              </p>
              <p className="text-gray-400">
                হোয়াটসঅ্যাপ: <a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-emerald-500 font-bold hover:underline ml-1">+8801453212345</a> <span className="text-xs text-gray-500">(24x7)</span>
              </p>
              <p className="text-gray-400">
                দেশের বাহির থেকে: <span className="text-emerald-500 font-bold ml-1">+880 9610916910</span>
              </p>
              <p className="text-gray-400 truncate">
                ইমেইল: <a href="mailto:support@shikboschool.com" className="text-emerald-500 font-semibold hover:underline ml-1">support@shikboschool.com</a>
              </p>
              <p className="text-gray-400 text-xs pt-1">
                পার্টনারশিপের জন্য:<br />
                <a href="mailto:partnership@shikboschool.com" className="text-emerald-500 font-semibold hover:underline block mt-1">partnership@shikboschool.com</a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-6">
              {['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok'].map((platform, idx) => (
                <a 
                  key={idx} 
                  href={`https://${platform}.com`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#22262f] hover:bg-emerald-600 hover:text-white text-gray-400 flex items-center justify-center transition-all text-sm"
                >
                  <span className="capitalize font-mono text-[10px] font-bold">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Top Fine Border & Copyright Area */}
        <div className="border-t border-gray-800/60 pt-6 mt-4 text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            স্বত্ব © ২০১৫ - ২০২৬ শিখবো স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>

      </div>

      {/* Floating Sticky Actions Buttons (Bottom Right Area - Like 10MS) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Message Trigger */}
        <button className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 border-none outline-none">
          💬
        </button>
        {/* WhatsApp Trigger */}
        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
          <ImWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;