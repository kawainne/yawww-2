export default function NewBadge() {
  return (
    <div className="absolute -top-2 -right-2 px-2 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30 text-xs font-medium text-emerald-400 flex items-center gap-1">
      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
      New
    </div>
  );
}