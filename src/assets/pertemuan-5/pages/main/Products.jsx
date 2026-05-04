import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => {
        if (response.status !== 200) {
          setError(response.message);
          return;
        }
        setProducts(response.data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Products" breadcrumb={["Dashboard", "Product List"]} />

      {/* Search */}
      <div className="px-4 mb-2">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B074]"
        />
      </div>

      <div className="mt-2 bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
        {loading && (
          <div className="p-6 text-center text-gray-400 text-sm">Loading...</div>
        )}
        {error && (
          <div className="p-6 text-center text-red-500 text-sm">{error}</div>
        )}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#00B074] text-white font-semibold">
                <tr>
                  <th className="px-5 py-3 text-left w-12">#</th>
                  <th className="px-5 py-3 text-left">Name</th>
                  <th className="px-5 py-3 text-left">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 text-gray-400">{index + 1}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-emerald-400 hover:text-emerald-500 font-medium"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="px-5 py-3 text-gray-500 capitalize">{item.category}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-5 py-6 text-center text-gray-400">
                      Produk tidak ditemukan.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
