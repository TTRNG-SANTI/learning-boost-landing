import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Consultation",
    price: "Free",
    description: "Let's talk about your child's needs — no commitment.",
    features: ["30-minute call", "Academic assessment", "Personalized plan outline"],
    highlighted: false,
  },
  {
    name: "Hourly Tutoring",
    price: "$25",
    unit: "/hour",
    description: "Flexible 1-on-1 sessions scheduled on your terms.",
    features: ["Any subject offered", "Session summaries included", "Progress tracking"],
    highlighted: true,
  },
  {
    name: "3-Session Package",
    price: "$65",
    unit: "",
    description: "Commit to a short series for focused improvement.",
    features: ["Save vs. hourly rate", "Structured 3-session plan", "Priority scheduling"],
    highlighted: false,
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
            <div
              key={plan.name}
              className={`rounded-xl p-6 border ${
                plan.highlighted
                  ? "border-primary bg-accent shadow-md"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="font-semibold text-foreground text-lg mb-1">{plan.name}</h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.unit && <span className="text-muted-foreground">{plan.unit}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
