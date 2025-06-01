import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindRooms from "./pages/FindRooms";
import ListProperty from "./pages/ListProperty";
import PropertyDetail from "./pages/PropertyDetail";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import TenantDashboard from "./pages/TenantDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/find-rooms" 
              element={
                <ProtectedRoute>
                  <FindRooms />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/list-property" 
              element={
                <ProtectedRoute>
                  <ListProperty />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/property/:id" 
              element={
                <ProtectedRoute>
                  <PropertyDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/owner-dashboard" 
              element={
                <ProtectedRoute ownerOnly>
                  <OwnerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/tenant-dashboard" 
              element={
                <ProtectedRoute>
                  <TenantDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute adminOnly>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
