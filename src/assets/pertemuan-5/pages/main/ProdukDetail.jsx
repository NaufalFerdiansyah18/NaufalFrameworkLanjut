import { useParams, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import produkData from "../../data/produkData.json";

const CATEGORY_CONFIG = {
  Makanan:  { bg: "bg-orange-100", text: "text-orange-700" },
  Minuman:  { bg: "bg-blue-100",   text: "text-blue-700"   },
  Snack:    { bg: "bg-yellow-100", text: "text-yellow-700" },
  Dessert:  { bg: "bg-pink-100",   text: "text-pink-700"   },
};

export default function ProdukDetail() {
  // Mengambil nilai :id dari URL menggunakan useParams()
  const { id } = useParams();

  // Cari produk berdasarkan id dari URL
  const produk = produkData.find((p) => p.id === id);

  // Jika produk tidak ditemukan
  if (!produk) {
    return (
      <div className="flex flex-col w-full">
        <PageHeader title="Produk Detail" breadcrumb={["Dashboard", "Produk", "Detail"]} />
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Produk Tidak Ditemukan</h2>
          <p className="text-gray-400 mb-6">
            Produk dengan ID <span className="font-mono font-bold text-red-400">{id}</span> tidak ada.
          </p>
          <Link
            to="/produk"
            className="bg-[#00B074] text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            ← Kembali ke Produk
          </Link>
        </div>
      </div>
    );
  }

  const cat = CATEGORY_CONFIG[produk.category] || { bg: "bg-gray-100", text: "text-gray-600" };

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        title="Produk Detail"
        breadcrumb={["Dashboard", "Produk", produk.title]}
      >
        <Link
          to="/produk"
          className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          ← Kembali
        </Link>
      </PageHeader>

      <div className="mt-4 max-w-lg">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* Header Produk */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
              🛍️
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{produk.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.text}`}>
                {produk.category}
              </span>
            </div>
          </div>

          {/* Info Detail */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Product ID</span>
              <span className="font-mono text-gray-700 font-medium">{produk.id}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Code</span>
              <span className="font-mono text-gray-700">{produk.code}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Title</span>
              <span className="text-gray-700 font-medium">{produk.title}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Category</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.text}`}>
                {produk.category}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Brand</span>
              <span className="text-gray-700">{produk.brand}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <span className="text-sm font-semibold text-gray-400">Price</span>
              <span className="text-gray-700 font-semibold">
                Rp {produk.price.toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400">Stock</span>
              <span className={`font-semibold ${produk.stock < 30 ? "text-red-500" : "text-green-600"}`}>
                {produk.stock} unit
              </span>
            </div>
          </div>
        </div>

        {/* Info useParams */}
        <div className="mt-4 bg-gray-800 rounded-2xl p-4 text-sm font-mono">
          <p className="text-gray-400 mb-1">{"// Nilai dari useParams():"}</p>
          <p className="text-green-400">{"const { id } = useParams()"}</p>
          <p className="text-yellow-300 mt-1">
            id = <span className="text-white">"{id}"</span>
          </p>
        </div>
      </div>
    </div>
  );
}
