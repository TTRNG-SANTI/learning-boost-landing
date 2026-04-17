const FinalCTA = () => {
  return (
    <section id="booking" className="py-20 bg-primary">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to See Your Child Succeed?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute consultation. We'll discuss your child's situation, identify the biggest opportunities for improvement, and outline a plan — no obligation.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-foreground text-primary font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Book Free Consultation
        </a>
        <p className="text-primary-foreground/60 text-sm mt-4">
          Or email directly: <a href="mailto:hello@santitutoring.com" className="underline">hello@santitutoring.com</a>
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
