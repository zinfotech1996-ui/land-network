import { motion } from "framer-motion";
import { Coins, ArrowUpRight, Wallet, Building } from "lucide-react";
import { mockCommissions } from "@/data/mockData";
import { toast } from "sonner";

export default function Earnings() {
  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">Commission & Earnings</h1>
        <p className="text-sm text-muted-foreground mb-8">Track your earnings from extra referrals</p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: Coins, label: "Total Earned", value: "₱7,500", sub: "From 3 extra referrals" },
            { icon: ArrowUpRight, label: "Pending Payout", value: "₱5,000", sub: "2 for release" },
            { icon: Wallet, label: "Total Paid", value: "₱2,500", sub: "1 completed" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-card p-6 plot-border shadow-card"
            >
              <s.icon className="w-5 h-5 text-accent mb-3" />
              <p className="text-2xl font-bold text-foreground tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Commission Table */}
        <div className="rounded-2xl bg-card plot-border shadow-card overflow-hidden mb-8">
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Commission Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Referred Member</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Commission</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockCommissions.map((c) => (
                  <tr key={c.name} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-foreground">{c.name}</td>
                    <td className="p-4 text-sm text-muted-foreground tabular-nums">{c.date}</td>
                    <td className="p-4 text-sm font-semibold text-foreground tabular-nums">{c.commission}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                        c.status === "Paid" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payout Methods */}
        <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
          <h3 className="text-sm font-semibold text-foreground mb-4">Payout Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { icon: Building, name: "Bank Transfer", desc: "Direct to your bank account" },
              { icon: Wallet, name: "GCash", desc: "Instant mobile wallet transfer" },
              { icon: Coins, name: "Over-the-counter", desc: "Cash pickup at partner outlets" },
            ].map((m) => (
              <div key={m.name} className="flex items-start gap-3 p-4 rounded-xl bg-muted">
                <m.icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => toast.info("Minimum payout is ₱1,000")}
            className="px-6 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Request Payout
          </motion.button>
          <p className="text-xs text-muted-foreground mt-2">Minimum payout: ₱1,000</p>
        </div>
      </div>
    </div>
  );
}
