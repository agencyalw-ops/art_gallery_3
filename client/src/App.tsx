import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/shop"} component={Shop} />
        <Route path={"/gallery"} component={Gallery} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

/**
 * App Component
 * Premium art gallery with multipage routing
 * Color scheme: Dark green background with cream accents
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
