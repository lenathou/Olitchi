import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  nom: string;
  description?: string;
  prix: number;
  image: string;
}

export function ProductCard({ id, nom, description, prix, image }: ProductCardProps) {
  return (
    <Card key={id}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {nom}
          <span className="text-primary font-bold">{prix.toFixed(2)} €</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <Image
          src={image}
          alt={nom}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-[200px]"
        />
        {description && (
          <p className="text-muted-foreground text-center text-sm">{description}</p>
        )}
        <Button className="w-full mt-2">Voir les détails</Button>
      </CardContent>
    </Card>
  );
}
