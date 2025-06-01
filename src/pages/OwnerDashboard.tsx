
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, Users, MessageCircle, Plus, Settings, 
  TrendingUp, DollarSign, Calendar, AlertCircle,
  CheckCircle, Clock, User, MapPin
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const OwnerDashboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const [properties] = useState([
    {
      id: '1',
      title: 'Green View Hostel',
      location: 'DHA Phase 2, Lahore',
      totalRooms: 20,
      occupiedRooms: 18,
      monthlyRevenue: 180000,
      rating: 4.5,
      status: 'active'
    },
    {
      id: '2',
      title: 'Student Paradise',
      location: 'Gulberg, Lahore',
      totalRooms: 15,
      occupiedRooms: 12,
      monthlyRevenue: 120000,
      rating: 4.2,
      status: 'active'
    },
    {
      id: '3',
      title: 'Modern Living PG',
      location: 'Model Town, Lahore',
      totalRooms: 25,
      occupiedRooms: 20,
      monthlyRevenue: 200000,
      rating: 4.7,
      status: 'pending'
    }
  ]);

  const [tenants] = useState([
    { id: '1', name: 'Hassan Ahmed', room: 'A-101', property: 'Green View Hostel', rentPaid: true, moveIn: '2024-01-15' },
    { id: '2', name: 'Ali Khan', room: 'B-205', property: 'Green View Hostel', rentPaid: false, moveIn: '2024-02-01' },
    { id: '3', name: 'Sara Malik', room: 'C-301', property: 'Student Paradise', rentPaid: true, moveIn: '2024-01-20' }
  ]);

  const [messages] = useState([
    {
      id: '1',
      tenant: 'Hassan Ahmed',
      property: 'Green View Hostel',
      room: 'A-101',
      message: 'Water leakage in washroom, need urgent repair',
      timestamp: '2 hours ago',
      status: 'pending',
      priority: 'high'
    },
    {
      id: '2',
      tenant: 'Ali Khan',
      property: 'Green View Hostel',
      room: 'B-205',
      message: 'AC not working properly, please check',
      timestamp: '5 hours ago',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: '3',
      tenant: 'Sara Malik',
      property: 'Student Paradise',
      room: 'C-301',
      message: 'Thank you for the quick WiFi fix!',
      timestamp: '1 day ago',
      status: 'resolved',
      priority: 'low'
    }
  ]);

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const totalRooms = properties.reduce((sum, prop) => sum + prop.totalRooms, 0);
  const occupiedRooms = properties.reduce((sum, prop) => sum + prop.occupiedRooms, 0);
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(1);

  const handleMessageAction = (messageId: string, action: 'resolve' | 'progress') => {
    toast({
      title: action === 'resolve' ? 'Message Resolved' : 'Message In Progress',
      description: `The maintenance request has been marked as ${action === 'resolve' ? 'resolved' : 'in progress'}.`,
    });
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
            Welcome back, {user?.name}!
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Manage your properties and tenants from your dashboard
          </motion.p>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="shadow-lg border-0 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Total Properties</p>
                  <p className="text-3xl font-bold">{properties.length}</p>
                </div>
                <Home className="h-8 w-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Monthly Revenue</p>
                  <p className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Occupancy Rate</p>
                  <p className="text-3xl font-bold">{occupancyRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Active Tenants</p>
                  <p className="text-3xl font-bold">{tenants.length}</p>
                </div>
                <Users className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="tenants">Tenants</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="properties">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">My Properties</h2>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Property
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{property.title}</CardTitle>
                          <Badge variant={property.status === 'active' ? 'default' : 'secondary'}>
                            {property.status}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {property.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Occupancy</span>
                            <span className="font-medium">{property.occupiedRooms}/{property.totalRooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Monthly Revenue</span>
                            <span className="font-medium">₹{property.monthlyRevenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Rating</span>
                            <span className="font-medium">{property.rating} ⭐</span>
                          </div>
                          <Button variant="outline" className="w-full">
                            <Settings className="w-4 h-4 mr-2" />
                            Manage Property
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="tenants">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Current Tenants</CardTitle>
                  <CardDescription>Manage your property tenants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tenants.map((tenant, index) => (
                      <motion.div
                        key={tenant.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="bg-emerald-100 rounded-full p-2">
                            <User className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">{tenant.name}</h4>
                            <p className="text-sm text-gray-600">{tenant.property} - Room {tenant.room}</p>
                            <p className="text-xs text-gray-500">Move-in: {tenant.moveIn}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={tenant.rentPaid ? 'default' : 'destructive'}>
                            {tenant.rentPaid ? 'Paid' : 'Pending'}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="messages">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Maintenance Requests</CardTitle>
                  <CardDescription>Handle tenant maintenance and support requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-gray-900">{message.tenant}</h4>
                            <p className="text-sm text-gray-600">{message.property} - Room {message.room}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={
                                message.priority === 'high' ? 'destructive' :
                                message.priority === 'medium' ? 'default' : 'secondary'
                              }
                            >
                              {message.priority}
                            </Badge>
                            <span className="text-xs text-gray-500">{message.timestamp}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{message.message}</p>
                        <div className="flex items-center space-x-2">
                          {message.status === 'pending' && (
                            <>
                              <Button 
                                size="sm" 
                                onClick={() => handleMessageAction(message.id, 'progress')}
                              >
                                <Clock className="w-4 h-4 mr-1" />
                                In Progress
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleMessageAction(message.id, 'resolve')}
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Resolve
                              </Button>
                            </>
                          )}
                          {message.status === 'in-progress' && (
                            <Badge variant="default">
                              <Clock className="w-3 h-3 mr-1" />
                              In Progress
                            </Badge>
                          )}
                          {message.status === 'resolved' && (
                            <Badge variant="secondary">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Resolved
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="analytics">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>Property performance and revenue insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced analytics dashboard coming soon...</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default OwnerDashboard;
