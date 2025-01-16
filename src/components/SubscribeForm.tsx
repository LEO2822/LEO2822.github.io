import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thanks for subscribing!",
      description: "We'll keep you updated on our progress.",
    });

    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 
                 text-slate-900 dark:text-white 
                 placeholder:text-slate-500 dark:placeholder:text-slate-400
                 focus:border-blue-500 dark:focus:border-blue-400 
                 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};