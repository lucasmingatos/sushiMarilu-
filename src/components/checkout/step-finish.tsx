import { useCheckoutStore } from "@/stores/checkou-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";


export const StepFinish = () => {

    const { name } = useCheckoutStore (state => state);

    const message = generateMessage();

    const linkWpp = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;

    return (
        <div className="text-cente flex flex-col gap-5">
            <p>Perfeito <strong>{name}!</strong></p>
            <p>Você será redirecionado para o nosso WhatsApp para concluir seu pedido.</p>
            <Button>
                <Link target="_blank" href={linkWpp}>Enviar para o WhatssApp</Link>
            </Button>
                
        </div>
    );
}

