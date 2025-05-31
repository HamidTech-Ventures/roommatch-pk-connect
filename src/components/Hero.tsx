
import { Search, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { number: "5000+", label: "Happy Students" },
    { number: "1200+", label: "Verified Properties" },
    { number: "50+", label: "Cities Covered" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Accommodation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Connecting students and young professionals with safe, affordable, and convenient 
            housing solutions across Pakistan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8">
              <Search className="w-5 h-5 mr-2" />
              Find Accommodation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8">
              <MapPin className="w-5 h-5 mr-2" />
              List Your Property
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute top-20 left-10 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium">Trending</span>
          </div>
          <p className="opacity-80">Gulberg, Lahore</p>
        </div>
      </div>

      <div className="absolute bottom-20 right-10 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-sm">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Popular Area</span>
          </div>
          <p className="opacity-80">DHA, Karachi</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
