import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import produkData from "../../data/produkData.json";

const CATEGORY_CONFIG = {
  Makanan:  { bg: "bg-orange-100", text: "text-orange-700" },
  Minuman:  { bg: "bg-blue-100",   text: "text-blue-700"   },
  Snack:    { bg: "bg-yellow-100", text: "text-yellow-700" },
  Dessert:  { bg: "bg-pink-100",   text: "text-pink-700"   },
};

export default function Produk() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Produk" breadcrumb={["Dashboard", "Product List"]} />

      <div className="mt-4 bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 font-semibold">
              <tr>
                <th className="px-5 py-3 text-left">Code</th>
                <th className="px-5 py-3 text-left">Title</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-left">Brand</th>
                <th className="px-5 py-3 text-left">Price</th>
                <th className="px-5 py-3 text-left">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {produkData.map((produk) => {
                const cat = CATEGORY_CONFIG[produk.category] || { bg: "bg-gray-100", text: "text-gray-600" };
                return (
                  <tr key={produk.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-mono text-gray-500">{produk.code}</td>
                    <td className="px-5 py-3 font-medium text-gray-800">
                      <Link
                        to={`/products/${produk.id}`}
                        className="text-emerald-400 hover:text-emerald-500 font-semibold"
                      >
                        {produk.title}
                      </Link>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.bg} ${cat.text}`}>
                        {produk.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-500">{produk.brand}</td>
                    <td className="px-5 py-3 text-gray-700">
                      Rp {produk.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-5 py-3 text-gray-700">{produk.stock}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
