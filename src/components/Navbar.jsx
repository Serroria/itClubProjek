import { ShoppingCart, Clock } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-red-700 text-white shadow-md">
      <h1 className="text-2xl font-bold text-yellow-300">Lesgokeun</h1>
      <input
        type="text"
        placeholder="Cari makanan, minuman, atau jasa..."
        className="w-1/2 px-3 py-2 rounded-lg text-black"
      />
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 bg-yellow-400 text-red-800 px-3 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          <ShoppingCart size={18} />
          Keranjang
        </button>
        <button className="flex items-center gap-1 bg-yellow-400 text-red-800 px-3 py-2 rounded-lg font-semibold hover:bg-yellow-500">
          <Clock size={18} />
          Riwayat
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
