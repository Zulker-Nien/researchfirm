import { Badge } from "@/components/ui/badge";

export default function TopSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
                <h3>Video</h3>
                <div className="w-full h-96 bg-slate-400"></div>
                <div className="pt-4">
                    <Badge variant="default">Category</Badge>
                </div>
                <h3 className="pt-4">Video Title</h3>
                <p >Video Description</p>
            </div>
            <div>
                <h3>Audio Podcasts</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div className="w-full h-24 bg-slate-400"></div>
                    <div className="w-full h-24 bg-slate-400"></div>
                    <div className="w-full h-24 bg-slate-400"></div>
                    <div className="w-full h-24 bg-slate-400"></div>
                </div>
            </div>
        </div>
    )
}