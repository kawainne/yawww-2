export default function UpdateBadge() {
  return (
    <div className="absolute -top-2 -right-2 px-2 py-1 bg-amber-500/20 rounded-full border border-amber-500/30 text-xs font-medium text-amber-400 flex items-center gap-1">
      <svg className="w-3 h-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      Updated
    </div>
  );
}