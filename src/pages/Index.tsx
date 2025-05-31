
import { useState } from "react";
import { Search, MapPin, Users, Shield, Star, Filter, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [priceRange, setPriceRange] = useState([5000, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Comfortable Shared Room near University",
      location: "Gulberg, Lahore",
      price: 15000,
      type: "Shared Room",
      gender: "Boys",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      facilities: ["Wi-Fi", "AC", "Laundry", "Food"],
      rating: 4.5,
      reviews: 12,
      owner: "Ahmad Ali",
      isBookmarked: false
    },
    {
      id: 2,
      title: "Private Room with Attached Bathroom",
      location: "DHA Phase 2, Karachi",
      price: 25000,
      type: "Private Room",
      gender: "Girls",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      facilities: ["Wi-Fi", "AC", "Parking", "Security"],
      rating: 4.8,
      reviews: 8,
      owner: "Fatima Khan",
      isBookmarked: true
    },
    {
      id: 3,
      title: "Modern Flat for Young Professionals",
      location: "F-7, Islamabad",
      price: 35000,
      type: "Flat",
      gender: "Mixed",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      facilities: ["Wi-Fi", "Gym", "Parking", "Food"],
      rating: 4.7,
      reviews: 15,
      owner: "Hassan Ahmed",
      isBookmarked: false
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find your perfect accommodation with AI-powered search and filtering"
    },
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All properties are verified for safety and authenticity"
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Built specifically for students and young professionals"
    },
    {
      icon: MapPin,
      title: "Location-Based",
      description: "Discover accommodations near your university or workplace"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <Navigation />
      
      <Hero />

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Find Your Perfect Accommodation
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter city or area (e.g., Lahore, Karachi, Islamabad)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="h-12 text-lg"
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
                    <SelectItem value="pg">PG</SelectItem>
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
                  <Filter className="w-4 h-4" />
                  Advanced Filters
                </Button>
                <span className="text-sm text-gray-600">
                  {properties.length} properties found
                </span>
              </div>

              {showFilters && (
                <div className="mt-6 p-6 bg-gray-50 rounded-xl">
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
                        {["Boys", "Girls", "Mixed"].map((gender) => (
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
                        {["Wi-Fi", "AC", "Food", "Laundry", "Parking", "Security"].map((facility) => (
                          <div key={facility} className="flex items-center space-x-2">
                            <Checkbox id={facility} />
                            <Label htmlFor={facility} className="text-sm">{facility}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Accommodations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Why Choose RoomMatch PK?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're dedicated to helping students and young professionals find safe, 
            affordable, and convenient accommodations across Pakistan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Room?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have found their ideal accommodation through RoomMatch PK
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              Sign Up as Student
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
