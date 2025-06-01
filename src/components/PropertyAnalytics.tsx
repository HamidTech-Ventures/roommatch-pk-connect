
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Home, DollarSign, Eye } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  totalRooms: number;
  occupiedRooms: number;
  monthlyRevenue: number;
  rating: number;
  status: string;
  inquiries: number;
  lastWeekInquiries: number;
}

interface PropertyAnalyticsProps {
  properties: Property[];
}

const PropertyAnalytics = ({ properties }: PropertyAnalyticsProps) => {
  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 450000, occupancy: 85 },
    { month: 'Feb', revenue: 480000, occupancy: 88 },
    { month: 'Mar', revenue: 520000, occupancy: 92 },
    { month: 'Apr', revenue: 500000, occupancy: 90 },
    { month: 'May', revenue: 540000, occupancy: 95 },
    { month: 'Jun', revenue: 560000, occupancy: 97 }
  ];

  const propertyPerformance = properties.map(property => ({
    name: property.title.split(' ')[0],
    occupancy: (property.occupiedRooms / property.totalRooms * 100),
    revenue: property.monthlyRevenue / 1000,
    inquiries: property.inquiries
  }));

  const inquiryTrends = [
    { day: 'Mon', inquiries: 12 },
    { day: 'Tue', inquiries: 19 },
    { day: 'Wed', inquiries: 15 },
    { day: 'Thu', inquiries: 22 },
    { day: 'Fri', inquiries: 28 },
    { day: 'Sat', inquiries: 35 },
    { day: 'Sun', inquiries: 25 }
  ];

  const occupancyDistribution = [
    { name: 'Occupied', value: properties.reduce((sum, p) => sum + p.occupiedRooms, 0), color: '#10b981' },
    { name: 'Vacant', value: properties.reduce((sum, p) => sum + (p.totalRooms - p.occupiedRooms), 0), color: '#f59e0b' }
  ];

  const totalRevenue = properties.reduce((sum, prop) => sum + prop.monthlyRevenue, 0);
  const avgOccupancy = properties.reduce((sum, prop) => sum + (prop.occupiedRooms / prop.totalRooms), 0) / properties.length * 100;
  const totalInquiries = properties.reduce((sum, prop) => sum + prop.inquiries, 0);
  const avgRating = properties.reduce((sum, prop) => sum + prop.rating, 0) / properties.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Revenue', value: `₹${totalRevenue.toLocaleString()}`, icon: DollarSign, trend: '+12.5%', color: 'emerald' },
          { title: 'Avg Occupancy', value: `${avgOccupancy.toFixed(1)}%`, icon: Home, trend: '+3.2%', color: 'blue' },
          { title: 'Total Inquiries', value: totalInquiries, icon: Eye, trend: '+8.1%', color: 'purple' },
          { title: 'Avg Rating', value: avgRating.toFixed(1), icon: TrendingUp, trend: '+0.3', color: 'orange' }
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500 text-xs">{metric.trend}</span>
                    </div>
                  </div>
                  <div className={`bg-${metric.color}-100 rounded-full p-3`}>
                    <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Revenue & Occupancy Trends</CardTitle>
              <CardDescription>Monthly performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <Line yAxisId="right" type="monotone" dataKey="occupancy" stroke="#3b82f6" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Property Performance */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Property Performance</CardTitle>
              <CardDescription>Occupancy rates by property</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={propertyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="occupancy" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Inquiry Trends */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Weekly Inquiry Trends</CardTitle>
              <CardDescription>Daily inquiry patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={inquiryTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="inquiries" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Occupancy Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Occupancy Distribution</CardTitle>
              <CardDescription>Overall room utilization</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={occupancyDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {occupancyDistribution.map((entry, index) => (
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
    </motion.div>
  );
};

export default PropertyAnalytics;
