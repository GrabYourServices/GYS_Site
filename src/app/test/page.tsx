"use client"
import React, { useRef, useEffect } from 'react';

const Test = () => {
  const sectionRefs = Array.from({ length: 4 }, () => useRef<HTMLDivElement | null>(null));

  const scrollToSection = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const currentSectionIndex = Math.floor(scrollY / window.innerHeight);

    if (currentSectionIndex !== -1) {
      scrollToSection(currentSectionIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      {sectionRefs.map((sectionRef, index) => (
        <div key={index} style={{ height: '100vh' }} ref={sectionRef}>
          <h2>Section {index + 1}</h2>
          <p>Your section content goes here...</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
