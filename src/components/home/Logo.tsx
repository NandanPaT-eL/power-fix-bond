import logoSrc from "@/assets/powerfixo-logo.png";
import footerLogoSrc from "@/assets/powerfixo-footer.png";

type LogoProps = {
  className?: string;
  variant?: "default" | "onDark" | "footer";
};

export const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const src = variant === "footer" ? footerLogoSrc : logoSrc;
  
  return (
    <img
      src={src}
      alt="Power-Fix-O"
      className={`w-auto select-none ${
        variant === "onDark" || variant === "footer" ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" : ""
      } ${className || "h-12 md:h-18"}`}
      draggable={false}
    />
  );
};