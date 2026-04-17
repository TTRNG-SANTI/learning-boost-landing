const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-foreground tracking-tight">SANTI Tutoring</span>
        <a
          href="#booking"
          className="bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          Book Free Consultation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
