export const orders = [
  { id: "#ORD-001", customerName: "Budi Santoso", status: "Completed", totalPrice: 150000, orderDate: "2025-04-01" },
  { id: "#ORD-002", customerName: "Siti Rahayu", status: "Pending", totalPrice: 85000, orderDate: "2025-04-03" },
  { id: "#ORD-003", customerName: "Ahmad Fauzi", status: "Cancelled", totalPrice: 200000, orderDate: "2025-04-05" },
  { id: "#ORD-004", customerName: "Dewi Lestari", status: "Completed", totalPrice: 320000, orderDate: "2025-04-07" },
  { id: "#ORD-005", customerName: "Rizky Pratama", status: "Pending", totalPrice: 95000, orderDate: "2025-04-10" },
];

export const customers = [
  { id: "1", customerName: "Budi Santoso", email: "budi@email.com", phone: "081234567890", loyalty: "Gold" },
  { id: "2", customerName: "Siti Rahayu", email: "siti@email.com", phone: "082345678901", loyalty: "Silver" },
  { id: "3", customerName: "Ahmad Fauzi", email: "ahmad@email.com", phone: "083456789012", loyalty: "Bronze" },
  { id: "4", customerName: "Dewi Lestari", email: "dewi@email.com", phone: "084567890123", loyalty: "Gold" },
  { id: "5", customerName: "Rizky Pratama", email: "rizky@email.com", phone: "085678901234", loyalty: "Silver" },
];

export const STATUS_CONFIG = {
  Completed: { bg: "bg-green-100", text: "text-green-700" },
  Pending: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Cancelled: { bg: "bg-red-100", text: "text-red-700" },
};

export const LOYALTY_CONFIG = {
  Gold: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Silver: { bg: "bg-gray-100", text: "text-gray-600" },
  Bronze: { bg: "bg-orange-100", text: "text-orange-700" },
};
