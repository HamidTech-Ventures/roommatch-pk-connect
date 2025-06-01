import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  Users, Home, MessageCircle, Star, CheckCircle, XCircle, 
  TrendingUp, AlertTriangle, Calendar, Eye, UserCheck, Building
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [pendingProperties, setPendingProperties] = useState([
    {
      id: 1,
      title: 'Modern Apartment near University',
      owner: 'Ahmad Ali',
      location: 'Lahore',
      price: 25000,
      submittedAt: '2024-01-15',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Shared Room in DHA',
      owner: 'Sara Khan',
      location: 'Karachi',
      price: 18000,
      submittedAt: '2024-01-14',
      status: 'pending'
    }
  ]);

  const [propertyOwners] = useState([
    {
      id: '1',
      name: 'Ahmad Ali',
      email: 'ahmad@example.com',
      phone: '+92 300 1234567',
      properties: 3,
      totalRevenue: 180000,
      rating: 4.5,
      joinDate: '2023-06-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Sara Khan',
      email: 'sara@example.com',
      phone: '+92 301 2345678',
      properties: 2,
      totalRevenue: 120000,
      rating: 4.2,
      joinDate: '2023-08-20',
      status: 'active'
    },
    {
      id: '3',
      name: 'Hassan Ahmed',
      email: 'hassan@example.com',
      phone: '+92 302 3456789',
      properties: 1,
      totalRevenue: 50000,
      rating: 4.0,
      joinDate: '2024-01-10',
      status: 'pending'
    }
  ]);

  const [recentQueries, setRecentQueries] = useState([
    {
      id: 1,
      user: 'Hassan Ahmed',
      type: 'Property Inquiry',
      property: 'Modern Room near LUMS',
      message: 'Is this property still available?',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      user: 'Fatima Khan',
      type: 'Report',
      property: 'Hostel in F-7',
      message: 'Property details seem incorrect',
      timestamp: '5 hours ago'
    }
  ]);

  const { toast } = useToast();

  const stats = {
    totalUsers: 1245,
    totalProperties: 387,
    pendingApprovals: 12,
    totalRevenue: 125000,
    propertyOwners: 24,
    activeTenants: 156
  };

  const chartData = [
    { month: 'Jan', properties: 65, users: 234 },
    { month: 'Feb', properties: 78, users: 298 },
    { month: 'Mar', properties: 92, users: 367 },
    { month: 'Apr', properties: 104, users: 423 },
    { month: 'May', properties: 118, users: 489 },
    { month: 'Jun', properties: 134, users: 562 }
  ];

  const pieData = [
    { name: 'Shared Rooms', value: 45, color: '#10b981' },
    { name: 'Private Rooms', value: 30, color: '#3b82f6' },
    { name: 'Hostels', value: 15, color: '#f59e0b' },
    { name: 'Flats', value: 10, color: '#ef4444' }
  ];

  const handlePropertyAction = (propertyId: number, action: 'approve' | 'reject') => {
    setPendingProperties(prev => 
      prev.map(prop => 
        prop.id === propertyId 
          ? { ...prop, status: action === 'approve' ? 'approved' : 'rejected' }
          : prop
      ).filter(prop => prop.status === 'pending')
    );

    toast({
      title: `Property ${action}d`,
      description: `The property has been successfully ${action}d.`,
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
            Admin Dashboard
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg"
          >
            Manage properties, users, and monitor platform activity
          </motion.p>
        </div>

        {/* Enhanced Stats Overview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8"
        >
          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↗ +12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Properties</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalProperties}</p>
                </div>
                <Home className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↗ +8% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Property Owners</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.propertyOwners}</p>
                </div>
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↗ +15% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Tenants</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.activeTenants}</p>
                </div>
                <UserCheck className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↗ +10% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.pendingApprovals}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
              <p className="text-xs text-orange-600 mt-2">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-xs text-green-600 mt-2">↗ +15% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs defaultValue="properties" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="owners">Property Owners</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="queries">Queries</TabsTrigger>
          </TabsList>

          {/* Properties Tab - keep existing code */}
          <TabsContent value="properties">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Pending Property Approvals</CardTitle>
                  <CardDescription>
                    Review and approve new property listings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingProperties.map((property, index) => (
                      <motion.div
                        key={property.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{property.title}</h4>
                          <p className="text-sm text-gray-600">
                            by {property.owner} • {property.location} • ₹{property.price.toLocaleString()}/month
                          </p>
                          <p className="text-xs text-gray-500">Submitted on {property.submittedAt}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handlePropertyAction(property.id, 'approve')}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handlePropertyAction(property.id, 'reject')}
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* New Property Owners Tab */}
          <TabsContent value="owners">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Property Owner Management</CardTitle>
                  <CardDescription>
                    Manage registered property owners and their performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Owner</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Properties</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {propertyOwners.map((owner) => (
                        <TableRow key={owner.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{owner.name}</p>
                              <p className="text-sm text-gray-500">Joined {owner.joinDate}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="text-sm">{owner.email}</p>
                              <p className="text-sm text-gray-500">{owner.phone}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{owner.properties} properties</Badge>
                          </TableCell>
                          <TableCell>₹{owner.totalRevenue.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              {owner.rating}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={owner.status === 'active' ? 'default' : 'secondary'}>
                              {owner.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <MessageCircle className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Keep existing tabs */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Growth Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="properties" fill="#10b981" />
                        <Bar dataKey="users" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="shadow-lg border-0">
                  <CardHeader>
                    <CardTitle>Property Types Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="queries">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Recent User Queries & Reports</CardTitle>
                  <CardDescription>
                    Monitor user inquiries and reported issues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentQueries.map((query, index) => (
                      <motion.div
                        key={query.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{query.user}</h4>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant={query.type === 'Report' ? 'destructive' : 'default'}>
                                {query.type}
                              </Badge>
                              <span className="text-sm text-gray-600">{query.property}</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{query.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{query.message}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Reply
                          </Button>
                          <Button size="sm" variant="outline">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Resolve
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="users">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage registered users and property owners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">User management interface coming soon...</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Admin;
