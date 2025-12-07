import { Building2, UserCheck, Shield, GraduationCap, Users, Zap } from "lucide-react";

export default function TargetAudience() {
    return (
        <section className="py-20 px-4 xl:px-64 bg-linear-to-b from-transparent via-accent to-transparent">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Train</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Our programs are intensive, practical, and delivered by active researchers and field practitioners.
                </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
                {[
                    { icon: Building2, label: "General Public" },
                    { icon: Building2, label: "Diplomats & MFA" },
                    { icon: UserCheck, label: "Policymakers" },
                    { icon: Shield, label: "Law Enforcement" },
                    { icon: GraduationCap, label: "Government Officials" },
                    { icon: Users, label: "Students & Academics" },
                    { icon: Zap, label: "Corporate Leaders" },
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center text-center">
                        <div className="p-6 rounded-full bg-indigo-900/10 mb-4">
                            <item.icon className="h-12 w-12 text-indigo-900" />
                        </div>
                        <p className="font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}