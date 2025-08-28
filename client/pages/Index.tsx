import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Users, Zap, Heart, Target, TrendingUp, Calendar, Mail, Linkedin, Phone } from "lucide-react";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnbjapk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message || 'Quiero asistir al evento de presentación de Bejaus Studio',
          _subject: 'Nueva confirmación para evento Bejaus Studio'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            ¡Bejaus Studio está llegando!
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto">
            El espacio que hemos soñado juntos desde Bejaus Café finalmente toma forma. Ven a conocerlo antes que nadie.
          </p>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-terracota hover:bg-terracota/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                ¡Quiero estar ahí!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-forest">¡Genial! Cuenta conmigo 🎉</DialogTitle>
              </DialogHeader>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-forest">Nombre *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-forest/20 focus:border-terracota"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-forest">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-forest/20 focus:border-terracota"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-forest">Mensaje (opcional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-forest/20 focus:border-terracota"
                      placeholder="¿Alguna idea o sugerencia para el evento?"
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="w-full bg-terracota hover:bg-terracota/90 text-white"
                  >
                    {isSubmitting ? 'Enviando...' : '¡Cuenta conmigo!'}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-terracota" />
                  </div>
                  <h3 className="text-lg font-semibold text-forest mb-2">¡Perfecto!</h3>
                  <p className="text-forest/70 mb-4">Te contactaremos pronto con todos los detalles del evento.</p>
                  <Button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmitted(false);
                    }}
                    className="bg-forest hover:bg-forest/90 text-white"
                  >
                    Cerrar
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-12">Nuestro Viaje Juntos</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-forest/80 leading-relaxed font-light">
              Desde Bejaus Café hemos construido algo especial. Ahora es momento de llevarlo al siguiente nivel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Comunidad</h3>
                <p className="text-forest/70">Hemos creado conexiones reales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Creatividad</h3>
                <p className="text-forest/70">Hemos visto florecer el talento</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-semibold text-forest mb-2">Crecimiento</h3>
                <p className="text-forest/70">Es hora del siguiente paso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Bejaus Studio se hace realidad</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2Fe1cdbc0bad5b4049ac5c1242aebb8e7a?format=webp&width=800"
                  alt="Planos del futuro Bejaus Studio - Layout del espacio creativo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">El espacio que diseñamos juntos</h3>
                  <p className="text-forest/70">Basado en vuestras ideas y necesidades</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Equipamiento profesional</h3>
                  <p className="text-forest/70">DJ booth, grabación, espacios colaborativos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Nuestra comunidad en el centro</h3>
                  <p className="text-forest/70">Un hogar para los creativos de Bejaus</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-terracota rounded-full mt-3"></div>
                <div>
                  <h3 className="font-semibold text-forest mb-2">Eventos exclusivos para vosotros</h3>
                  <p className="text-forest/70">Acceso prioritario a talleres y colaboraciones</p>
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
                <h3 className="font-bold text-forest mb-3">Mezcla creativa</h3>
                <p className="text-forest/70">Música, arte y tecnología en un mismo espacio</p>
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

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg relative">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fb483dd511682401f9f00211e632d2fcf%2Ffbbab1b059dd49cba66beb6d7ce95166?format=webp&width=800"
                alt="Espacio Bejaus Studio antes de la reforma - Estado actual"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-forest font-semibold text-sm">Tour Exclusivo</p>
                <p className="text-xs text-forest/70">Antes de la reforma</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-forest mb-8">¿Qué podrás ver?</h2>
              <p className="text-xl text-forest/80 leading-relaxed mb-8">
                Te mostraremos el espacio en bruto y te contaremos todos los planes. También queremos escuchar tus ideas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">El espacio completo</h4>
                  <p className="text-sm text-forest/70">Tour por todas las áreas planificadas</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Maquetas y planos</h4>
                  <p className="text-sm text-forest/70">Cómo quedará el resultado final</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Equipamiento</h4>
                  <p className="text-sm text-forest/70">Herramientas que tendremos</p>
                </div>
                <div className="bg-beige p-4 rounded-lg">
                  <h4 className="font-semibold text-forest">Sesión de feedback</h4>
                  <p className="text-sm text-forest/70">Tus opiniones cuentan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Offer */}
      <section className="py-24 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">¿Qué encontrarás en Bejaus Studio?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Horarios flexibles</h3>
              </div>
              <p className="text-forest/70">Cuando tú puedas crear</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Eventos exclusivos</h3>
              </div>
              <p className="text-forest/70">Bejaus Sessions y talleres solo para nuestra gente</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Equipamiento pro</h3>
              </div>
              <p className="text-forest/70">Lo mejor para tus proyectos</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-4">
                <div className="w-16 h-16 bg-terracota/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-terracota" />
                </div>
                <h3 className="font-bold text-forest">Nuestra red</h3>
              </div>
              <p className="text-forest/70">Colaboraciones y oportunidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">¿Cuándo estará listo?</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-beige p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-terracota rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-forest">Ahora - Evento presentación</h3>
                    <p className="text-forest/70">Te mostramos el espacio y recogemos ideas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-forest rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-forest">Próximos meses - Reforma</h3>
                    <p className="text-forest/70">Acondicionamiento y equipamiento</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-terracota rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-forest">Este año - Apertura</h3>
                    <p className="text-forest/70">Tú serás el primero en entrar</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center bg-beige p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-forest">Tu lugar reservado</h3>
                <p className="text-lg text-terracota font-semibold">Comunidad fundadora</p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center bg-forest p-6 rounded-2xl text-white">
                  <h4 className="font-semibold mb-2">Acceso prioritario</h4>
                  <p className="text-white/80">Reservas y horarios preferenciales</p>
                </div>
                <div className="text-center bg-terracota p-6 rounded-2xl text-white">
                  <h4 className="font-semibold mb-2">Precios especiales</h4>
                  <p className="text-white/80">Condiciones exclusivas para ti</p>
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

      {/* Event Invitation */}
      <section id="event" className="py-24 bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¡Ven a conocer el espacio!</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 font-light leading-relaxed">
            Te invitamos a una presentación exclusiva del futuro Bejaus Studio. Tú has sido parte del viaje, ahora sé parte del gran momento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-2xl">
              <Target className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Preview exclusivo</h3>
              <p className="text-white/80">Sé el primero en ver el espacio</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <Users className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Solo para ti</h3>
              <p className="text-white/80">Evento privado para la familia Bejaus</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <Zap className="h-12 w-12 text-terracota mx-auto mb-4" />
              <h3 className="font-bold mb-2">Participa activamente</h3>
              <p className="text-white/80">Tus ideas siguen siendo importantes</p>
            </div>
          </div>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-terracota hover:bg-terracota/90 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                ¡Cuenta conmigo!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-beige">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-forest mb-4">Bejaus Studio</h3>
              <p className="text-forest/70 mb-6">El siguiente capítulo de nuestra historia</p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="sm" className="border-forest text-forest hover:bg-forest hover:text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-forest text-white p-8 rounded-2xl">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <p className="font-semibold">¿Vienes a conocer tu nuevo hogar creativo?</p>
              </div>
            </div>
          </div>
          <div className="border-t border-forest/20 pt-8 mt-12 text-center">
            <p className="text-forest/60">© 2024 Bejaus Studio. De la familia Bejaus Café, para la comunidad creativa de Barcelona.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
