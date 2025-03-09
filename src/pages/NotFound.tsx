
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <div className="space-y-6 max-w-md animate-fade-in">
        <div className="text-6xl md:text-8xl font-bold text-primary">404</div>
        <h1 className="text-2xl md:text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            <span>Return Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
