
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, MessageCircle, Phone, Mail, Calendar,
  Home, DollarSign, AlertCircle, CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TenantManagement = () => {
  const { toast } = useToast();

  const [tenants] = useState([
    { 
      id: '1', 
      name: 'Hassan Ahmed', 
      email: 'hassan@email.com',
      phone: '+92 300 1234567',
      room: 'A-101', 
      property: 'Green View Hostel', 
      rentPaid: true, 
      moveIn: '2024-01-15',
      rentAmount: 9000,
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: '2', 
      name: 'Ali Khan', 
      email: 'ali@email.com',
      phone: '+92 301 2345678',
      room: 'B-205', 
      property: 'Green View Hostel', 
      rentPaid: false, 
      moveIn: '2024-02-01',
      rentAmount: 8500,
      avatar: '/api/placeholder/40/40'
    },
    { 
      id: '3', 
      name: 'Sara Malik', 
      email: 'sara@email.com',
      phone: '+92 302 3456789',
      room: 'C-301', 
      property: 'Student Paradise', 
      rentPaid: true, 
      moveIn: '2024-01-20',
      rentAmount: 9500,
      avatar: '/api/placeholder/40/40'
    }
  ]);

  const handleContactTenant = (tenantName: string, method: string) => {
    toast({
      title: "Contact Initiated",
      description: `${method} contact initiated with ${tenantName}`,
    });
  };

  const handleRentReminder = (tenantName: string) => {
    toast({
      title: "Reminder Sent",
      description: `Rent reminder sent to ${tenantName}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <User className="w-6 h-6 text-emerald-600" />
            Tenant Management
          </CardTitle>
          <CardDescription>Monitor and communicate with your tenants</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {tenants.map((tenant, index) => (
              <motion.div
                key={tenant.id}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card className="shadow-lg border border-gray-200/50 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar className="h-12 w-12 border-2 border-emerald-500/20">
                          <AvatarImage src={tenant.avatar} alt={tenant.name} />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                            {tenant.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{tenant.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Home className="w-3 h-3" />
                          {tenant.property} - Room {tenant.room}
                        </div>
                      </div>
                      <Badge 
                        variant={tenant.rentPaid ? 'default' : 'destructive'}
                        className={tenant.rentPaid ? 'bg-emerald-500' : ''}
                      >
                        {tenant.rentPaid ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {tenant.rentPaid ? 'Paid' : 'Pending'}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Monthly Rent</span>
                        <span className="font-medium">₹{tenant.rentAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Move-in Date</span>
                        <span className="font-medium">{tenant.moveIn}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-3 h-3" />
                        {tenant.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-3 h-3" />
                        {tenant.phone}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 group-hover:bg-emerald-50 transition-colors"
                        onClick={() => handleContactTenant(tenant.name, 'Message')}
                      >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Message
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="group-hover:bg-blue-50 transition-colors"
                        onClick={() => handleContactTenant(tenant.name, 'Call')}
                      >
                        <Phone className="w-3 h-3" />
                      </Button>
                      {!tenant.rentPaid && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="group-hover:bg-orange-50 transition-colors"
                          onClick={() => handleRentReminder(tenant.name)}
                        >
                          <DollarSign className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TenantManagement;
