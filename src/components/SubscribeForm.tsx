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
        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign up"}
      </Button>
    </form>
  );
};