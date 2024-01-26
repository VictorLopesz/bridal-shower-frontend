import React from 'react';

const TabButton = ({ active, selectTab, children }: any) => {
    const buttonClasses = active ? 'border-b-2 border-[#e7c161] text-[#e7c161]'
        : ''

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 text-[#727E65] font-Playfair font-medium ${buttonClasses}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton;