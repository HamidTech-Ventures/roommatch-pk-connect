
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageCircle, Send, Clock, CheckCircle, AlertTriangle,
  User, Home, Calendar, Filter
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OwnerMessaging = () => {
  const { toast } = useToast();
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const [messages] = useState([
    {
      id: '1',
      tenant: 'Hassan Ahmed',
      tenantAvatar: '/api/placeholder/40/40',
      property: 'Green View Hostel',
      room: 'A-101',
      subject: 'Water Leakage Issue',
      message: 'Water leakage in washroom, need urgent repair. The problem started yesterday evening.',
      timestamp: '2 hours ago',
      status: 'pending',
      priority: 'high',
      replies: []
    },
    {
      id: '2',
      tenant: 'Ali Khan',
      tenantAvatar: '/api/placeholder/40/40',
      property: 'Green View Hostel',
      room: 'B-205',
      subject: 'AC Maintenance',
      message: 'AC not working properly, please check. It\'s making strange noises at night.',
      timestamp: '5 hours ago',
      status: 'in-progress',
      priority: 'medium',
      replies: [
        {
          id: 'r1',
          sender: 'owner',
          message: 'I have scheduled a technician visit for tomorrow between 2-4 PM.',
          timestamp: '3 hours ago'
        }
      ]
    },
    {
      id: '3',
      tenant: 'Sara Malik',
      tenantAvatar: '/api/placeholder/40/40',
      property: 'Student Paradise',
      room: 'C-301',
      subject: 'Thank You',
      message: 'Thank you for the quick WiFi fix! Everything is working perfectly now.',
      timestamp: '1 day ago',
      status: 'resolved',
      priority: 'low',
      replies: []
    }
  ]);

  const handleStatusChange = (messageId: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Message status changed to ${newStatus}`,
    });
  };

  const handleSendReply = (messageId: string) => {
    if (!replyText.trim()) return;
    
    toast({
      title: "Reply Sent",
      description: "Your reply has been sent to the tenant",
    });
    setReplyText('');
    setSelectedMessage(null);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-green-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Message Center</h2>
          <p className="text-gray-600">Handle tenant communications and maintenance requests</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filter Messages
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages List */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              Recent Messages
            </CardTitle>
            <CardDescription>Latest communications from your tenants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedMessage === message.id 
                    ? 'border-emerald-500 bg-emerald-50/50' 
                    : 'border-gray-200 bg-white/50 hover:bg-white/70'
                }`}
                onClick={() => setSelectedMessage(message.id)}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={message.tenantAvatar} alt={message.tenant} />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-sm">
                      {message.tenant.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 truncate">{message.tenant}</h4>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(message.priority)}`} />
                        {getStatusIcon(message.status)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{message.property} - Room {message.room}</p>
                    <p className="text-sm font-medium text-gray-800 mb-2">{message.subject}</p>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">{message.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                      <Badge 
                        variant={message.status === 'resolved' ? 'default' : 'secondary'}
                        className={`text-xs ${
                          message.status === 'resolved' ? 'bg-emerald-500' :
                          message.status === 'in-progress' ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                      >
                        {message.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Message Detail & Reply */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md">
          <CardHeader>
            <CardTitle>Message Details & Reply</CardTitle>
            <CardDescription>
              {selectedMessage ? 'Respond to tenant inquiries' : 'Select a message to view details'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedMessage ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {(() => {
                  const message = messages.find(m => m.id === selectedMessage);
                  if (!message) return null;
                  
                  return (
                    <>
                      {/* Message Thread */}
                      <div className="space-y-3 max-h-[300px] overflow-y-auto">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={message.tenantAvatar} alt={message.tenant} />
                              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-xs">
                                {message.tenant.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{message.tenant}</p>
                              <p className="text-xs text-gray-500">{message.timestamp}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">{message.message}</p>
                        </div>

                        {message.replies.map((reply, index) => (
                          <div key={reply.id} className="bg-emerald-50 rounded-lg p-4 ml-4">
                            <div className="flex items-center gap-2 mb-2">
                              <User className="w-4 h-4 text-emerald-600" />
                              <p className="font-medium text-sm">You</p>
                              <p className="text-xs text-gray-500">{reply.timestamp}</p>
                            </div>
                            <p className="text-sm text-gray-700">{reply.message}</p>
                          </div>
                        ))}
                      </div>

                      {/* Status Actions */}
                      <div className="flex gap-2 pt-4 border-t">
                        {message.status === 'pending' && (
                          <>
                            <Button 
                              size="sm" 
                              onClick={() => handleStatusChange(message.id, 'in-progress')}
                              className="bg-blue-500 hover:bg-blue-600"
                            >
                              <Clock className="w-4 h-4 mr-1" />
                              Mark In Progress
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleStatusChange(message.id, 'resolved')}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Mark Resolved
                            </Button>
                          </>
                        )}
                        {message.status === 'in-progress' && (
                          <Button 
                            size="sm" 
                            onClick={() => handleStatusChange(message.id, 'resolved')}
                            className="bg-emerald-500 hover:bg-emerald-600"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Mark Resolved
                          </Button>
                        )}
                      </div>

                      {/* Reply Form */}
                      {message.status !== 'resolved' && (
                        <div className="space-y-3 pt-4 border-t">
                          <label className="text-sm font-medium text-gray-700">Reply to {message.tenant}</label>
                          <Textarea
                            placeholder="Type your reply here..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            rows={3}
                            className="resize-none"
                          />
                          <Button 
                            onClick={() => handleSendReply(message.id)}
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            disabled={!replyText.trim()}
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Reply
                          </Button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Select a message to view details and reply</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default OwnerMessaging;
