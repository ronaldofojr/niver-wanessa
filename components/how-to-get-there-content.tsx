"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Bus, CarTaxiFrontIcon as Taxi } from "lucide-react"

export default function HowToGetThereContent() {
  return (
    <main className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-2xl border-4 border-cyan-400 relative overflow-hidden my-8 y2k-scanlines">
      <div className="relative z-10 text-center space-y-6">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg font-['Press_Start_2P'] animate-glitch">
            COMO CHEGAR?
          </h1>
          <p className="text-xl sm:text-2xl mt-2 font-semibold">Não se perca nessa viagem!</p>
        </div>

        {/* Interactive Map Section */}
        <Card className="bg-orange-100 border-orange-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-orange-800 justify-center">
              <MapPin className="size-6" /> Veja no Mapa!
            </CardTitle>
            <CardDescription className="text-orange-700">Clique para abrir no Google Maps</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.0000000000005!2d-43.03000000000000!3d-22.87000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9984e00000000000%3A0x0!2sRua%20J%C3%BAlio%20Teixeira%20de%20Oliveira%2C%2069%20-%20Rocha%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024420-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Local da Festa"
              className="rounded-b-lg"
            ></iframe>
          </CardContent>
        </Card>

        <Card className="bg-cyan-100 border-cyan-400 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-cyan-800 justify-center">
              <Car className="size-6" /> Opções de Transporte
            </CardTitle>
            <CardDescription className="text-cyan-700">Escolha a melhor forma de chegar!</CardDescription>
          </CardHeader>
          <CardContent className="text-lg font-medium text-cyan-900 text-left space-y-4">
            <div>
              <h3 className="font-semibold text-xl mb-1 flex items-center gap-2">
                <Car className="size-5" /> De Carro:
              </h3>
              <p className="mb-2">
                Há vagas para estacionar na rua, mas chegue cedo para garantir seu lugar!
                <br />
                Endereço: Rua Julio Teixeira de Oliveira - 69, Bairro Rocha, São Gonçalo.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 flex items-center gap-2">
                <Bus className="size-5" /> De Ônibus:
              </h3>
              <p className="mb-2">
                Linhas que passam próximo: 408M, 409M, 423M. Desça no ponto da Praça da Rocha e siga as placas!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1 flex items-center gap-2">
                <Taxi className="size-5" /> Por Aplicativo:
              </h3>
              <p>Uber, 99 e outros apps funcionam bem na região. Basta colocar o endereço completo!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
