import PageHeader from "../components/PageHeader";
import RecentOrders from "../components/RecentOrders";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

const STATS = [
  { id: "orders",    icon: FaShoppingCart, value: "75",      label: "Total Orders",    bg: "bg-[#00B074]", shadow: "shadow-[#00B074]/30" },
  { id: "delivered", icon: FaTruck,        value: "175",     label: "Total Delivered", bg: "bg-[#3b82f6]", shadow: "shadow-blue-500/30" },
  { id: "canceled",  icon: FaBan,          value: "40",      label: "Total Canceled",  bg: "bg-[#ef4444]", shadow: "shadow-red-500/30" },
  { id: "revenue",   icon: FaDollarSign,   value: "Rp.128",  label: "Total Revenue",   bg: "bg-[#f59e0b]", shadow: "shadow-yellow-500/30" },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader title="Dashboard" breadcrumb={["Dashboard"]}>
        <span />
      </PageHeader>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map(({ id, icon: Icon, value, label, bg, shadow }) => (
          <div
            key={id}
            className="flex items-center gap-5 bg-white rounded-2xl shadow-sm p-5 border border-gray-50 hover:shadow-md transition-shadow"
          >
            <div className={`flex items-center justify-center w-16 h-16 ${bg} rounded-full shadow-lg ${shadow} shrink-0`}>
              <Icon className="text-[22px] text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[28px] font-bold text-gray-900 leading-tight font-poppins">{value}</span>
              <span className="text-xs font-semibold text-gray-400 font-barlow">{label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Improvisasi 2: Recent Orders Table */}
      <RecentOrders />
    </div>
  );
}