
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Human = () => {
  // Array of portrait images with diverse individuals
  const portraits = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Title Section */}
        <div className="container mx-auto px-4 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Human Connection</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real people with real skills creating real impact in the professional world.
          </p>
        </div>

        {/* Portrait Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 md:gap-2">
            {portraits.map((portrait, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden bg-gray-900 relative group"
              >
                <img 
                  src={portrait} 
                  alt={`Portrait ${index + 1}`} 
                  className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Human Advantage Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gray-900/30 backdrop-blur-sm border-gray-800 text-white p-8 md:p-10 mx-auto max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">The Human Advantage</h2>
            <p className="text-gray-300 text-center mb-8">
              In a world increasingly driven by algorithms and automation, the human touch remains our most valuable asset.
              Cofounds celebrates the diversity, creativity, and unique perspectives that only humans can provide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Real Connections</h3>
                <p className="text-gray-400">
                  Build relationships based on authentic interactions, not just digital profiles. Human-to-human connections drive true innovation.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Diverse Perspectives</h3>
                <p className="text-gray-400">
                  Every face in our community brings unique experiences and insights that create a richer, more creative professional environment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Human;
