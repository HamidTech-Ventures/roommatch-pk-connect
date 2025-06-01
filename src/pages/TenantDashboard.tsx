
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import TenantMessaging from '@/components/TenantMessaging';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Home, Calendar, DollarSign, User, MapPin, 
  Star, MessageCircle, Settings, Phone
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const TenantDashboard = () => {
  const { user } = useAuth();

  const currentRental = {
    property: 'Green View Hostel',
    room: 'A-101',
    rent: 9000,
    dueDate: '2024-02-01',
    manager: 'Ahmad Ali',
    managerPhone: '+92 300 1234567',
    address: 'Street 5, DHA Phase 2, Lahore',
    moveInDate: '2024-01-15',
    leaseEnd: '2024-12-15'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="mb-8">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Welcome, {user?.name}!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Manage your accommodation and communicate with your property manager
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Rental Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-lg border-0 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-emerald-600" />
                    Current Accommodation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{currentRental.property}</h3>
                    <p className="text-gray-600">Room {currentRental.room}</p>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{currentRental.address}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Rent</span>
                      <span className="font-medium">₹{currentRental.rent.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Next Due</span>
                      <Badge variant="outline">{currentRental.dueDate}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Lease Ends</span>
                      <span className="text-sm">{currentRental.leaseEnd}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Property Manager</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{currentRental.manager}</p>
                        <p className="text-sm text-gray-600">{currentRental.managerPhone}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Pay Rent Online
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Rate Property
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Account Settings
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Messaging Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <TenantMessaging />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TenantDashboard;
