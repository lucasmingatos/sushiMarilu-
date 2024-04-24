import { useCheckoutStore } from "@/stores/checkou-store";
import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


const formSchema = z.object({
    street: z.string().min(2, "Preencha o endereço"),
    number: z.string().min(2, "Preencha o número"),
    complement: z.string().optional(),
    district: z.string().min(2, "Preencha o bairro"),
    city: z.string().min(2, "Preencha a cidade"),
    state: z.string().min(2, "Preencha o estado"),
});


type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}


export const StepAddress = ({ setStep }: Props) => {
    const { address, setAddress } = useCheckoutStore (state => state);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { ...address }
    })
    
    const onSubmit =  (values: z.infer<typeof formSchema>) => {
        setAddress(values);
        setStep('finish');
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name = "street"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name = "number"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Número</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name = "complement"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name = "district"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name = "city"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name = "state"
                        render={({ field }) =>(
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Estado"/>
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="sp">São Paulo</SelectItem>
                                            <SelectItem value="rj">Rio de Janeiro</SelectItem>
                                            <SelectItem value="bh">Belo Horizonte</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>

                                <FormMessage/>
                            </FormItem>
                            
                        )}
                    />
                </div>
                
                <div className="flex justify-between mt-6"> 
                    <Button variant="link" onClick={() => setStep('user')}>Voltar</Button>
                    <Button variant="outline">Próximo</Button>
                </div>
                    
                

            </form>
        </Form>
    );
}

