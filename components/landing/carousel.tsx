import Image from 'next/image';
import React from 'react';

const dummyData = [
    { id: 1, name: 'React Library', logo: '/logo.png' },
    { id: 2, name: 'Vue Library', logo: '/logo.png' },
    { id: 3, name: 'Angular Library', logo: '/logo.png' },
    { id: 4, name: 'Svelte Library', logo: '/logo.png' },
    { id: 5, name: 'Next.js Library', logo: '/logo.png' },
    { id: 6, name: 'Nuxt Library', logo: '/logo.png' },
    { id: 7, name: 'Gatsby Library', logo: '/logo.png' },
    { id: 8, name: 'Remix Library', logo: '/logo.png' },
    { id: 9, name: 'Ember Library', logo: '/logo.png' },
    { id: 10, name: 'Preact Library', logo: '/logo.png' },
];

const MarqueeRow: React.FC<{ items: typeof dummyData; direction: 'right' | 'left' }> = ({ items, direction }) => {
    const duplicatedItems = [...items, ...items]; // Duplicate for seamless infinite loop
    const itemsLength = items.length; // Cache length for key calculation

    return (
        <div className="marquee overflow-hidden w-full h-20">
            <div className={`track flex items-center h-full ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item.id}-${Math.floor(index / itemsLength)}`}
                        className="item flex items-center gap-3 min-w-[200px] px-4 text-sm font-medium text-foreground"
                    >
                        <Image src={item.logo} alt={item.name} height="50" width="50" className="rounded" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Carousel() {
    return (
        <div className="carousel flex flex-col">
            <MarqueeRow items={dummyData} direction="right" />
            <MarqueeRow items={dummyData} direction="left" />
        </div>
    );
}