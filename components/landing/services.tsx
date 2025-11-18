"use client"
import { useState } from "react"
import SvgComponent from "./Svg1"
import SVGComponent2 from "./Svg2"
import SVGComponent3 from "./Svg3"
import SVGComponent4 from "./Svg4"

type HoveredKey = 'svg1' | 'svg2' | 'svg3' | 'svg4';

type AnimatingStates = Record<HoveredKey, boolean>;

interface Card {
  key: HoveredKey;
  Component: React.FC<{ animated?: boolean }>;
  title: string;
  description: string;
  borderClass: string;
}

const AnimatedSVG: React.FC<{
  component: React.FC<{ animated?: boolean }>;
  animated?: boolean;
}> = ({ component: Component, animated }) => <Component animated={animated} />;

export default function Services() {
    const [animatingStates, setAnimatingStates] = useState<AnimatingStates>({
        svg1: true,
        svg2: true,
        svg3: true,
        svg4: true,
    });

    const handleHover = (key: HoveredKey) => () => {
        setAnimatingStates(prev => ({ ...prev, [key]: false }));
        setTimeout(() => {
            setAnimatingStates(prev => ({ ...prev, [key]: true }));
        }, 10);
    };

    const cards: Card[] = [
        {
            key: 'svg2',
            Component: SVGComponent2,
            title: "Commissioned Research",
            description: "Tailored behavioral science strategies for your organization.",
            borderClass: "border-primary/20"
        },
        {
            key: 'svg1',
            Component: SvgComponent,
            title: "Policy Analysis",
            description: "Interactive sessions on AI governance and sustainability.",
            borderClass: "border-accent/20"
        },
        {
            key: 'svg3',
            Component: SVGComponent3,
            title: "Tailored Training Programs",
            description: "Collaborate on cutting-edge behavioral studies.",
            borderClass: "border-accent/20"
        },
        {
            key: 'svg4',
            Component: SVGComponent4,
            title: "Traditional & Cybersecurity Consultancy",
            description: "Bespoke podcasts and videos for your needs.",
            borderClass: "border-accent/20"
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-16">
                <h2>Long heading is what you see here in this feature section</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map(({ key, Component, title, description, borderClass }) => {
                    const isAnimating = animatingStates[key];
                    return (
                        <div
                            key={key}
                            className={`p-8 rounded-2xl border bg-accent backdrop-blur-sm hover:border-tertiary transition-all duration-300`}
                            onMouseEnter={handleHover(key)}
                        >
                            <div className="w-full min-h-64 border-b flex items-center">
                                <AnimatedSVG component={Component} animated={isAnimating} />
                            </div>
                            <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
                            <p className="text-muted-foreground text-sm">{description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}