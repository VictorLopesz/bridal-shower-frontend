import React, { useState } from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const [activePosition, setActivePosition] = useState(0);

    const handleClick = () => {
        selectTab();
        setActivePosition(0);
    };

    return (
        <button onClick={handleClick} className="relative">
            <p className={`mr-2 xl:mr-8 lg:mr-8 uppercase text-[#b6b5b5] font-Playfair transition duration-300 ease-in-out font-medium ${active ? 'text-[#152e35]' : ''}`}>
                {children}
            </p>
            <div
                className="absolute bottom-0 left-0 bg-[#1c4a55] h-[2px] transition-all duration-500 rounded-full mb-[12px]"
                style={{ width: `${active ? '96%' : '0%'}`, transform: `translateX(${activePosition}%)` }}
            />
        </button>
    );
};

export default TabButton;
