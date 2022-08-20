import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import feature from "../features/ImagesData";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Hero />
        <section className="feature">
          <h2 className="sr-only">Features</h2>
          {feature.map((featureimg, index) => (
            <Features
              key={index}
              icon={featureimg.icon}
              alt={featureimg.alt}
              title={featureimg.title}
              description={featureimg.description}
            />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
