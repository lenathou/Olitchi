'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ui/ProductCard";
import { plats, petitesFaims, boissons } from "@/data/menu-data";

export default function MenuPage() {
  return (
    <main className="bg-background py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Menu Olitchi</h1>
          <p className="text-muted-foreground text-lg">
            Une cuisine de rue inspirée de nos racines afro-antillaises
          </p>
        </div>

        <Tabs defaultValue="bokits" className="w-full">
          <TabsList className="grid grid-cols-5 w-full mb-6">
            <TabsTrigger value="bokits">Bokits</TabsTrigger>
            <TabsTrigger value="grillades">Grillades</TabsTrigger>
            <TabsTrigger value="autres">Autres Plats</TabsTrigger>
            <TabsTrigger value="petitesFaims">Petites Faims</TabsTrigger>
            <TabsTrigger value="boissons">Boissons</TabsTrigger>
          </TabsList>

          <TabsContent value="bokits" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.bokits.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </TabsContent>

          <TabsContent value="grillades" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.grillades.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </TabsContent>

          <TabsContent value="autres" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plats.autres.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </TabsContent>

          <TabsContent value="petitesFaims" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {petitesFaims.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </TabsContent>

          <TabsContent value="boissons" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boissons.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
