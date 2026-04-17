import { BarChart3, Target, FileText, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: BarChart3,
    title: "Initial Diagnostic",
    description: "We start with an assessment to pinpoint exactly where your child stands and what gaps exist.",
  },
  {
    icon: Target,
    title: "Weekly Goals",
    description: "Each week has clear, measurable targets so progress is never vague.",
  },
  {
    icon: FileText,
    title: "Session Summaries",
    description: "After every session, you'll receive a summary of what was covered and what to practice.",
  },
  {
    icon: TrendingUp,
    title: "Before & After Performance",
    description: "We track grades and test scores over time so you can see real, measurable improvement.",
  },
];

const ProgressTracking = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          How Progress Is Tracked
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          No guesswork. You'll always know where your child stands and how far they've come.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <step.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracking;
