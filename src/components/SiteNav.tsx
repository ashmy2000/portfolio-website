import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Profile" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 nav-blur bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/">
          <img src="/white-on-black-logo.png" alt="My Logo" className="h-12 w-auto" />
        </Link>

        <div className="flex gap-2 sm:gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-1 py-1 transition-colors hover:text-white ${
                  isActive ? "text-white" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
