const trending = [
  { name: "Nasi Goreng Spesial", rating: 4.8, shop: "Warung Bude", price: "Rp15.000" },
  { name: "Es Kopi Susu", rating: 4.6, shop: "Kedai Senja", price: "Rp12.000" },
  { name: "Cukur Cepat", rating: 4.9, shop: "Barber Kampus", price: "Rp20.000" },
];

function Trending() {
  return (
    <section className="py-10 px-8 bg-yellow-50 flex-1">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Sedang Tren 🔥</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trending.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
            <h3 className="font-bold text-lg text-red-700">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.shop}</p>
            <p className="text-yellow-600 font-semibold">⭐ {item.rating}</p>
            <p className="text-red-700 font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
