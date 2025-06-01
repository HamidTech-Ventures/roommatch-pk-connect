
import { Heart, MapPin, Users, Star, MessageCircle, Wifi, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  gender: string;
  image: string;
  facilities: string[];
  rating: number;
  reviews: number;
  owner: string;
  isBookmarked: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wi-fi':
        return <Wifi className="w-3 h-3" />;
      case 'parking':
        return <Car className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="sm"
          variant="ghost"
          className={`absolute top-3 right-3 rounded-full w-8 h-8 p-0 bg-white/80 hover:bg-white ${
            property.isBookmarked ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${property.isBookmarked ? 'fill-current' : ''}`} />
        </Button>
        <Badge
          className={`absolute top-3 left-3 ${
            property.gender === 'Boys' 
              ? 'bg-blue-500' 
              : property.gender === 'Girls' 
              ? 'bg-pink-500' 
              : 'bg-purple-500'
          }`}
        >
          {property.gender}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg text-gray-800 line-clamp-2 flex-1">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-emerald-600">
              ₹{property.price.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            {property.type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {property.facilities.slice(0, 4).map((facility, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {getFacilityIcon(facility)}
              <span>{facility}</span>
            </div>
          ))}
          {property.facilities.length > 4 && (
            <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              +{property.facilities.length - 4} more
            </div>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-sm">{property.rating}</span>
            <span className="text-gray-500 text-sm">({property.reviews} reviews)</span>
          </div>
          <span className="text-gray-600 text-sm">by {property.owner}</span>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link to={`/property/${property.id}`}>
              View Details
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
