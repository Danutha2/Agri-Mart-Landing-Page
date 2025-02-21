import React from "react";
import {
  Download,
  Users,
  BarChart3,
  MessageCircle,
  Languages,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./styles.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="header-container bg-green-700 text-white">
        {/* Main Header */}
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Section (aligned to the left) */}
          <div className="flex items-center space-x-4 ml-0">
            <img
              src="/img/logo.jpg"
              alt="Agri Mart Logo"
              className="logo-img h-24 w-24 rounded-lg object-cover"
            />
          </div>

          {/* "Agri Mart" Text centered */}
          <div className="flex-grow text-center">
            <h1 className="header-title text-4xl font-extrabold tracking-tight text-white">
              Agri Mart
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Agri Mart
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Your Trusted Marketplace for Fresh Produce. Connecting farmers with
            reliable buyers, ensuring fair pricing and continuous supply.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 transition-colors">
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* App Graphical Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Check out the Agri Mart App
          </h2>
          <img
            src="/img/view.jpg" // Replace with your mobile app graphical image path
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
              icon={<Users className="w-10 h-10 text-green-600" />}
              title="Marketplace"
              description="Connect directly with farmers and buyers for seamless transactions"
            />
            <FeatureCard
              icon={<BarChart3 className="w-10 h-10 text-green-600" />}
              title="Real-Time Market Data"
              description="Stay updated with latest market prices and predictions"
            />
            <FeatureCard
              icon={<MessageCircle className="w-10 h-10 text-green-600" />}
              title="Direct Communication"
              description="Negotiate prices and build lasting partnerships"
            />
            <FeatureCard
              icon={<Download className="w-10 h-10 text-green-600" />}
              title="Easy Access"
              description="Download and start trading in minutes"
            />
            <FeatureCard
              icon={<Languages className="w-10 h-10 text-green-600" />}
              title="Multilingual Support"
              description="Available in Sinhala, Tamil, and English"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Join the Agri Mart Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start connecting with farmers and buyers today. Download the app and
            transform your agricultural business.
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
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:agrimart44@gmail.com?subject=Contact%20from%20Agri%20Mart&body=Hello%20Agri%20Mart,%20I%20would%20like%20to%20get%20in%20touch."
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/people/AgriMart/61571491774000/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/agrimart_/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://lnkd.in/eXjpcBjU"
                  className="text-gray-400 hover:text-white transition-colors"
                >
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

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
    <div className="icon mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
    <div className="step-number text-5xl font-bold text-green-600 mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
