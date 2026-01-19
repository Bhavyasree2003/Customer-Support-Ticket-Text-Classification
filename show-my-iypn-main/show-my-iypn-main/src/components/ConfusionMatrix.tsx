import { motion } from "framer-motion";

const categories = ["Billing", "Cancel", "Product", "Refund", "Technical"];
const matrix = [
  [1131, 3, 4, 4, 2],
  [4, 1151, 13, 11, 7],
  [3, 14, 1123, 6, 3],
  [6, 17, 10, 1179, 14],
  [6, 11, 12, 17, 1177]
];

export default function ConfusionMatrix() {
  const maxValue = Math.max(...matrix.flat());

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Header */}
        <div className="flex">
          <div className="w-20 h-10" />
          {categories.map((cat, i) => (
            <div key={i} className="w-16 h-10 flex items-center justify-center text-xs text-muted-foreground">
              {cat}
            </div>
          ))}
        </div>
        
        {/* Matrix */}
        {matrix.map((row, i) => (
          <div key={i} className="flex">
            <div className="w-20 h-14 flex items-center justify-start text-xs text-muted-foreground pr-2">
              {categories[i]}
            </div>
            {row.map((value, j) => {
              const intensity = value / maxValue;
              const isDiagonal = i === j;
              
              return (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i * 5 + j) * 0.02 }}
                  className={`w-16 h-14 flex items-center justify-center text-xs font-mono border border-border/50 rounded-sm m-0.5 ${
                    isDiagonal ? 'bg-primary/20' : 'bg-secondary/50'
                  }`}
                  style={{
                    backgroundColor: isDiagonal
                      ? `hsl(173 80% 50% / ${0.1 + intensity * 0.4})`
                      : `hsl(var(--secondary) / ${0.2 + intensity * 0.3})`
                  }}
                >
                  <span className={isDiagonal ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                    {value}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ))}
        
        {/* Labels */}
        <div className="flex mt-4 justify-center">
          <p className="text-xs text-muted-foreground">Predicted Label →</p>
        </div>
      </div>
    </div>
  );
}
