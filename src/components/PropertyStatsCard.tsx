
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface PropertyStatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient: string;
  delay: number;
}

const PropertyStatsCard = ({ title, value, icon: Icon, gradient, delay }: PropertyStatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay, 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        z: 50,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="group perspective-1000"
    >
      <Card className={`shadow-xl border-0 bg-gradient-to-br ${gradient} text-white overflow-hidden relative`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <motion.p 
                className="text-white/90 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.2 }}
              >
                {title}
              </motion.p>
              <motion.p 
                className="text-3xl font-bold mt-2"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
              >
                {value}
              </motion.p>
            </div>
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: delay + 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="bg-white/20 rounded-full p-3"
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyStatsCard;
