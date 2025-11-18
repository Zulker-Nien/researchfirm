"use client"
import { useTheme } from "next-themes";
import DotGrid from "../DotGrid";

export default function Background() {
    const { theme } = useTheme();
    return (
        <DotGrid
            dotSize={5}
            gap={15}
            baseColor={theme === "light" ? "#e5e5e5" : "#271e37"}
            activeColor="#F25912"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
        />
    )
}