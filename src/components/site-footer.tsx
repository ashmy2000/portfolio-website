export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-12 px-6 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted-foreground text-xs tracking-[0.18em] uppercase">
          © {new Date().getFullYear()} ASMI. | All rights reserved.
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <a
            href="https://github.com/ashmy2000"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashmysan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
