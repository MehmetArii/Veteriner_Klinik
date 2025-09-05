const HeroTextContainer = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Kuşlarınızın Sağlığı
        <span className="block text-orange-500">Bizim Önceliğimiz</span>
      </h1>
      <p className="text-gray-600 mb-8 text-xl leading-relaxed">
        Ankara'da kuş sağlığında uzmanlaşmış veteriner kliniği. Sevimli
        dostlarınızın sağlık ihtiyaçları için profesyonel ve güvenilir hizmet.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
          href="/contact"
        >
          Randevu Al
        </a>
        <a
          className="bg-white text-orange-500 px-8 py-3 border-2 border-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
          href="tel:+905123456789"
        >
          Hemen Ara
        </a>
      </div>
    </div>
  );
};

export default HeroTextContainer;
