import React from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const buttonClasses = active ? 'border-b-2 border-[#e7c161] text-[#e7c161] transition duration-300 ease-in-out'
        : ''

    return (
        <button onClick={selectTab}>
            <p className={`mr-2 xl:mr-8 lg:mr-8 uppercase text-[#727E65] font-Playfair transition duration-300 ease-in-out font-medium ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton;