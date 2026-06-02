import Link from "next/link";

interface MenuItem {
  href: string;
  label: string;
  section: string;
}

interface Props {
  menuItems: MenuItem[];
  activeSection: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export default function MenuItems({
  menuItems,
  activeSection,
  onClick,
  variant = "desktop",
}: Props) {
  return (
    <ul
      className={`group text-sm ${variant === "desktop" ? "hidden items-center gap-5 md:flex" : "flex flex-col justify-between gap-2 px-8"}`}
    >
      {menuItems.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={`uppercase transition-opacity duration-300 ${
              variant === "desktop"
                ? `group-hover:opacity-50 hover:text-neutral-200 hover:opacity-100`
                : ""
            } ${activeSection === item.section ? "text-neutral-200" : "text-neutral-500"}`}
            onClick={variant === "mobile" ? onClick : undefined}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
