export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8 sm:py-12 px-5 sm:px-6 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
        <div className="text-muted-foreground text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase text-center md:text-left">
          © {new Date().getFullYear()} ASMI. | All rights reserved.
        </div>

        <div className="flex items-center gap-5 sm:gap-8 text-[10px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground">
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
