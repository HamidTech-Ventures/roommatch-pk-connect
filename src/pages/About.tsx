
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Heart, Home, Shield, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Built specifically for students and young professionals across Pakistan'
    },
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All properties are verified for safety and authenticity'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'AI-powered recommendations based on your preferences'
    },
    {
      icon: Heart,
      title: 'Community Focused',
      description: 'Building a trusted community of students and property owners'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Happy Students' },
    { number: '1200+', label: 'Verified Properties' },
    { number: '50+', label: 'Cities Covered' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'Ahmad Hassan',
      role: 'CEO & Founder',
      bio: 'Former student who experienced the housing struggle firsthand',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    {
      name: 'Fatima Khan',
      role: 'Head of Operations',
      bio: 'Expert in student housing with 8+ years experience',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b602'
    },
    {
      name: 'Ali Raza',
      role: 'Technology Lead',
      bio: 'Building the future of student accommodation technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-8"
          >
            <Home className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            About RoomMatch PK
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We're revolutionizing how students and young professionals find accommodation 
            across Pakistan. Our mission is to make quality housing accessible, affordable, 
            and stress-free for everyone.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="shadow-xl border-0 h-full">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-emerald-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To eliminate the stress and uncertainty from student housing by providing 
                  a trusted platform that connects students with verified, affordable 
                  accommodations. We believe every student deserves a safe, comfortable 
                  place to call home while pursuing their dreams.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="shadow-xl border-0 h-full">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-emerald-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become Pakistan's most trusted student housing platform, where finding 
                  the perfect accommodation is as easy as a few clicks. We envision a future 
                  where geographical barriers don't limit educational opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose RoomMatch PK?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <Card className="shadow-lg border-0 h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <Card className="shadow-lg border-0 text-center">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center"
        >
          <Card className="shadow-xl border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                RoomMatch PK was born from personal experience. As students ourselves, we faced 
                the challenges of finding safe, affordable accommodation in unfamiliar cities. 
                We spent countless hours searching through unreliable listings, dealing with 
                unverified properties, and struggling to find trustworthy landlords.
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed text-lg">
                That's when we decided to build the platform we wished existed - one that 
                prioritizes student safety, affordability, and convenience. Today, RoomMatch PK 
                serves thousands of students across Pakistan, making their accommodation search 
                stress-free and reliable.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
