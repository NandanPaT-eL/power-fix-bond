import logoSrc from "@/assets/powerfixo-logo.png";

type LogoProps = {
  className?: string;
  variant?: "default" | "onDark";
};

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  return (
    <img
      src={logoSrc}
      alt="Power-Fix-O"
      className={`h-14 md:h-16 w-auto select-none ${
        variant === "onDark" ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" : ""
      } ${className}`}
      draggable={false}
    />
  );
};