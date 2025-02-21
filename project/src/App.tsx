import React from 'react';
import { Download, Users, BarChart3, MessageCircle, Languages, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          {/* Modern and Larger Logo */}
          <div className="mb-8">
            <img 
              src="src/img/logo.jpg" // Replace with your logo path
              alt="Agri Mart Logo"
              className="h-24 md:h-32 mx-auto" // Larger logo with responsive size
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Agri Mart
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Your Trusted Marketplace for Fresh Produce. Connecting farmers with reliable buyers, ensuring fair pricing and continuous supply.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors">
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* App Graphical Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Check out the Agri Mart App
          </h2>
          {/* Mobile App Image */}
          <img 
            src="src/img/view.jpg" // Replace with your mobile app graphical image path
            alt="Agri Mart App"
            className="mx-auto max-w-xs md:max-w-md"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Features that Empower You
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-green-600" />}
              title="Marketplace"
              description="Connect directly with farmers and buyers for seamless transactions"
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-green-600" />}
              title="Real-Time Market Data"
              description="Stay updated with latest market prices and predictions"
            />
            <FeatureCard 
              icon={<MessageCircle className="w-8 h-8 text-green-600" />}
              title="Direct Communication"
              description="Negotiate prices and build lasting partnerships"
            />
            <FeatureCard 
              icon={<Download className="w-8 h-8 text-green-600" />}
              title="Easy Access"
              description="Download and start trading in minutes"
            />
            <FeatureCard 
              icon={<Languages className="w-8 h-8 text-green-600" />}
              title="Multilingual Support"
              description="Available in Sinhala, Tamil, and English"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            How Agri Mart Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number="1"
              title="Create Profile"
              description="Sign up and create your profile as a farmer or buyer"
            />
            <StepCard 
              number="2"
              title="Connect"
              description="Browse listings and connect with potential partners"
            />
            <StepCard 
              number="3"
              title="Trade"
              description="Negotiate prices and complete secure transactions"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1507103011901-e954d6ec0988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              quote="Agri Mart has transformed how I sell my produce. I now have reliable buyers and better prices."
              name="Kumar Perera"
              role="Vegetable Farmer"
            />
            <TestimonialCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              quote="Finding quality produce has never been easier. The platform helps me maintain a steady supply chain."
              name="Sarah Fernando"
              role="Restaurant Owner"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Join the Agri Mart Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start connecting with farmers and buyers today. Download the app and transform your agricultural business.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Download Now <Download size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Agri Mart</h3>
              <p className="text-gray-400">
                Connecting farmers and buyers for a sustainable future.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Agri Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, quote, name, role }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-start gap-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-600 mb-4">{quote}</p>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
