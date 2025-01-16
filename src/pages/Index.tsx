import { SubscribeForm } from "@/components/SubscribeForm";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <AuroraBackground>
      <ThemeToggle />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center text-center px-4 space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-slate-950 dark:text-white">
          Connecting Businesses with Customers
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-200 max-w-2xl mx-auto">
          We're building a platform to help businesses understand and serve their customers better. 
          Be the first to know when we launch.
        </p>

        <div className="flex justify-center pt-4">
          <SubscribeForm />
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          Join our early access list for exclusive updates and insights.
        </p>
      </motion.div>
    </AuroraBackground>
  );
};

export default Index;