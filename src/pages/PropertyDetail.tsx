
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Star, Heart, MessageCircle, Phone, Wifi, Car, Users, Shield, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PropertyDetail = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();

  // Mock property data
  const property = {
    id: 1,
    title: 'Modern Shared Room near LUMS University',
    description: 'A comfortable and well-furnished shared room located just 5 minutes from LUMS University. The room comes with all modern amenities including high-speed Wi-Fi, air conditioning, and daily housekeeping. Perfect for students looking for a peaceful study environment.',
    location: 'DHA Phase 5, Lahore',
    price: 18000,
    type: 'Shared Room',
    gender: 'Boys',
    images: [
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ],
    facilities: ['Wi-Fi', 'AC', 'Laundry', 'Food', 'Security', 'Parking'],
    rating: 4.5,
    reviews: 12,
    owner: {
      name: 'Ahmad Ali',
      phone: '+92 300 1234567',
      avatar: '',
      verified: true
    },
    availability: 'Available from March 1st',
    roommates: 2,
    address: 'Street 15, Block Y, DHA Phase 5, Lahore'
  };

  const reviews = [
    {
      id: 1,
      user: 'Hassan Ahmed',
      rating: 5,
      comment: 'Excellent place! Very clean and the owner is very cooperative.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      user: 'Ali Raza',
      rating: 4,
      comment: 'Good location and facilities. Highly recommended for students.',
      date: '1 month ago'
    }
  ];

  const handleRatingSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });

    setRating(0);
    setComment('');
  };

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wi-fi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'security':
        return <Shield className="w-4 h-4" />;
      default:
        return null;
    }
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
        {/* Property Images */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="md:col-span-2">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {property.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 object-cover rounded-xl shadow-md"
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="shadow-lg border-0 mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-800 mb-2">
                        {property.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className={`${
                          property.gender === 'Boys' ? 'bg-blue-500' : 
                          property.gender === 'Girls' ? 'bg-pink-500' : 'bg-purple-500'
                        }`}>
                          {property.gender}
                        </Badge>
                        <Badge variant="outline">{property.type}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{property.rating}</span>
                          <span className="text-gray-500">({property.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`${isBookmarked ? 'text-red-500' : 'text-gray-400'}`}
                    >
                      <Heart className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{property.description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3">Facilities & Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {property.facilities.map((facility, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg"
                          >
                            {getFacilityIcon(facility)}
                            <span className="text-sm font-medium">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Roommates</p>
                        <p className="font-semibold">{property.roommates}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Available</p>
                        <p className="font-semibold text-sm">March 1st</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <MapPin className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-sm">DHA Phase 5</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <Shield className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Security</p>
                        <p className="font-semibold text-sm">24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews Section */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Reviews & Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{review.user}</h4>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <p className="text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Review */}
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-medium mb-4">Write a Review</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Your Rating</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className="p-1"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <Textarea
                        placeholder="Share your experience..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                      />
                      <Button onClick={handleRatingSubmit} className="bg-emerald-600 hover:bg-emerald-700">
                        Submit Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Price & Contact */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">
                    ₹{property.price.toLocaleString()}
                  </div>
                  <p className="text-gray-500">per month</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full h-12">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Owner
                </Button>
              </CardContent>
            </Card>

            {/* Owner Info */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Property Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>{property.owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{property.owner.name}</h4>
                    <p className="text-sm text-gray-500">Verified Owner</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Experienced property owner with multiple verified listings in Lahore.
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{property.address}</p>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                  <p className="text-sm text-gray-600">View on Map</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
