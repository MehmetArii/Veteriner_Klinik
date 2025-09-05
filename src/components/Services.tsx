import { Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Genel Muayene",
      description: "Düzenli sağlık kontrolü ve önleyici bakım",
    },
    {
      icon: Heart,
      title: "Hastalık Tedavisi",
      description: "Kuş hastalıkları tanı ve tedavi hizmetleri",
    },
    {
      icon: Heart,
      title: "Acil Müdahale",
      description: "24 saat acil durum hizmetleri",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Kuş Sağlığında Uzman Hizmetler
            </h2>
            <div className="space-y-4">
              {services.map((services, index) => {
                const Icon = services.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Icon className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {services.title}
                      </h3>
                      <p className="text-gray-600">{services.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="/services"
              className="inline-block bg-teal-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal-700 transition-colors"
            >
              Tüm Hizmetlerimiz
            </a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dog"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
