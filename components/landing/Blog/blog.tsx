import BottomSection from "./bottomSection";
import TopSection from "./topSection";


export default function Blog() {
    return (
        <div className="py-16 px-4 xl:px-64 space-y-4">
            <div>
                <h1>Watch, Listen and Read</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <TopSection />
            <hr/>
            <BottomSection/>
        </div>
    )
}