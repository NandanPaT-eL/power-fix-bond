export const Logo = ({ className = "" }: { className?: string }) => (
  <div
    className={`inline-flex items-center font-extrabold tracking-tight select-none ${className}`}
    aria-label="Power-Fix-O"
  >
    <span className="bg-brand-ink text-white px-2 py-1 rounded-l-md">POWER</span>
    <span className="bg-brand-blue text-white px-2 py-1">-FIX-</span>
    <span className="bg-brand-ink text-white px-2 py-1 rounded-r-md">O</span>
  </div>
);