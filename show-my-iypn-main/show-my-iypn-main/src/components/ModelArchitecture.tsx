import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stages = [
  { name: "Text Input", description: "Raw ticket text", color: "billing" },
  { name: "Preprocessing", description: "NLTK stopwords removal", color: "product" },
  { name: "TF-IDF", description: "Text vectorization", color: "technical" },
  { name: "MLP Classifier", description: "Neural network", color: "refund" },
  { name: "Category", description: "5 classes", color: "cancellation" }
];

export default function ModelArchitecture() {
  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="flex items-center gap-2 md:gap-4"
          >
            <div className={`p-4 rounded-lg bg-${stage.color}/10 border border-${stage.color}/20 text-center min-w-[100px]`}>
              <p className={`text-sm font-semibold category-${stage.color}`}>{stage.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{stage.description}</p>
            </div>
            {index < stages.length - 1 && (
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
