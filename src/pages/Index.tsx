
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import TestimonialCard from "@/components/TestimonialCard";
import StoryCard from "@/components/StoryCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const heroRef = useScrollAnimation();
  const jobsRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const storiesRef = useScrollAnimation();
  const caseStudiesRef = useScrollAnimation();

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
      isNew: true
    },
    {
      title: "Product Designer",
      company: "DesignMasters",
      location: "New York",
      salary: "$90k - $120k",
      tags: ["Figma", "UI/UX", "Product Design"]
    },
    {
      title: "Backend Engineer",
      company: "ServerLogic",
      location: "San Francisco",
      salary: "$130k - $160k",
      tags: ["Node.js", "AWS", "Database"]
    },
    {
      title: "Marketing Manager",
      company: "GrowthPulse",
      location: "Remote",
      salary: "$85k - $110k",
      tags: ["Growth", "Strategy", "Analytics"]
    }
  ];

  // Sample testimonial data
  const testimonials = [
    {
      content: "Joining this community was the best career decision I've made. Within weeks, I had multiple interviews lined up with top companies.",
      author: "Sarah Johnson",
      position: "Product Designer at Stripe",
      rating: 5
    },
    {
      content: "What sets Nexus apart is the quality of the network. Every connection I've made has been valuable for my professional growth.",
      author: "Michael Chen",
      position: "Full Stack Developer",
      rating: 5
    },
    {
      content: "The focus on proof of work makes all the difference. I found a job that truly values my skills rather than just my resume.",
      author: "Jessica Williams",
      position: "UX Researcher",
      rating: 4
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

  // Sample case studies
  const caseStudies = [
    {
      title: "Building a Design System From Scratch",
      company: "DesignCo",
      description: "How Maria showcased her design leadership by creating a comprehensive design system that reduced development time by 40%.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Design Systems", "UI/UX", "Leadership"]
    },
    {
      title: "Scaling an API to Handle 10M+ Requests",
      company: "TechScale",
      description: "James documented his approach to optimizing backend performance, which became his ticket to a senior engineering role.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Backend", "Performance", "Architecture"]
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div 
          ref={heroRef}
          className="container mx-auto text-center animate-on-scroll"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto mb-6">
            Get Hired Based On Your <span className="text-black">Actual Work</span> & Community
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join our exclusive network where proof of work matters more than resumes. Connect with top companies looking for proven talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-black/90 px-6">
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
      <section id="jobs" className="py-20 bg-gray-50">
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
      <section id="reviews" className="py-20 bg-white">
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
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section id="stories" className="py-20 bg-gray-50">
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
      
      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white">
        <div 
          ref={caseStudiesRef}
          className="container mx-auto px-6 animate-on-scroll"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Case Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed proof of work showcases that helped members land their dream roles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                company={study.company}
                description={study.description}
                image={study.image}
                tags={study.tags}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-black text-white hover:bg-black/90">
              Showcase Your Work
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
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
