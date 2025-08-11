'use client';

import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { plats, petitesFaims, boissons } from "@/data/menu-data"; // ⚠️ adapte le chemin si nécessaire

function renderItem(item: {
  id: string;
  nom: string;
  description?: string;
  prix: number;
  image?: string;
}) {
  return (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {item.nom}
          <span className="text-primary font-bold">{item.prix} €</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {item.image && (
          <Image
            src={item.image}
            alt={item.nom}
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-[200px]"
          />
        )}
        {item.description && (
          <p className="text-muted-foreground text-center text-sm">{item.description}</p>
        )}
        <Button className="w-full mt-2">Voir les détails</Button>
      </CardContent>
    </Card>
  );
}

export function MenuTabs() {
  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Notre Menu</h2>
          <p className="text-muted-foreground text-lg">Des plats préparés avec passion</p>
        </div>

        <Tabs defaultValue="bokits" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="bokits">Bokits</TabsTrigger>
            <TabsTrigger value="grillades">Grillades</TabsTrigger>
            <TabsTrigger value="autres">Autres Plats</TabsTrigger>
            <TabsTrigger value="petitesFaims">Petites Faims</TabsTrigger>
            <TabsTrigger value="boissons">Boissons</TabsTrigger>
          </TabsList>

          <TabsContent value="bokits" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.bokits.map(renderItem)}
          </TabsContent>

          <TabsContent value="grillades" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.grillades.map(renderItem)}
          </TabsContent>

          <TabsContent value="autres" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.autres.map(renderItem)}
          </TabsContent>

          <TabsContent value="petitesFaims" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {petitesFaims.map(renderItem)}
          </TabsContent>

          <TabsContent value="boissons" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boissons.map(renderItem)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
