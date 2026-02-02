'use client';

import { useState, useEffect } from 'react';
import { assets } from '@/Assets/assets';
import Hero from './Hero';

const DynamicHero = () => {
    const [bannerImages, setBannerImages] = useState({
        desktopImage: assets.HeroDesk,
        mobileImage: assets.HeroMob,
    });

    useEffect(() => {
        // Check localStorage for saved mood banner
        const savedBanner = localStorage.getItem('selectedMoodBanner');
        if (savedBanner) {
            const parsed = JSON.parse(savedBanner);
            setBannerImages({
                desktopImage: parsed.desktopImage,
                mobileImage: parsed.mobileImage,
            });
        }

        // Listen for storage changes (when mood is selected)
        const handleStorageChange = () => {
            const updatedBanner = localStorage.getItem('selectedMoodBanner');
            if (updatedBanner) {
                const parsed = JSON.parse(updatedBanner);
                setBannerImages({
                    desktopImage: parsed.desktopImage,
                    mobileImage: parsed.mobileImage,
                });
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Custom event for same-page localStorage updates
        window.addEventListener('moodBannerChanged', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('moodBannerChanged', handleStorageChange);
        };
    }, []);

    return (
        <Hero
            desktopImage={bannerImages.desktopImage}
            mobileImage={bannerImages.mobileImage}
        />
    );
};

export default DynamicHero;
