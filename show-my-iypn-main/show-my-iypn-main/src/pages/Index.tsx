import { motion } from "framer-motion";
import { Target, Zap, BarChart3, Database, Brain, Layers } from "lucide-react";
import Header from "@/components/Header";
import TicketClassifier from "@/components/TicketClassifier";
import heroBg from "@/assets/hero-bg.jpg";
import MetricsCard from "@/components/MetricsCard";
import ModelArchitecture from "@/components/ModelArchitecture";
import ConfusionMatrix from "@/components/ConfusionMatrix";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">ML Model Demo</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Support{" "}
              <span className="gradient-text">Ticket Classifier</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              An NLP-powered multi-class classification model using TF-IDF vectorization 
              and Multi-Layer Perceptron (MLP) neural network, achieving{" "}
              <span className="text-primary font-semibold">97% accuracy</span> on 8,469 support tickets.
            </p>
          </motion.div>
          
          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <MetricsCard
              title="Accuracy"
              value="97%"
              subtitle="Test set performance"
              icon={Target}
              delay={0.1}
            />
            <MetricsCard
              title="F1 Score"
              value="0.97"
              subtitle="Weighted average"
              icon={BarChart3}
              delay={0.2}
            />
            <MetricsCard
              title="Training Samples"
              value="8,469"
              subtitle="Support tickets"
              icon={Database}
              delay={0.3}
            />
            <MetricsCard
              title="Categories"
              value="5"
              subtitle="Ticket types"
              icon={Layers}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Zap className="w-8 h-8 inline-block text-primary mr-2" />
              Try the Model
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enter any customer support ticket text and see how the model classifies it in real-time.
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto">
            <div className="gradient-border p-6 md:p-8 bg-card rounded-xl">
              <TicketClassifier />
            </div>
          </div>
        </div>
      </section>

      {/* Model Architecture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">
              <Brain className="w-8 h-8 inline-block text-primary mr-2" />
              Model Architecture
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              End-to-end NLP pipeline from raw text to classification.
            </p>
          </motion.div>
          
          <ModelArchitecture />
          
          {/* Technical Details */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-2">Text Preprocessing</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lowercase conversion</li>
                <li>• Punctuation removal</li>
                <li>• NLTK stopwords filtering</li>
                <li>• Text normalization</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-2">Feature Extraction</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• TF-IDF Vectorization</li>
                <li>• N-gram features (1-2)</li>
                <li>• Max features: 5000</li>
                <li>• Sublinear TF scaling</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <h3 className="font-semibold text-primary mb-2">Neural Network</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• MLP Classifier</li>
                <li>• Hidden layers: (256, 128)</li>
                <li>• Activation: ReLU</li>
                <li>• Optimizer: Adam</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Confusion Matrix Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">
              <BarChart3 className="w-8 h-8 inline-block text-primary mr-2" />
              Confusion Matrix
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visualization of model predictions vs actual labels on training data.
            </p>
          </motion.div>
          
          <div className="max-w-2xl mx-auto gradient-border p-6 bg-card rounded-xl">
            <ConfusionMatrix />
          </div>
          
          {/* Per-class metrics */}
          <div className="mt-10 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Classification Report</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Category</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Precision</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Recall</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">F1-Score</th>
                    <th className="text-center py-3 px-4 text-muted-foreground font-medium">Support</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Billing inquiry", p: "0.98", r: "0.99", f1: "0.98", s: "1144" },
                    { name: "Cancellation request", p: "0.96", r: "0.97", f1: "0.97", s: "1186" },
                    { name: "Product inquiry", p: "0.96", r: "0.98", f1: "0.97", s: "1149" },
                    { name: "Refund request", p: "0.98", r: "0.96", f1: "0.97", s: "1226" },
                    { name: "Technical issue", p: "0.98", r: "0.96", f1: "0.97", s: "1223" }
                  ].map((row, i) => (
                    <motion.tr
                      key={row.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium">{row.name}</td>
                      <td className="py-3 px-4 text-center font-mono text-primary">{row.p}</td>
                      <td className="py-3 px-4 text-center font-mono text-primary">{row.r}</td>
                      <td className="py-3 px-4 text-center font-mono text-primary">{row.f1}</td>
                      <td className="py-3 px-4 text-center font-mono text-muted-foreground">{row.s}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Built with scikit-learn, NLTK, and TF-IDF vectorization
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Model trained on customer support ticket dataset • 8,469 samples • 5 categories
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
