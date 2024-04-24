"use client"

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCartStore } from "@/stores/cart-store";


type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {

    const { toast } = useToast();
    const { upsetCartItem } = useCartStore(state => state);
    const handleAddButon = () => {

        upsetCartItem(item, 1);
        
        toast ({
            title: 'Adicionado ao carrinho!!',
            description: item.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        })
    }

    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">R$ {item.price.toFixed(2)}</p>
                <Button
                    variant="outline"
                    onClick={handleAddButon}
                >Adicionar</Button>
            </div>
        </div>
    );
}