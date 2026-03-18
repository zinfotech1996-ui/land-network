import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Coins, FileText, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function PartnerPortal() {
  const [activeTab, setActiveTab] = useState<"revenue" | "quotation">("revenue");

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">Partner Portal</h1>
        <p className="text-sm text-muted-foreground mb-8">Welcome, Partner Maria</p>

        {/* Tab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => setActiveTab("revenue")}
            className={`text-left rounded-2xl p-6 plot-border shadow-card transition-colors ${
              activeTab === "revenue" ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            <Coins className={`w-6 h-6 mb-3 ${activeTab === "revenue" ? "text-primary-foreground" : "text-accent"}`} />
            <h3 className={`font-semibold mb-1 ${activeTab === "revenue" ? "text-primary-foreground" : "text-foreground"}`}>
              Revenue Share Program
            </h3>
            <p className={`text-xs ${activeTab === "revenue" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              Earn from your network's growth
            </p>
          </button>
          <button
            onClick={() => setActiveTab("quotation")}
            className={`text-left rounded-2xl p-6 plot-border shadow-card transition-colors ${
              activeTab === "quotation" ? "bg-primary text-primary-foreground" : "bg-card"
            }`}
          >
            <FileText className={`w-6 h-6 mb-3 ${activeTab === "quotation" ? "text-primary-foreground" : "text-accent"}`} />
            <h3 className={`font-semibold mb-1 ${activeTab === "quotation" ? "text-primary-foreground" : "text-foreground"}`}>
              Custom Quotation
            </h3>
            <p className={`text-xs ${activeTab === "quotation" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              Get a tailored commission structure
            </p>
          </button>
        </div>

        {/* Revenue Share Content */}
        {activeTab === "revenue" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
                <p className="text-xs text-muted-foreground">Current Share</p>
                <p className="text-2xl font-bold text-foreground mt-1 tabular-nums">2.5%</p>
                <p className="text-xs text-muted-foreground">per member in your network</p>
              </div>
              <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
                <p className="text-xs text-muted-foreground">Network Size</p>
                <p className="text-2xl font-bold text-foreground mt-1 tabular-nums">45</p>
                <p className="text-xs text-muted-foreground">total members</p>
              </div>
              <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
                <p className="text-xs text-muted-foreground">Est. Monthly Share</p>
                <p className="text-2xl font-bold text-foreground mt-1 tabular-nums">₱18,750</p>
                <p className="text-xs text-muted-foreground">based on current network</p>
              </div>
            </div>

            {/* Network levels */}
            <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
              <h3 className="text-sm font-semibold text-foreground mb-4">Share Breakdown by Level</h3>
              {[
                { level: "Level 1 — Direct", count: 15, share: "₱7,500" },
                { level: "Level 2 — Indirect", count: 20, share: "₱6,250" },
                { level: "Level 3 — Extended", count: 10, share: "₱5,000" },
              ].map((l) => (
                <div key={l.level} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-foreground">{l.level}</p>
                      <p className="text-xs text-muted-foreground">{l.count} members</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground tabular-nums">{l.share}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quotation Content */}
        {activeTab === "quotation" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-card p-6 plot-border shadow-card"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6">Generate Custom Quotation</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Quotation submitted!", { description: "We'll get back to you within 24 hours." });
              }}
              className="space-y-4 max-w-md"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Expected Members</label>
                <input
                  type="number"
                  placeholder="e.g. 100"
                  className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Commission Structure</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Percentage per member</option>
                  <option>Flat rate per referral</option>
                  <option>Hybrid model</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Special Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Any special requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Submit for Quotation <ChevronRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
