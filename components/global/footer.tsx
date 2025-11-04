import { Button } from "../ui/button";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 py-4 px-4 xl:px-64">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                <div className="col-span-2">
                    <h1>Logo</h1>
                    <div>
                        <p>Address:</p>
                        <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
                    </div>
                    <div>
                        <p>Contact:</p>
                        <p>18001234567, email@example.com</p>
                    </div>
                    <div>Social Handles</div>
                </div>
                <div className="col-span-1 grid grid-cols-2">
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                    <p>Link One</p>
                </div>
            </div>
            {/* Bottom Section */}
            <div className="w-full">
                <h1 className="text-center text-[clamp(1.8rem,5.5vw,90vw)] w-full">Global Securities Innitiative</h1>
                <hr />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>&copy; 2025. All rights reserved</div>
                    <div className="flex gap-4">
                        <Button variant={"ghost"}>Privacy Policy</Button>
                        <Button variant={"ghost"}>Terms & Services</Button>
                        <Button variant={"ghost"}>Cookie Settings</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}