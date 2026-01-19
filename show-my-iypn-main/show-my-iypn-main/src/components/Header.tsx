import { motion } from "framer-motion";
import { Brain, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="p-2 rounded-lg bg-primary/10 glow-effect">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Ticket Classifier</h1>
              <p className="text-xs text-muted-foreground">NLP-powered support ticket classification</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Button variant="ghost" size="sm" className="gap-2">
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">View Code</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Paper</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
