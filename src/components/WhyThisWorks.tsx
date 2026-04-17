import tutoringSession from "@/assets/tutoring-session.jpg";

const points = [
  {
    title: "Rooted in Cognitive Science",
    description: "Sessions are designed around how the brain actually learns — using spaced repetition, active recall, and interleaving.",
  },
  {
    title: "Quick Diagnosis of Weak Points",
    description: "I identify exactly where your child is stuck — not just what chapter they're on, but which foundational concepts are missing.",
  },
  {
    title: "High-Impact Material First",
    description: "We focus on the 20% of material that drives 80% of test performance, so every session counts.",
  },
  {
    title: "Better Retention & Understanding",
    description: "Students don't just memorize — they understand. That means better performance now and in future courses.",
  },
];

const WhyThisWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why This Approach Works
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Most tutoring is just re-explaining what the teacher already said. I do things differently.
            </p>
            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title}>
                  <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 lg:w-[45%]">
            <img
              src={tutoringSession}
              alt="One-on-one tutoring session"
              loading="lazy"
              width={1280}
              height={720}
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;
