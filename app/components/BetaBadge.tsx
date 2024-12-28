export default function BetaBadge() {
  return (
    <div className="flex items-center gap-4">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-sm">
        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
        Beta 2.0
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 text-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 animate-shine" />
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <svg 
          className="w-4 h-4 text-amber-400 animate-pulse" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7zM5 3l1 1M5 7l1 1M3 5h2M7 5h2"
          />
        </svg>
        Improved Version
      </div>
    </div>
  );
}