import Card from "../components/card";

// 1. Definisikan data UMKM-mu di sini
const dataKantin = [
  {
    id: 1,
    title: "Jasuke", // Diubah dari 'nama'
    description: "Dibangun sejak tahun 2005", // Diubah dari 'deskripsi'
    imageUrl: "https://via.placeholder.com/300x180.png?text=Jasuke", // Tambahkan ini
    rating: 4.5, // Tambahkan ini
    alamat: "Kantin Vokasi UI, Depok",
  },
  {
    id: 2,
    title: "Kopi Kenangan",
    description: "Kopi susu gula aren",
    imageUrl: "https://via.placeholder.com/300x180.png?text=Kopi+Kenangan",
    rating: 4.8,
    alamat: "Stasiun UI, Depok",
  },
  // ...tambahkan 7+ UMKM lainnya di sini
];

const Home = () => {
  return (
    <>
      <h1>Daftar Kantin!</h1>

      {/* 2. Gunakan .map() untuk me-render semua data */}
      <div className="list-container flex flex-row">
        {dataKantin.map((kantin) => (
          <Card
            key={kantin.id} // Kunci unik, wajib untuk .map()
            dataToko={kantin}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
