const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
          © {new Date().getFullYear()} SANTI Tutoring. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
