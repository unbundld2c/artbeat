'use client';

import { useState, useEffect } from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const MoodboardPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Mood cards data
  const moods = [
    {
      id: 1,
      title: "Vibrant Amber",
      subtitle: "Optimism, Joy & Creative Energy",
      mobileTitle: "Sunny Yellow",
      mobileSubtitle: "Bright & Happy",
      image: assets.Mood1,
      bannerDesk: assets.HeroDesk, // Default banner
      bannerMob: assets.HeroMob,
    },
    {
      id: 2,
      title: "Inky Violet",
      subtitle: "Tired, Sad, or Disappointed.",
      mobileTitle: "Creative Purple",
      mobileSubtitle: "Curious & Imaginative",
      image: assets.Mood2,
      bannerDesk: assets.VioletHeroDesk,
      bannerMob: assets.VioletHeroMob,
    },
    {
      id: 3,
      title: "Deep Serenity",
      subtitle: "Calm, Peaceful & Centered",
      mobileTitle: "Calm Blue",
      mobileSubtitle: "Quiet & Peaceful",
      image: assets.Mood3,
      bannerDesk: assets.BlueHeroDesk,
      bannerMob: assets.BlueHeroMob,
    },
    {
      id: 4,
      title: "Cloud Grey",
      subtitle: "Neutral, Unsure & Private.",
      mobileTitle: "Playful Green",
      mobileSubtitle: "Bouncy & Energetic",
      image: assets.Mood4,
      bannerDesk: assets.GreyHeroDesk,
      bannerMob: assets.GreyHeroMob,
    },
  ];

  // Set Vibrant Amber as default selected mood
  const [selectedMood, setSelectedMood] = useState(moods[0]);

  useEffect(() => {
    localStorage.removeItem('selectedMoodBanner');
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    localStorage.setItem('selectedMoodBanner', JSON.stringify({
      desktopImage: mood.bannerDesk,
      mobileImage: mood.bannerMob,
    }));
    window.dispatchEvent(new Event('moodBannerChanged'));
    console.log('Selected mood:', mood);

    handleClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleOverlayClick}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className={`max-w-[1320px] w-full bg-[#FFFCF7] border border-[#FFEDCE] rounded-[40px] py-[20px] md:py-[40px] px-[16px] md:px-[40px] shadow-[0px_2px_12px_0px_#836A3F26] relative max-h-[85vh] md:max-h-[90vh] overflow-y-auto animate-moodboardPopup ${isHeaderVisible ? 'mt-16 md:mt-0' : 'mt-0'}`}>
        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 md:top-10 md:right-10 hover:opacity-70 transition-opacity"
          aria-label="Close moodboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[26px] md:w-[22px] md:h-[36px]" viewBox="0 0 22 36" fill="none">
            <path d="M0.000484467 31.92C2.04848 26.896 4.28848 22.08 6.72048 17.472C4.19248 11.776 2.38448 6.47997 1.29648 1.58397L7.96848 2.15997C8.28849 4.52797 9.08849 8.01597 10.3685 12.624C12.4805 8.33597 14.7525 4.12797 17.1845 -2.67029e-05L21.8405 3.98397C19.1845 7.95197 16.4325 12.624 13.5845 18C15.4085 22.448 17.7445 27.776 20.5925 33.984L14.1125 33.312C12.8645 30.464 11.5205 27.04 10.0805 23.04C7.55248 28.48 5.87248 32.48 5.04048 35.04L0.000484467 31.92Z" fill="#2C2C2C" />
          </svg>
        </button>

        <h2 className="text-[36px] md:text-[48px] font-normal text-[#2c2c2c] mt-[55px] md:mt-0 mb-5 text-center">
          What colour represents your mood today?
        </h2>

        <p className="text-[18px] md:text-[20px] lg:text-[24px] leading-[1.3] text-[#2c2c2c] mb-[20px] md:mb-[40px] text-center">
          Select a colour to tell us how you feel!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[38px]">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className={`bg-white border-[2px] md:border-[4px] rounded-[30px] md:rounded-[40px] px-[20px] md:px-[16px] cursor-pointer transition-all duration-300 ease-in-out flex flex-col items-center hover:-translate-y-1 hover:shadow-[0px_8px_20px_rgba(131,106,63,0.15)] ${selectedMood?.id === mood.id
                ? 'border-[#FFEDCE] shadow-[0px_8px_20px_rgba(131,106,63,0.2)]'
                : 'border-[#CECECE] hover:border-[#FFEDCE]'
                }`}
              onClick={() => handleMoodSelect(mood)}
            >
              <div className="w-full">
                <Image
                  src={mood.image}
                  alt={mood.title}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>
              <div className="px-0 pt-[16px] md:pt-[8px] pb-[14px] md:pb-[12px]">
                {/* Mobile Title */}
                <h3 className="block md:hidden text-[16px] font-bold text-[#2c2c2c] mb-1 text-center leading-[130%]">
                  {mood.mobileTitle}
                </h3>
                {/* Desktop Title */}
                <h3 className="hidden md:block text-[16px] font-bold text-[#2c2c2c] mb-1 text-center leading-[130%]">
                  {mood.title}
                </h3>

                {/* Mobile Subtitle */}
                <p className="block md:hidden text-[14px] font-regular text-[#2c2c2c] m-0 text-center leading-[150%]">
                  {mood.mobileSubtitle}
                </p>
                {/* Desktop Subtitle */}
                <p className="hidden md:block text-[14px] font-regular text-[#2c2c2c] m-0 text-center leading-[150%]">
                  {mood.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodboardPopup;
