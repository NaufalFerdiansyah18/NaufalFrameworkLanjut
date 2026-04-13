// Data orders terpusat — digunakan di Search (Header) dan Tabel RecentOrders
export const orders = [
  { id: "#ORD-001", customer: "Budi Santoso",  menu: "Nasi Goreng Spesial",  time: "5 menit lalu",  status: "delivered"  },
  { id: "#ORD-002", customer: "Siti Rahayu",   menu: "Ayam Bakar Kecap",     time: "12 menit lalu", status: "processing" },
  { id: "#ORD-003", customer: "Andi Wijaya",   menu: "Mie Goreng Seafood",   time: "20 menit lalu", status: "delivered"  },
  { id: "#ORD-004", customer: "Dewi Pertiwi",  menu: "Sate Ayam + Lontong",  time: "35 menit lalu", status: "canceled"   },
  { id: "#ORD-005", customer: "Rizky Pratama", menu: "Gado-gado Jumbo",      time: "50 menit lalu", status: "processing" },
];

export const STATUS_CONFIG = {
  delivered:  { label: "Dikirim",    bg: "bg-[#00B074]/10", text: "text-[#00B074]" },
  processing: { label: "Diproses",   bg: "bg-blue-50",      text: "text-blue-500"  },
  canceled:   { label: "Dibatalkan", bg: "bg-red-50",       text: "text-red-500"   },
};
