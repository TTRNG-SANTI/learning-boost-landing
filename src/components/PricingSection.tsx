import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Consultation",
    price: "Free",
    description: "Let's talk about your child's needs — no commitment.",
    features: ["15-minute call", "Academic assessment", "Personalized plan outline"],
    highlighted: false,
    href: "https://calendly.com/tutorwithsanti",
    cta: "Book free call",
  },
  {
    name: "Hourly Tutoring",
    price: "$25",
    unit: "/hour",
    description: "Flexible 1-on-1 sessions scheduled on your terms.",
    features: ["Any subject offered", "Session summaries included", "Progress tracking"],
    highlighted: true,
    href: "https://calendly.com/tutorwithsanti",
    cta: "Book a session",
  },
  {
    name: "3-Session Package",
    price: "$65",
    unit: "",
    description: "Commit to a short series for focused improvement.",
    features: ["Save vs. hourly rate", "Structured 3-session plan", "Priority scheduling"],
    highlighted: false,
    href: "https://calendly.com/tutorwithsanti/packages/801e6b2b-d4ed-4656-99df-33011e8ab87e",
    cta: "Book package",
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          No contracts. No hidden fees. Just results.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <a
              key={plan.name}
              href={plan.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                plan.highlighted
                  ? "border-primary bg-accent shadow-md"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <h3 className="font-semibold text-foreground text-lg mb-1">{plan.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.unit && <span className="text-muted-foreground">{plan.unit}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span
                className={`mt-auto inline-flex items-center justify-center font-semibold text-sm px-4 py-2.5 rounded-lg transition-opacity group-hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {plan.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
