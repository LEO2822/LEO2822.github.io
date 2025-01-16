import { SubscribeForm } from "@/components/SubscribeForm";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container relative flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl gradient-text">
            Connecting Businesses with Customers
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            We're building a platform to help businesses understand and serve their customers better. 
            Be the first to know when we launch.
          </p>

          <div className="flex justify-center pt-4">
            <SubscribeForm />
          </div>

          <p className="text-sm text-white/60">
            Join our early access list for exclusive updates and insights.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;