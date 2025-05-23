
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import TestimonialCard from "@/components/TestimonialCard";
import StoryCard from "@/components/StoryCard";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const heroRef = useScrollAnimation();
  const jobsRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const storiesRef = useScrollAnimation();

  // Initialize scroll animations
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(element => {
        observer.observe(element);
      });

      return () => {
        elements.forEach(element => {
          observer.unobserve(element);
        });
      };
    };

    return animateElements();
  }, []);

  // Sample job data
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$120k - $150k",
      tags: ["React", "TypeScript", "5+ Years"],
      isNew: true,
      color: "bg-accent-blue"
    },
    {
      title: "Product Designer",
      company: "DesignMasters",
      location: "New York",
      salary: "$90k - $120k",
      tags: ["Figma", "UI/UX", "Product Design"],
      color: "bg-accent-purple"
    },
    {
      title: "Backend Engineer",
      company: "ServerLogic",
      location: "San Francisco",
      salary: "$130k - $160k",
      tags: ["Node.js", "AWS", "Database"],
      color: "bg-accent-green"
    },
    {
      title: "Marketing Manager",
      company: "GrowthPulse",
      location: "Remote",
      salary: "$85k - $110k",
      tags: ["Growth", "Strategy", "Analytics"],
      color: "bg-accent-pink"
    }
  ];

  // Sample testimonial data
  const testimonials = [
    {
      content: "Joining this community was the best career decision I've made. Within weeks, I had multiple interviews lined up with top companies.",
      author: "Sarah Johnson",
      position: "Product Designer at Stripe",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "What sets Cofounds apart is the quality of the network. Every connection I've made has been valuable for my professional growth.",
      author: "Michael Chen",
      position: "Full Stack Developer",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      content: "The focus on proof of work makes all the difference. I found a job that truly values my skills rather than just my resume.",
      author: "Jessica Williams",
      position: "UX Researcher",
      rating: 4,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  // Sample success stories
  const stories = [
    {
      title: "From Freelancer to Lead Designer in 3 Months",
      excerpt: "How David leveraged his portfolio and community connections to land his dream role.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "David Miller",
      date: "Oct 12, 2023"
    },
    {
      title: "Breaking Into Tech Without a CS Degree",
      excerpt: "Emma's journey from marketing to software engineering through project-based learning.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Emma Roberts",
      date: "Sep 5, 2023"
    },
    {
      title: "How I Doubled My Salary in One Year",
      excerpt: "John shares the exact strategy he used to rapidly advance his career in product management.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "John Doe",
      date: "Aug 22, 2023"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section with colorful background elements */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-blue-50 to-purple-50 rounded-bl-full opacity-70 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-yellow-50 to-transparent rounded-tr-full opacity-70 -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100 blob opacity-30 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-100 blob opacity-30 -z-10"></div>
        
        <div 
          ref={heroRef}
          className="container mx-auto text-center relative z-10 animate-on-scroll"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto mb-6">
            Find Your Dream Role Based On Your <span className="text-gradient">Real Work</span> & Community
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join our vibrant community where your actual work speaks louder than resumes. Connect with forward-thinking companies seeking proven talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 px-6 border-0">
              <MessageSquare className="h-5 w-5 mr-2" />
              Join Our WhatsApp Community
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('jobs')}
              className="border-gray-300 hover:border-gray-400 px-6"
            >
              Browse Open Positions
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => scrollToSection('jobs')} 
              className="flex flex-col items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span className="mb-2">Scroll to explore</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Jobs Board Section */}
      <section id="jobs" className="py-20 bg-pattern-dots">
        <div 
          ref={jobsRef}
          className="container mx-auto px-6 animate-on-scroll"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl">
                Exclusive opportunities from companies that value demonstrated skills and real-world experience.
              </p>
            </div>
            <Button 
              variant="link" 
              className="hidden md:flex items-center mt-4 md:mt-0 text-black"
            >
              View all positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                tags={job.tags}
                isNew={job.isNew}
                className={job.color}
              />
            ))}
          </div>
          
          <div className="flex md:hidden justify-center mt-8">
            <Button variant="link" className="flex items-center text-black">
              View all positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div 
          ref={reviewsRef}
          className="container mx-auto px-6 animate-on-scroll"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of professionals who have advanced their careers through our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                rating={testimonial.rating}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section id="stories" className="py-20 bg-pattern-dots">
        <div 
          ref={storiesRef}
          className="container mx-auto px-6 animate-on-scroll"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-2xl">
                Real experiences from members who transformed their careers through our community.
              </p>
            </div>
            <Button 
              variant="link" 
              className="hidden md:flex items-center mt-4 md:mt-0 text-black"
            >
              View all stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <StoryCard
                key={index}
                title={story.title}
                excerpt={story.excerpt}
                imageUrl={story.imageUrl}
                author={story.author}
                date={story.date}
              />
            ))}
          </div>
          
          <div className="flex md:hidden justify-center mt-8">
            <Button variant="link" className="flex items-center text-black">
              View all stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-10">
            Join our exclusive community today and connect with employers who value demonstrated skills over traditional resumes.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90">
            <MessageSquare className="h-5 w-5 mr-2" />
            Join Our WhatsApp Community
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
