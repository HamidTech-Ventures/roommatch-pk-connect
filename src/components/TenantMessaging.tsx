
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, Send, AlertTriangle, Wrench, 
  Droplets, Zap, Wifi, Car, Clock, CheckCircle 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TenantMessaging = () => {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const { toast } = useToast();

  const [previousMessages] = useState([
    {
      id: '1',
      message: 'WiFi connection is very slow in room A-101',
      category: 'internet',
      priority: 'medium',
      timestamp: '2 days ago',
      status: 'resolved',
      response: 'Issue has been fixed. New router installed on your floor.'
    },
    {
      id: '2',
      message: 'AC making strange noise at night',
      category: 'electrical',
      priority: 'high',
      timestamp: '5 days ago',
      status: 'in-progress',
      response: 'Technician will visit tomorrow between 2-4 PM.'
    }
  ]);

  const categories = [
    { value: 'plumbing', label: 'Plumbing', icon: Droplets },
    { value: 'electrical', label: 'Electrical', icon: Zap },
    { value: 'internet', label: 'Internet/WiFi', icon: Wifi },
    { value: 'maintenance', label: 'General Maintenance', icon: Wrench },
    { value: 'parking', label: 'Parking', icon: Car },
    { value: 'other', label: 'Other', icon: AlertTriangle }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !category) {
      toast({
        title: "Please fill all fields",
        description: "Message and category are required.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Your request has been sent to the property manager.",
    });

    setMessage('');
    setCategory('');
    setPriority('medium');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* New Message Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              Contact Property Manager
            </CardTitle>
            <CardDescription>
              Report maintenance issues or ask questions about your accommodation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          <div className="flex items-center gap-2">
                            <cat.icon className="w-4 h-4" />
                            {cat.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Can wait</SelectItem>
                      <SelectItem value="medium">Medium - Within a week</SelectItem>
                      <SelectItem value="high">High - Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  placeholder="Describe your issue or question in detail..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Previous Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Previous Messages</CardTitle>
            <CardDescription>Your conversation history with the property manager</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previousMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(msg.status)}
                      <Badge variant={
                        msg.priority === 'high' ? 'destructive' :
                        msg.priority === 'medium' ? 'default' : 'secondary'
                      }>
                        {msg.priority} priority
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{msg.message}</p>
                  
                  {msg.response && (
                    <div className="bg-gray-50 rounded p-3 mt-3">
                      <p className="text-sm text-gray-600 font-medium mb-1">Property Manager Response:</p>
                      <p className="text-sm text-gray-700">{msg.response}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default TenantMessaging;
