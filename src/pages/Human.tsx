
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Human = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <div className="container mx-auto pt-32 pb-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Human Connection</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real people with real skills creating real impact in the professional world.
          </p>
        </div>

        {/* Portrait Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Portrait 1 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-3 aspect-h-4 bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Portrait of a woman with laptop" 
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-300">UX Designer who found her dream job through community connections</p>
            </div>
          </div>
          
          {/* Portrait 2 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-3 aspect-h-4 bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Portrait of a man in business attire" 
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">David Chang</h3>
              <p className="text-gray-300">Software Engineer who built his portfolio through meaningful projects</p>
            </div>
          </div>
          
          {/* Portrait 3 */}
          <div className="relative group overflow-hidden rounded-lg">
            <div className="aspect-w-3 aspect-h-4 bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Professional portrait of smiling woman" 
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold">Maya Rodriguez</h3>
              <p className="text-gray-300">Marketing Director who leveraged community endorsements to advance her career</p>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-lg rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">The Human Advantage</h2>
            <p className="text-gray-300 mb-4">In a world of digital profiles and algorithmic matching, we bring the human element back to professional networking.</p>
            <p className="text-gray-300 mb-6">Cofounds celebrates real proof of work, genuine community connections, and the authentic stories behind every career journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Peer Endorsements</h3>
                <p className="text-gray-400">Community vouching means more than anonymous reviews. Real recognition from respected peers.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Project Showcases</h3>
                <p className="text-gray-400">Show what you've actually built, not just what you claim to know. Let your work speak for itself.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Join Our Community of Humans</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Connect with professionals who value authentic relationships and meaningful work.</p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-0">
              Join Our WhatsApp Community
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Human;
