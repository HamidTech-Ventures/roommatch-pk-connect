
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, Filter, MapPin, SlidersHorizontal } from 'lucide-react';

const FindRooms = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Modern Shared Room near LUMS',
      location: 'DHA Phase 5, Lahore',
      price: 18000,
      type: 'Shared Room',
      gender: 'Boys',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      facilities: ['Wi-Fi', 'AC', 'Laundry', 'Food'],
      rating: 4.5,
      reviews: 12,
      owner: 'Ahmad Ali',
      isBookmarked: false
    },
    {
      id: 2,
      title: 'Luxury Private Room with Balcony',
      location: 'Clifton, Karachi',
      price: 35000,
      type: 'Private Room',
      gender: 'Girls',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      facilities: ['Wi-Fi', 'AC', 'Parking', 'Security', 'Gym'],
      rating: 4.8,
      reviews: 25,
      owner: 'Fatima Khan',
      isBookmarked: true
    },
    {
      id: 3,
      title: 'Affordable Hostel near University',
      location: 'G-9, Islamabad',
      price: 12000,
      type: 'Hostel',
      gender: 'Mixed',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      facilities: ['Wi-Fi', 'Food', 'Laundry', 'Study Room'],
      rating: 4.2,
      reviews: 8,
      owner: 'Hassan Ahmed',
      isBookmarked: false
    },
    {
      id: 4,
      title: 'Spacious Flat for Professionals',
      location: 'Johar Town, Lahore',
      price: 45000,
      type: 'Flat',
      gender: 'Mixed',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      facilities: ['Wi-Fi', 'AC', 'Parking', 'Security', 'Kitchen'],
      rating: 4.6,
      reviews: 18,
      owner: 'Ali Raza',
      isBookmarked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Find Your Perfect Room
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Discover comfortable and affordable accommodations across Pakistan
          </motion.p>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Enter city or area (e.g., Lahore, Karachi)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48 h-12">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hostel">Hostel</SelectItem>
                <SelectItem value="shared">Shared Room</SelectItem>
                <SelectItem value="private">Private Room</SelectItem>
                <SelectItem value="flat">Flat</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-12 px-8 bg-emerald-600 hover:bg-emerald-700">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <span className="text-sm text-gray-600">
              {properties.length} properties found
            </span>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-6 bg-gray-50 rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Budget Range (PKR)</Label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={5000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Gender Preference</Label>
                  <div className="space-y-2">
                    {['Boys', 'Girls', 'Mixed'].map((gender) => (
                      <div key={gender} className="flex items-center space-x-2">
                        <Checkbox id={gender} />
                        <Label htmlFor={gender} className="text-sm">{gender}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Facilities</Label>
                  <div className="space-y-2">
                    {['Wi-Fi', 'AC', 'Food', 'Laundry', 'Parking', 'Security'].map((facility) => (
                      <div key={facility} className="flex items-center space-x-2">
                        <Checkbox id={facility} />
                        <Label htmlFor={facility} className="text-sm">{facility}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Property Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
            Load More Properties
          </Button>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default FindRooms;
