import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function useCloseOnScroll({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isOpen]);
}
