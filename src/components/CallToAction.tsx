import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join Our Gaming Community?
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100">
          Create an account to start contributing to our collaborative gaming wiki. 
          Add your favorite games, edit existing entries, and connect with other gamers.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="/register"
            className="px-8 py-3 bg-white text-purple-600 font-medium rounded-md hover:bg-purple-50 transition-colors text-center shadow-md"
          >
            Create Account
          </a>
          
          <a 
            href="/about"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;