import { useState, useEffect } from 'react';

const CountdownTimer = ({ percentage }) => {
  const [time, setTime] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-3 flex items-center justify-between animate-fadeIn">
      <div className="flex items-center gap-2">
        <span className="text-xl">🔥</span>
        <div>
          <p className="text-xs font-bold text-red-600">{percentage}% মেগা অফার!</p>
          <p className="text-[11px] text-gray-500 font-medium">সীমিত সময়ের জন্য অফারটি প্রযোজ্য</p>
        </div>
      </div>
      <div className="flex gap-1 font-mono text-xs font-black text-white">
        <span className="bg-red-500 px-2 py-1 rounded shadow-sm">{String(time.hours).padStart(2, '0')}h</span>
        <span className="text-red-500 font-bold self-center">:</span>
        <span className="bg-red-500 px-2 py-1 rounded shadow-sm">{String(time.minutes).padStart(2, '0')}m</span>
        <span className="text-red-500 font-bold self-center">:</span>
        <span className="bg-red-500 px-2 py-1 rounded shadow-sm">{String(time.seconds).padStart(2, '0')}s</span>
      </div>
    </div>
  );
};

export default CountdownTimer;