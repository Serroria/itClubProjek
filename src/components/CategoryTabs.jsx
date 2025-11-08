import React from "react";

const categories = [
  { name: "Makanan", emoji: "🍛" },
  { name: "Minuman", emoji: "🧃" },
  { name: "Lainnya", emoji: "⚙️" },
];

const CategoryTabs = () => {
  return (
    <div className="bg-yellow-100 py-4 flex justify-center gap-6 shadow-inner">
      {categories.map((cat) => (
        <button
          key={cat.name}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-semibold text-red-700 transition-all"
        >
          {cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
