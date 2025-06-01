
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import PropertyStatsCard from '@/components/PropertyStatsCard';
import TenantManagement from '@/components/TenantManagement';
import OwnerMessaging from '@/components/OwnerMessaging';
import PropertyAnalytics from '@/components/PropertyAnalytics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Home, Users, MessageCircle, Plus, Settings, 
  TrendingUp, DollarSign, Calendar, AlertCircle
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const OwnerDashboard = () => {
  const { user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -15,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const [properties] = useState([
    {
      id: '1',
      title: 'Green View Hostel',
      location: 'DHA Phase 2, Lahore',
      totalRooms: 20,
      occupiedRooms: 18,
      monthlyRevenue: 180000,
      rating: 4.5,
      status: 'active',
      inquiries: 12,
      lastWeekInquiries: 8
    },
    {
      id: '2',
      title: 'Student Paradise',
      location: 'Gulberg, Lahore',
      totalRooms: 15,
      occupiedRooms: 12,
      monthlyRevenue: 120000,
      rating: 4.2,
      status: 'active',
      inquiries: 8,
      lastWeekInquiries: 5
    },
    {
      id: '3',
      title: 'Modern Living PG',
      location: 'Model Town, Lahore',
      totalRooms: 25,
      occupiedRooms: 20,
      monthlyRevenue: 200000,
      rating: 4.7,
      status: 'pending',
      inquiries: 15,
      lastWeekInquiries: 10
    }
  ]);

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const totalRooms = properties.reduce((sum, prop) => sum + prop.totalRooms, 0);
  const occupiedRooms = properties.reduce((sum, prop) => sum + prop.occupiedRooms, 0);
  const totalInquiries = properties.reduce((sum, prop) => sum + prop.inquiries, 0);
  const occupancyRate = ((occupiedRooms / totalRooms) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-8"
      >
        {/* Enhanced Header with 3D Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl -z-10" />
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Welcome back, {user?.name}!
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-xl"
          >
            Manage your property empire with advanced analytics and seamless communication
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Overview with 3D Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <PropertyStatsCard
            title="Total Properties"
            value={properties.length}
            icon={Home}
            gradient="from-emerald-500 to-emerald-600"
            delay={0}
          />
          <PropertyStatsCard
            title="Monthly Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            gradient="from-blue-500 to-blue-600"
            delay={0.1}
          />
          <PropertyStatsCard
            title="Occupancy Rate"
            value={`${occupancyRate}%`}
            icon={TrendingUp}
            gradient="from-purple-500 to-purple-600"
            delay={0.2}
          />
          <PropertyStatsCard
            title="Total Inquiries"
            value={totalInquiries}
            icon={MessageCircle}
            gradient="from-orange-500 to-orange-600"
            delay={0.3}
          />
        </motion.div>

        {/* Enhanced Tabs with 3D Navigation */}
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="properties" className="space-y-6">
            <motion.div
              className="bg-white/70 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TabsList className="grid w-full grid-cols-4 bg-transparent">
                <TabsTrigger 
                  value="properties" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
                >
                  Properties
                </TabsTrigger>
                <TabsTrigger 
                  value="tenants"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white"
                >
                  Tenants
                </TabsTrigger>
                <TabsTrigger 
                  value="messages"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  Messages
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white"
                >
                  Analytics
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="properties">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-gray-800">Property Portfolio</h2>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Property
                    </Button>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property, index) => (
                    <motion.div
                      key={property.id}
                      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 5,
                        z: 50,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      className="group"
                    >
                      <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <CardHeader className="relative z-10">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl text-gray-800">{property.title}</CardTitle>
                            <Badge 
                              variant={property.status === 'active' ? 'default' : 'secondary'}
                              className={property.status === 'active' ? 'bg-emerald-500' : ''}
                            >
                              {property.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-600">
                            {property.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="bg-white/50 rounded-lg p-3">
                                <p className="text-gray-600">Occupancy</p>
                                <p className="font-bold text-lg">{property.occupiedRooms}/{property.totalRooms}</p>
                              </div>
                              <div className="bg-white/50 rounded-lg p-3">
                                <p className="text-gray-600">Revenue</p>
                                <p className="font-bold text-lg">₹{(property.monthlyRevenue/1000).toFixed(0)}K</p>
                              </div>
                              <div className="bg-white/50 rounded-lg p-3">
                                <p className="text-gray-600">Rating</p>
                                <p className="font-bold text-lg">{property.rating} ⭐</p>
                              </div>
                              <div className="bg-white/50 rounded-lg p-3">
                                <p className="text-gray-600">Inquiries</p>
                                <p className="font-bold text-lg">{property.inquiries}</p>
                              </div>
                            </div>
                            <Button variant="outline" className="w-full group-hover:bg-emerald-50 transition-colors">
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
              <TenantManagement />
            </TabsContent>

            <TabsContent value="messages">
              <OwnerMessaging />
            </TabsContent>

            <TabsContent value="analytics">
              <PropertyAnalytics properties={properties} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OwnerDashboard;
