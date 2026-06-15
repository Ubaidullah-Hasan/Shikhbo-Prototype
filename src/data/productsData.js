// src/data/productsData.js
export const productsData = [
  {
    id: "ielts-online",
    slug: "ielts-course", // URL-এ ব্যবহারের জন্য
    title: "IELTS Course (Online Live Batch)",
    subtitle: "ঘরে বসেই IELTS-এর জরুরি প্রিপারেশন এবং ব্যান্ড স্কোর উন্নত করার সেরা অনলাইন প্ল্যাটফর্ম।",
    banner: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600",
    rating: 4.8,
    reviews: "১২,৪৫০+ শিক্ষার্থী",
    isOnline: true,
    tabs: ["কোর্স ওভারভিউ", "স্টাডি ম্যাটেরিয়ালস", "শিক্ষক মণ্ডলী", "FAQ"],
    features: [
      { id: 1, text: "৩৬টি লাইভ ইন্টারঅ্যাক্টিভ ক্লাস", icon: "🎥" },
      { id: 2, text: "১৫টি ফুল-লেন্থ মক টেস্ট (AI Evaluation)", icon: "📝" },
      { id: 3, text: "Cambridge Official Book Solutions", icon: "📚" }
    ],
    price: 4500,
    oldPrice: 6000,
    discountText: "২৫% বিশেষ ছাড়",
    offerPercentage: 25,
    featuresList: ["৩ মাস মেয়াদী লাইভ ব্যাচ", "লাইফটাইম রেকর্ডেড ব্যাকআপ", "মোবাইল ও ওয়েব এক্সেস"]
  },
  {
    id: "ielts-offline",
    slug: "ielts-programme",
    title: "IELTS Premium Programme (Offline Branch)",
    subtitle: "Shikhbo Premium ক্যাম্পাসে সামনাসামনি এক্সপার্ট মেন্টরদের তত্ত্বাবধানে নিশ্চিত সাফল্য।",
    banner: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    rating: 4.9,
    reviews: "৩,২০০+ গ্র্যাজুয়েট",
    isOnline: false,
    tabs: ["ক্যাম্পাস ওভারভিউ", "রুটিন ও শিডিউল", "ইনস্ট্রাক্টরস"],
    features: [
      { id: 1, text: "সরাসরি ক্লাসরুম লেকচার (ঢাকা ব্রাঞ্চ)", icon: "🏢" },
      { id: 2, text: "ইন-পার্সন স্পিকিং মক ও ফিডব্যাক", icon: "🗣️" }
    ],
    price: 15000,
    oldPrice: 18000,
    discountText: "সীমিত সময়ের প্রি-বুক অফার",
    offerPercentage: 15,
    featuresList: ["সপ্তাহে ৪ দিন সরাসরি ক্লাস", "এক্সক্লুসিভ হার্ডকপি বুকলেটস", "ফ্রি ওয়ান-টু-ওয়ান স্পিকিং বুথ"],
    branches: ["মিরপুর ব্রাঞ্চ", "ফার্মগেট ব্রাঞ্চ", "উত্তরা ব্রাঞ্চ"]
  },
  {
    id: "spoken-english",
    slug: "spoken-english-online",
    title: "Spoken English for Professionals",
    subtitle: "ক্যারিয়ার ও দৈনন্দিন জীবনে ফ্লুয়েন্টলি ইংরেজি বলার সম্পূর্ণ অনলাইন কোর্স।",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600",
    rating: 4.7,
    reviews: "৮,৫০০+ শিক্ষার্থী",
    isOnline: true,
    tabs: ["কোর্স মডিউল", "প্র্যাকটিস সেশন", "FAQ"],
    features: [
      { id: 1, text: "২৪টি লাইভ স্পিকিং ক্লাব সেশন", icon: "💬" },
      { id: 2, text: "স্মার্ট ভোকাবুলারি ফ্ল্যাশকার্ড", icon: "🃏" }
    ],
    price: 2200,
    oldPrice: 3500,
    discountText: "৩৭% মেগা ডিসকাউন্ট",
    offerPercentage: 37,
    featuresList: ["স্মার্ট পিডিএফ শিট", "লাইফটাইম এক্সেস", "স্পিকিং পার্টনার কমিউনিটি"]
  },
  {
    id: "kids-english-offline",
    slug: "kids-english-programme",
    title: "Kids English Club (Offline)",
    subtitle: "খেলার ছলে শিশুদের শুদ্ধ উচ্চারণ ও ইংরেজি ভীতি দূর করার অফলাইন প্রোগ্রাম।",
    banner: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600",
    rating: 4.9,
    reviews: "৪৫০+ শিশু",
    isOnline: false,
    tabs: ["অ্যাক্টিভিটি প্ল্যান", "ক্যাম্পাস গাইড", "প্যারেন্টস রিভিউ"],
    features: [
      { id: 1, text: "অডিও-ভিজ্যুয়াল লার্নিং ক্লাসরুম", icon: "🎨" },
      { id: 2, text: "সার্টিফিকেট ও গিফট হ্যাম্পার", icon: "🎁" }
    ],
    price: 8000,
    oldPrice: 10000,
    discountText: "ঈদ স্পেশাল ২০% ছাড়",
    offerPercentage: 20,
    featuresList: ["অফলাইন এক্টিভিটি বেসড ক্লাস", "অভিজ্ঞ চাইল্ড কেয়ার ট্রেইনার", "নিরাপদ ক্যাম্পাস পরিবেশ"],
    branches: ["মিরপুর ব্রাঞ্চ", "উত্তরা ব্রাঞ্চ"]
  },
  {
    id: "corporate-english",
    slug: "corporate-communication",
    title: "Corporate Communication & Presentation",
    subtitle: "বিজনেস রাইটিং, ইমেইল এবং ইন্টারভিউ ক্র্যাক করার অ্যাডভান্সড অনলাইন গাইড।",
    banner: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600",
    rating: 4.6,
    reviews: "১,২০০+ প্রফেশনালস",
    isOnline: true,
    tabs: ["সিলেবাস", "লাইভ কেস স্টাডি", "সার্টিফিকেশন"],
    features: [
      { id: 1, text: "১২টি ওয়ান-টু-ওয়ান ফিডব্যাক ক্লাস", icon: "💼" },
      { id: 2, text: "রিলিজড সিভি এবং লিংকডইন রিভিউ", icon: "📄" }
    ],
    price: 5500,
    oldPrice: 7000,
    discountText: "প্রি-লঞ্চ অফার",
    offerPercentage: 21,
    featuresList: ["কর্পোরেট নেটওয়ার্কিং সুযোগ", "রেডিমেড ইমেইল টেমপ্লেটস", "১:১ মক ইন্টারভিউ"]
  }
];