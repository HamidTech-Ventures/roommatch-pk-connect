
import { Search, MapPin, TrendingUp, Smartphone, Users, Backpack } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { number: "5000+", label: "Happy Students" },
    { number: "1200+", label: "Verified Properties" },
    { number: "50+", label: "Cities Covered" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-100">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Accommodation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-light">
            Connecting students and young professionals with safe, affordable, and convenient 
            housing solutions across Pakistan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 shadow-lg">
              <Search className="w-5 h-5 mr-2" />
              Find Accommodation
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-200 hover:bg-gray-700 hover:text-white px-8">
              <MapPin className="w-5 h-5 mr-2" />
              List Your Property
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-100">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student with Mobile Icon */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span className="font-medium text-gray-200">Mobile Search</span>
          </div>
          <p className="text-gray-300 font-light">Find rooms on-the-go</p>
        </div>
      </div>

      {/* Student with Backpack Icon */}
      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <Backpack className="w-4 h-4 text-purple-400" />
            <span className="font-medium text-gray-200">Student Housing</span>
          </div>
          <p className="text-gray-300 font-light">Perfect for students</p>
        </div>
      </div>

      {/* Additional Student Group Icon */}
      <div className="absolute top-1/2 left-5 hidden xl:block transform -translate-y-1/2">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <Users className="w-6 h-6 text-green-400" />
        </div>
      </div>

      {/* Trending Location */}
      <div className="absolute top-32 right-20 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-sm border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="font-medium text-gray-200">Trending</span>
          </div>
          <p className="text-gray-300 font-light">Gulberg, Lahore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
