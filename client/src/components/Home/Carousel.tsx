import React, { useState, useEffect } from 'react';
import { Button } from '@fluentui/react-components';
import { PlayCircle24Regular, PauseCircle24Regular } from '@fluentui/react-icons';
import { Announcement } from '../../types';

interface CarouselProps {
  announcements: Announcement[];
}

export const Carousel: React.FC<CarouselProps> = ({ announcements }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % announcements.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, announcements.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="relative overflow-hidden rounded-lg h-[400px]" role="region" aria-label="Announcements carousel">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {announcements.map((announcement, index) => (
          <div
            key={announcement.id}
            className="min-w-full relative"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${announcements.length}`}
          >
            <img
              src={announcement.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
                <p className="text-lg">{announcement.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <Button
          icon={isPlaying ? <PauseCircle24Regular /> : <PlayCircle24Regular />}
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        />
        <Button onClick={handlePrevious} aria-label="Previous slide">
          Previous
        </Button>
        <Button onClick={handleNext} aria-label="Next slide">
          Next
        </Button>
      </div>

      <div className="absolute bottom-4 left-4 flex space-x-2">
        {announcements.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};