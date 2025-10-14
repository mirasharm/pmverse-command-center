import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import PRDCowriter from "./pages/PRDCowriter";
import PRDReviewer from "./pages/PRDReviewer";
import Educator from "./pages/Educator";
import ReleasePR from "./pages/ReleasePR";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prd-cowriter" element={<PRDCowriter />} />
          <Route path="/prd-reviewer" element={<PRDReviewer />} />
          <Route path="/educator" element={<Educator />} />
          <Route path="/release-pr" element={<ReleasePR />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
