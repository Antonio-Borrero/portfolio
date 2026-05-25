"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.4 },
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [ids]);

  return activeSection;
}
