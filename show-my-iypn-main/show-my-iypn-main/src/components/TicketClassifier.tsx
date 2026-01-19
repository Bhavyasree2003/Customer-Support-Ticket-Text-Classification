import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ClassificationResult {
  category: string;
  confidence: number;
  allProbabilities: { category: string; probability: number }[];
}

// Simulated ML model classification (frontend demo)
const classifyTicket = (text: string): ClassificationResult => {
  const lowerText = text.toLowerCase();
  
  // Simple keyword-based classification to simulate the model
  const keywords = {
    "Billing inquiry": ["bill", "payment", "charge", "invoice", "account", "subscription", "price", "cost", "fee"],
    "Technical issue": ["error", "bug", "crash", "not working", "problem", "issue", "broken", "fix", "setup", "install", "network", "slow"],
    "Refund request": ["refund", "money back", "return", "reimburse", "cancel order", "want my money"],
    "Cancellation request": ["cancel", "unsubscribe", "stop", "end subscription", "terminate", "close account"],
    "Product inquiry": ["feature", "how to", "what is", "does it", "can it", "specifications", "compatible", "support"]
  };

  const scores: Record<string, number> = {};
  
  Object.entries(keywords).forEach(([category, words]) => {
    scores[category] = words.reduce((score, word) => {
      return score + (lowerText.includes(word) ? 1 : 0);
    }, 0);
  });

  // Add some randomness to simulate ML uncertainty
  Object.keys(scores).forEach(key => {
    scores[key] += Math.random() * 0.5;
  });

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
  
  const probabilities = Object.entries(scores)
    .map(([category, score]) => ({
      category,
      probability: Math.max(0.05, score / totalScore)
    }))
    .sort((a, b) => b.probability - a.probability);

  // Normalize to sum to 1
  const sum = probabilities.reduce((a, b) => a + b.probability, 0);
  probabilities.forEach(p => p.probability = p.probability / sum);

  return {
    category: probabilities[0].category,
    confidence: probabilities[0].probability,
    allProbabilities: probabilities
  };
};

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  "Billing inquiry": { bg: "bg-category-billing", text: "category-billing", border: "border-billing/30" },
  "Technical issue": { bg: "bg-category-technical", text: "category-technical", border: "border-technical/30" },
  "Refund request": { bg: "bg-category-refund", text: "category-refund", border: "border-refund/30" },
  "Cancellation request": { bg: "bg-category-cancellation", text: "category-cancellation", border: "border-cancellation/30" },
  "Product inquiry": { bg: "bg-category-product", text: "category-product", border: "border-product/30" }
};

const exampleTickets = [
  "I'm having an issue with my product. The software keeps crashing every time I try to open it. Please help me fix this problem.",
  "I would like to request a refund for my recent purchase. The product didn't meet my expectations.",
  "Can you help me understand my recent billing statement? I see a charge I don't recognize.",
  "I want to cancel my subscription effective immediately. Please process this cancellation request.",
  "Does your product support integration with third-party applications? I need more information about features."
];

export default function TicketClassifier() {
  const [inputText, setInputText] = useState("");
  const [isClassifying, setIsClassifying] = useState(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);

  const handleClassify = async () => {
    if (!inputText.trim()) return;
    
    setIsClassifying(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const classification = classifyTicket(inputText);
    setResult(classification);
    setIsClassifying(false);
  };

  const handleExampleClick = (example: string) => {
    setInputText(example);
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-muted-foreground">
          Enter a customer support ticket to classify:
        </label>
        <div className="gradient-border">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste a customer support ticket here..."
            className="min-h-[140px] bg-card border-0 resize-none font-mono text-sm focus-visible:ring-primary/50"
          />
        </div>
        
        <Button
          onClick={handleClassify}
          disabled={!inputText.trim() || isClassifying}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-effect transition-all duration-300"
          size="lg"
        >
          {isClassifying ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Classifying...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Classify Ticket
            </>
          )}
        </Button>
      </div>

      {/* Example Tickets */}
      <div className="space-y-3">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <Sparkles className="w-3 h-3" />
          Try an example:
        </p>
        <div className="flex flex-wrap gap-2">
          {exampleTickets.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors truncate max-w-[200px]"
            >
              {example.substring(0, 40)}...
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Main Result */}
            <div className={`p-6 rounded-lg border ${categoryStyles[result.category]?.bg} ${categoryStyles[result.category]?.border}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Predicted Category</p>
                  <h3 className={`text-2xl font-bold ${categoryStyles[result.category]?.text}`}>
                    {result.category}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Confidence</p>
                  <p className={`text-3xl font-bold font-mono ${categoryStyles[result.category]?.text}`}>
                    {(result.confidence * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Probability Distribution */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Probability Distribution</p>
              {result.allProbabilities.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="flex justify-between text-sm">
                    <span className={categoryStyles[item.category]?.text}>{item.category}</span>
                    <span className="font-mono text-muted-foreground">
                      {(item.probability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.probability * 100}%` }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`h-full rounded-full ${categoryStyles[item.category]?.bg.replace('bg-category', 'bg')}`}
                      style={{
                        background: `hsl(var(--${item.category.toLowerCase().replace(' ', '-').replace('_', '-')}))`
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
