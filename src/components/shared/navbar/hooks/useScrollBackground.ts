import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useScrollBackground() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") {
        setIsScrolled(true);
        return;
      }
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return isScrolled;
}
