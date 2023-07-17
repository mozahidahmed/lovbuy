import React from 'react';
import ContectBanner from '@/components/ContactUS/ContectBanner';
import ContactMap from '@/components/ContactUS/ContactMap';
import ContactApply from '@/components/ContactUS/ContactApply';

const page = () => {
    return (
        <div className='w-full'>
            <ContectBanner />
            <ContactMap />
            <ContactApply />
        </div>
    );
};

export default page;
