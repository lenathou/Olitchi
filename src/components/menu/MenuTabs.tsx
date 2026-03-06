'use client';

import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// NOTE: This is a legacy component. The active menu uses ModernMenuSection.
// Data is now fetched from the database via ModernMenuSection props.

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

interface MenuTabsProps {
  menuData?: {
    bokits: { id: string; nom: string; description?: string; prix: number; image?: string }[];
    grillades: { id: string; nom: string; description?: string; prix: number; image?: string }[];
    autres: { id: string; nom: string; description?: string; prix: number; image?: string }[];
    petitesFaims: { id: string; nom: string; description?: string; prix: number; image?: string }[];
    boissons: { id: string; nom: string; description?: string; prix: number; image?: string }[];
  };
}

export function MenuTabs({ menuData }: MenuTabsProps) {
  if (!menuData) return null;

  return (
    <section id="menu" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Notre Menu</h2>
          <p className="text-muted-foreground text-lg">Des plats préparés avec passion</p>
        </div>

        <Tabs defaultValue="bokits" className="w-full">
          <div className="flex justify-center w-full">
            <TabsList className="inline-flex h-auto w-auto items-center justify-start rounded-full bg-secondary/50 p-1 text-muted-foreground border border-border/50 shadow-sm relative overflow-hidden">
              <TabsTrigger value="bokits" className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-premium-orange data-[state=active]:text-white transition-all text-base border-r border-muted-foreground/20 rounded-none first:rounded-l-full last:rounded-r-full data-[state=active]:border-none data-[state=active]:shadow-md hover:text-foreground">
                Bokits
              </TabsTrigger>
              <TabsTrigger value="grillades" className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-premium-orange data-[state=active]:text-white transition-all text-base border-r border-muted-foreground/20 rounded-none data-[state=active]:border-none data-[state=active]:shadow-md hover:text-foreground">
                Grillades
              </TabsTrigger>
              <TabsTrigger value="autres" className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-premium-orange data-[state=active]:text-white transition-all text-base border-r border-muted-foreground/20 rounded-none data-[state=active]:border-none data-[state=active]:shadow-md hover:text-foreground">
                Autres Plats
              </TabsTrigger>
              <TabsTrigger value="petitesFaims" className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-premium-orange data-[state=active]:text-white transition-all text-base border-r border-muted-foreground/20 rounded-none data-[state=active]:border-none data-[state=active]:shadow-md hover:text-foreground">
                Petites Faims
              </TabsTrigger>
              <TabsTrigger value="boissons" className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-premium-orange data-[state=active]:text-white transition-all text-base rounded-none last:rounded-r-full data-[state=active]:shadow-md hover:text-foreground">
                Boissons
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bokits" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.bokits.map(renderItem)}
          </TabsContent>

          <TabsContent value="grillades" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.grillades.map(renderItem)}
          </TabsContent>

          <TabsContent value="autres" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.autres.map(renderItem)}
          </TabsContent>

          <TabsContent value="petitesFaims" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.petitesFaims.map(renderItem)}
          </TabsContent>

          <TabsContent value="boissons" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.boissons.map(renderItem)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
