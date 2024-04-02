import { useState, useRef } from 'react';
import { useAppSelector } from "../utils/hooks";

const Button = () => {
    const buttonList: string[] = [
        'All',
        'Music',
        'Gaming',
        'News',
        'Movies',
        'Sports',
        'Fashion',
        'Food',
        'Travel',
        'Fitness',
        'Education',
        'Science',
        'Technology',
        'Comedy',
        'Art',
        'Animals',
        'Cars',
        'Beauty',
        'Books',
        'Crafts'
    ];

    const isMenuOpen = useAppSelector((state) => state.app.isMenuOpen);

    const [scrollX, setScrollX] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollOffset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollOffset;
            setScrollX(scrollRef.current.scrollLeft);
        }
    };

    const classNames = `h-20 ${isMenuOpen ? 'w-[85%]' : 'left-0'} fixed z-9 top-16 right-0 bg-white shadow-lg`;

    return (
        <div className={classNames}>
            <div className="flex justify-between items-center px-4 mt-3 overflow-hidden">
                {/* Left arrow button */}
                <button onClick={() => handleScroll(-150)} className="text-gray-500 hover:text-gray-700 focus:outline-none p-3 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Button list */}
                <div 
                    ref={scrollRef} 
                    className="h-10 flex gap-2" 
                    style={{
                        overflowX: 'auto',
                        scrollbarWidth: 'none', /* Firefox */
                        
                    }}
                >
                    {buttonList.map((item, index) => (
                        <button key={index} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right arrow button */}
                <button onClick={() => handleScroll(150)} className="text-gray-500 hover:text-gray-700 focus:outline-none p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Button;
