import React from 'react';
import HeroAbout from '@/components/AboutUS/HeroAbout';
import MoreAbout from '@/components/AboutUS/MoreAbout';
import Partners from '@/components/AboutUS/Partners';

const page = () => {
    return (
        <div className=''>
            <HeroAbout/>
            <MoreAbout/>
            <Partners/>
        </div>
    );
};

export default page;

