import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BuildProvider } from "./contexts/BuildContext";
import Home from "./pages/Home";
import Build from "./pages/Build";
import VehicleConfigurator from "./pages/VehicleConfigurator";
import Comparison from "./pages/Comparison";
import Membership from "./pages/Membership";
import HowWeWork from "./pages/HowWeWork";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/build" component={Build} />
      <Route path="/build/:vehicleId" component={VehicleConfigurator} />
      <Route path="/build/:vehicleId/:categoryId" component={Comparison} />
      <Route path="/membership" component={Membership} />
      <Route path="/how-we-work" component={HowWeWork} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <BuildProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </BuildProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
