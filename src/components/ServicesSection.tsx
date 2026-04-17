import { BookOpen, FlaskConical, Clock, Brain } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Algebra 1 Tutoring",
    description: "Build a strong foundation in equations, inequalities, and linear functions.",
  },
  {
    icon: BookOpen,
    title: "Algebra 2 Tutoring",
    description: "Master polynomials, quadratics, and advanced algebraic concepts.",
  },
  {
    icon: FlaskConical,
    title: "Chemistry Tutoring",
    description: "Understand reactions, stoichiometry, and problem-solving strategies.",
  },
  {
    icon: Clock,
    title: "Emergency Test Prep",
    description: "Short-term, high-impact sessions to prepare for upcoming exams.",
  },
  {
    icon: Brain,
    title: "Study Habits Coaching",
    description: "Learn evidence-based techniques to study smarter and retain more.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          What I Offer
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Focused, personalized support in the subjects that matter most.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
