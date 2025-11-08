const categories = [
  { name: "Makanan", icon: "🍔" },
  { name: "Minuman", icon: "🥤" },
  { name: "Lainnya", icon: "⚙️" },
];

function Category() {
  return (
    <div className="py-10 px-8 bg-yellow-100 text-center">
      <h2 className="text-2xl font-bold text-red-700 mb-6">Kategori</h2>
      <div className="flex justify-center gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform">
            <span className="text-4xl">{cat.icon}</span>
            <p className="text-lg font-semibold mt-2">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
