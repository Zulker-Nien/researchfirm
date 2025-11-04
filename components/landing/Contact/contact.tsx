import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function Contact() {
    const formSchema = z.object({
        email: z.email('Please enter a valid email'),
        message: z.string().min(8, 'Message must be at least 8 characters'),
        acceptTerms: z.boolean()
    })
    type FormData = z.infer<typeof formSchema>;

    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            message: '',
            acceptTerms: false
        },
    });
    const formValues = watch();
    const isButtonDisabled = isSubmitting ||
        !formValues.email.trim() ||
        !formValues.message.trim() ||
        !formValues.acceptTerms;


    const onSubmit = async (data: FormData) => {
        console.log(data);
    };
    return (
        <div className="py-20 md:py-40 px-4 xl:px-64 flex flex-col gap-4 md:items-center justify-center">
            <h2 className="md:w-1/2 md:text-center">Contact us for commission research and consultancy services</h2>
            <p className="md:w-1/2 md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:w-1/2">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Email</label>
                        <Input
                            {...register('email')}
                            placeholder="Enter your email"
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Last Name</label>
                        <Textarea
                            className="h-48"
                            rows={8}
                            {...register('message')}
                            placeholder="Type your message..."
                            disabled={isSubmitting}
                        />
                        {errors.message && (
                            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-start gap-4 px-4">
                        <div className="flex items-center">
                            <Input
                                {...register('acceptTerms')}
                                type="checkbox"
                                disabled={isSubmitting}
                            />
                        </div>
                        <label className="text-sm font-medium text-slate-700">I accept the terms.</label>
                        {errors.message && (
                            <p className="text-sm text-destructive">{errors.message.message}</p>
                        )}
                    </div>
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    disabled={isButtonDisabled}
                >
                    Submit
                </Button>
            </form>
        </div>

    )
}