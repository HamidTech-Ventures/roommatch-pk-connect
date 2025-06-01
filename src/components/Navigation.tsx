import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, User, ChevronDown, LogOut, Home, Search, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardPath = () => {
    if (user?.role === 'admin') return '/admin';
    if (user?.role === 'owner') return '/owner-dashboard';
    return '/tenant-dashboard';
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/f96db169-907e-4ee1-9147-19a73231f22a.png"
              alt="RoomMatch PK"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-emerald-600">RoomMatch PK</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link to="/find-rooms" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Find Rooms
            </Link>
            <Link to="/list-property" className="text-gray-700 hover:text-emerald-600 transition-colors">
              List Property
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{user?.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white shadow-lg border-0">
                  <DropdownMenuItem asChild>
                    <Link to={getDashboardPath()} className="flex items-center">
                      <Home className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/find-rooms" className="flex items-center">
                      <Search className="w-4 h-4 mr-2" />
                      Find Rooms
                    </Link>
                  </DropdownMenuItem>
                  {user?.role === 'owner' && (
                    <DropdownMenuItem asChild>
                      <Link to="/list-property" className="flex items-center">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Property
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-emerald-600">Home</Link>
              <Link to="/find-rooms" className="text-gray-700 hover:text-emerald-600">Find Rooms</Link>
              <Link to="/list-property" className="text-gray-700 hover:text-emerald-600">List Property</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-600">Contact</Link>
              
              {isAuthenticated ? (
                <>
                  <Link to={getDashboardPath()} className="text-gray-700 hover:text-emerald-600">Dashboard</Link>
                  <Button variant="ghost" onClick={handleLogout} className="text-red-600 justify-start">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-emerald-600">Login</Link>
                  <Link to="/signup" className="text-emerald-600 font-medium">Sign Up</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
