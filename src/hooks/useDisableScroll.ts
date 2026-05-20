import { useEffect } from "react";

export default function useDisableScroll() {
  useEffect(() => {
    const overflow = document.body.style.overflow;
    const paddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight =
      window.innerWidth - document.documentElement.clientWidth + "px";

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);
}
