export default function ImprovedBadge() {
  return (
    <div className="absolute -top-2 -right-2 px-2 py-1 bg-indigo-500/20 rounded-full border border-indigo-500/30 text-xs font-medium text-indigo-400 flex items-center gap-1">
      <svg className="w-3 h-3 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      Improved
    </div>
  );
}