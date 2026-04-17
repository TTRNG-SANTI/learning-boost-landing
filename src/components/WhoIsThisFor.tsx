import { CheckCircle } from "lucide-react";

const problems = [
  "Falling behind in class and feeling lost",
  "Struggling to understand math or chemistry concepts",
  "A big test or exam coming up soon",
  "Poor study habits making it hard to retain information",
  "Grades dropping despite putting in effort",
  "Feeling frustrated or unmotivated about school",
];

const WhoIsThisFor = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Is This Your Child?
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          If any of these sound familiar, SANTI Tutoring can help.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((problem) => (
            <div key={problem} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{problem}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
