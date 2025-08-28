import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Users, Zap, Heart, Target, TrendingUp, Calendar, Mail, Linkedin, Phone } from "lucide-react";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-forest to-forest/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className={"w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"white\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0 0 0-18 0-18s18 0 18 0 0 18 0 18-18 0-18 0z\"/%3E%3C/g%3E%3C/svg%3E')] bg-repeat animate-pulse"}></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Donde arte, tecnología y comunidad se encuentran
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto">
            Bejaus Studio es el primer espacio creativo híbrido de Barcelona diseñado para impulsar a artistas emergentes
          </p>
          <Button 
            size="lg" 
            className="bg-terracota hover:bg-terracota/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('investment')}
          >
            Quiero invertir
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12">El Problema</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-forest/80 leading-relaxed font-light">
              Los creadores independientes carecen de espacios profesionales accesibles que integren arte, tecnología y comunidad
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Falta de acceso</h3>
                <p className="text-forest/70">Espacios profesionales inaccesibles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Fragmentación</h3>
                <p className="text-forest/70">Herramientas y recursos dispersos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Aislamiento</h3>
                <p className="text-forest/70">Falta de comunidad creativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">La Solución – Bejaus Studio</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-beige to-terracota/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-forest font-semibold">Studio Mockup</p>
                  <p className="text-sm text-forest/70">DJ booth, grabación, workshops</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Packs flexibles por horas</h3>
                  <p className="text-forest/70">Acceso adaptado a cada presupuesto</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Espacios híbridos: música + arte + tecnología</h3>
                  <p className="text-forest/70">Convergencia de disciplinas creativas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Comunidad real validada desde Bejaus Café</h3>
                  <p className="text-forest/70">Base sólida de creativos establecida</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Escalable a nuevas ciudades y programas</h3>
                  <p className="text-forest/70">Modelo replicable y expansible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Propuesta de Valor</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest mb-3">Flexibilidad</h3>
                <p className="text-forest/70">Horarios y espacios adaptados a cada creador</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest mb-3">Hibridación</h3>
                <p className="text-forest/70">Convergencia única de arte y tecnología</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest mb-3">Cultura tecnológica</h3>
                <p className="text-forest/70">Herramientas profesionales de última generación</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest mb-3">Comunidad</h3>
                <p className="text-forest/70">Red real de apoyo y colaboración</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-beige to-terracota/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-forest rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <p className="text-forest font-semibold text-lg">Jóvenes Creadores</p>
                <p className="text-forest/70">20–38 años</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8">Público Objetivo</h2>
              <p className="text-xl text-forest/80 leading-relaxed mb-8">
                DJs, diseñadores, freelancers y emprendedores culturales que buscan visibilidad, herramientas y comunidad
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">DJs & Productores</h4>
                  <p className="text-sm text-forest/70">Música electrónica y beats</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Diseñadores</h4>
                  <p className="text-sm text-forest/70">Gráfico, UX/UI, motion</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Freelancers</h4>
                  <p className="text-sm text-forest/70">Creativos independientes</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Emprendedores</h4>
                  <p className="text-sm text-forest/70">Startups culturales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Modelo de Negocio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Packs de horas</h3>
              </div>
              <p className="text-forest/70">Ingresos recurrentes base</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Talleres y hackathons</h3>
              </div>
              <p className="text-forest/70">Eventos formativos</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Servicios a artistas</h3>
              </div>
              <p className="text-forest/70">Grabación y merchandising</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Alianzas con marcas</h3>
              </div>
              <p className="text-forest/70">Partnerships estratégicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Proyecciones Financieras</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-beige p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-forest">Año 1</span>
                  <div className="flex-1 mx-4 bg-white h-8 rounded-full overflow-hidden">
                    <div className="h-full bg-terracota w-3/4 rounded-full flex items-center justify-end pr-2">
                      <span className="text-white text-sm font-semibold">Equilibrio mes 9</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-forest">Año 2</span>
                  <div className="flex-1 mx-4 bg-white h-8 rounded-full overflow-hidden">
                    <div className="h-full bg-forest w-4/5 rounded-full flex items-center justify-end pr-2">
                      <span className="text-white text-sm font-semibold">+15.500 €</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-forest">Año 3</span>
                  <div className="flex-1 mx-4 bg-white h-8 rounded-full overflow-hidden">
                    <div className="h-full bg-terracota w-full rounded-full flex items-center justify-end pr-2">
                      <span className="text-white text-sm font-semibold">+50.500 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center bg-beige p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-forest">Punto de equilibrio</h3>
                <p className="text-4xl font-bold text-terracota">Mes 9</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-forest p-6 rounded-2xl text-white">
                  <h4 className="font-semibold mb-2">Año 2</h4>
                  <p className="text-2xl font-bold">+15.500 €</p>
                </div>
                <div className="text-center bg-terracota p-6 rounded-2xl text-white">
                  <h4 className="font-semibold mb-2">Año 3</h4>
                  <p className="text-2xl font-bold">+50.500 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Equipo Promotor</h2>
            <p className="text-xl text-forest/80">Equipo multidisciplinar detrás del éxito de Bejaus Café</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-forest rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">Daniel</h3>
              <p className="text-terracota font-semibold mb-2">Tech & Community</p>
              <p className="text-forest/70">Especialista en tecnología y construcción de comunidades</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-forest rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">Rafa</h3>
              <p className="text-terracota font-semibold mb-2">Producción musical & hostelería creativa</p>
              <p className="text-forest/70">Experto en audio y experiencias gastronómicas</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-forest rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">Rita</h3>
              <p className="text-terracota font-semibold mb-2">Diseño & Arte</p>
              <p className="text-forest/70">Directora creativa y diseñadora visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-beige p-8 rounded-2xl">
                <div className="w-12 h-12 bg-terracota rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">Meses 1–2</h3>
                <ul className="space-y-2 text-forest/70">
                  <li>• Venta anticipada packs</li>
                  <li>• Adecuación local</li>
                  <li>• Setup tecnológico</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-beige p-8 rounded-2xl">
                <div className="w-12 h-12 bg-forest rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">Meses 3–6</h3>
                <ul className="space-y-2 text-forest/70">
                  <li>• Apertura oficial</li>
                  <li>• Primeros talleres</li>
                  <li>• Hackathons iniciales</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-beige p-8 rounded-2xl">
                <div className="w-12 h-12 bg-terracota rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-forest mb-4">Meses 6–12</h3>
                <ul className="space-y-2 text-forest/70">
                  <li>• Artist Program</li>
                  <li>• Alianzas estratégicas</li>
                  <li>• Expansión servicios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section id="investment" className="py-24 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Oportunidad de Inversión</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed">
            Bejaus Studio combina ingresos B2C y B2B, con alta rentabilidad por m² y comunidad ya validada
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Alta rentabilidad</h3>
              <p className="text-white/80">ROI optimizado por metro cuadrado</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <Users className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Comunidad validada</h3>
              <p className="text-white/80">Base sólida desde Bejaus Café</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <Target className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Modelo escalable</h3>
              <p className="text-white/80">Replicable en múltiples ciudades</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-terracota hover:bg-terracota/90 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Solicitar reunión
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-forest mb-4">Bejaus Studio</h3>
              <p className="text-forest/70 mb-6">Impulsando el talento creativo</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-forest text-white p-8 rounded-2xl">
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <p className="font-semibold">¿Listo para formar parte del futuro creativo?</p>
              </div>
            </div>
          </div>
          <div className="border-t border-forest/20 pt-8 mt-12 text-center">
            <p className="text-forest/60">© 2024 Bejaus Studio. Impulsando el talento creativo en Barcelona.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
