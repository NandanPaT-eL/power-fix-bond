type LogoProps = {
  className?: string;
  variant?: "default" | "onDark";
};

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const isOnDark = variant === "onDark";
  const sideClasses = isOnDark
    ? "bg-white text-brand-ink"
    : "bg-brand-ink text-white";
  const middleClasses = "bg-brand-blue text-white";
  return (
    <div
      className={`inline-flex items-center font-extrabold tracking-tight select-none ${className}`}
      aria-label="Power-Fix-O"
    >
      <span className={`${sideClasses} px-2 py-1 rounded-l-md`}>POWER</span>
      <span className={`${middleClasses} px-2 py-1`}>-FIX-</span>
      <span className={`${sideClasses} px-2 py-1 rounded-r-md`}>O</span>
    </div>
  );
};