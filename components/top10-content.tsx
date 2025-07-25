"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Music, Gamepad2 } from "lucide-react"

export default function Top10Content() {
  const top10s = [
    {
      category: "Filmes Inesquecíveis",
      icon: <Film className="size-6" />,
      items: [
        "1. Meninas Malvadas (2004)",
        "2. Shrek (2001)",
        "3. Harry Potter e a Pedra Filosofal (2001)",
        "4. O Senhor dos Anéis: A Sociedade do Anel (2001)",
        "5. Piratas do Caribe: A Maldição do Pérola Negra (2003)",
        "6. Procurando Nemo (2003)",
        "7. Kill Bill Vol. 1 (2003)",
        "8. O Diabo Veste Prada (2006)",
        "9. Avatar (2009)",
        "10. A Origem (2010) - Quase lá, mas o impacto foi Y2K!",
      ],
    },
    {
      category: "Músicas que Marcaram",
      icon: <Music className="size-6" />,
      items: [
        "1. Toxic - Britney Spears",
        "2. Lose Yourself - Eminem",
        "3. Crazy in Love - Beyoncé ft. Jay-Z",
        "4. In the End - Linkin Park",
        "5. Complicated - Avril Lavigne",
        "6. Hips Don't Lie - Shakira ft. Wyclef Jean",
        "7. Umbrella - Rihanna ft. Jay-Z",
        "8. Hot in Herre - Nelly",
        "9. Hey Ya! - OutKast",
        "10. Single Ladies (Put a Ring on It) - Beyoncé",
      ],
    },
    {
      category: "Jogos Viciantes",
      icon: <Gamepad2 className="size-6" />,
      items: [
        "1. The Sims (2000)",
        "2. Grand Theft Auto III (2001)",
        "3. Tony Hawk's Pro Skater 3 (2001)",
        "4. Pokémon Ruby/Sapphire (2002)",
        "5. Counter-Strike 1.6 (2003)",
        "6. Guitar Hero (2005)",
        "7. World of Warcraft (2004)",
        "8. Halo: Combat Evolved (2001)",
        "9. God of War (2005)",
        "10. Call of Duty 4: Modern Warfare (2007)",
      ],
    },
  ]

  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-green-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-lime-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            TOP 10 ANOS 2000!
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Os melhores da década!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {top10s.map((list, index) => (
            <Card key={index} className="bg-yellow-100 border-yellow-400 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl text-yellow-800 justify-center">
                  {list.icon} {list.category}
                </CardTitle>
                <CardDescription className="text-yellow-700">Os mais votados da época!</CardDescription>
              </CardHeader>
              <CardContent className="text-lg font-medium text-yellow-900 text-left">
                <ol className="list-decimal list-inside space-y-1">
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
