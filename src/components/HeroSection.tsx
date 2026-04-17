import headshot from "@/assets/headshot.jpg";

const HeroSection = () => {
  return (
    <section className="bg-hero-bg py-20 md:py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="inline-block bg-trust-badge text-trust-badge-text text-sm font-semibold px-3 py-1 rounded-full">
                SAT: 1500
              </span>
              <span className="inline-block bg-trust-badge text-trust-badge-text text-sm font-semibold px-3 py-1 rounded-full">
                4.0 GPA
              </span>
              <span className="inline-block bg-trust-badge text-trust-badge-text text-sm font-semibold px-3 py-1 rounded-full">
                Early Graduate
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">
              Your Child Is Struggling in Math or Chemistry.{" "}
              <span className="text-primary">Let's Fix That.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              1-on-1 tutoring that builds real understanding — not just quick fixes. Better grades, stronger study habits, and lasting confidence.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-primary-foreground font-semibold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={headshot}
              alt="SANTI Tutoring - Your tutor"
              width={280}
              height={280}
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-lg border-4 border-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
