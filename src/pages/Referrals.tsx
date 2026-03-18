import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Share2, ChevronDown, ChevronRight, Users } from "lucide-react";
import { currentUser, mockReferrals } from "@/data/mockData";
import { toast } from "sonner";

export default function Referrals() {
  const [copied, setCopied] = useState(false);
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const referralLink = `landnetwork.ph/join/${currentUser.referralCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const share = (platform: string) => {
    const text = `Join Land Network and get free land! Use my code: ${currentUser.referralCode}`;
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${referralLink}&quote=${encodeURIComponent(text)}`,
      messenger: `https://www.facebook.com/dialog/send?link=${referralLink}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + " " + referralLink)}`,
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        <h1 className="text-2xl font-bold text-foreground mb-2">Referral Management</h1>
        <p className="text-sm text-muted-foreground mb-8">Share your code and grow your network</p>

        {/* Referral Link Section */}
        <div className="rounded-2xl bg-card p-6 plot-border shadow-card mb-8">
          <h3 className="text-sm font-semibold text-foreground mb-4">Your Referral Link</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 px-4 py-2.5 rounded-xl bg-muted border border-border text-sm text-muted-foreground font-mono truncate flex items-center">
              {referralLink}
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={copyLink}
              className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy Link</>}
            </motion.button>
          </div>
          <div className="flex gap-2 mt-4">
            {["facebook", "messenger", "whatsapp"].map((p) => (
              <button
                key={p}
                onClick={() => share(p)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted text-xs font-medium text-muted-foreground hover:text-foreground transition-colors capitalize"
              >
                <Share2 className="w-3 h-3" />
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Network Tree */}
        <div className="rounded-2xl bg-card plot-border shadow-card mb-8 overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">My Network</h3>
            <p className="text-xs text-muted-foreground mt-1">Level 1 — Direct referrals</p>
          </div>
          <div className="p-4">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockReferrals.map((r) => (
                <button
                  key={r.name}
                  onClick={() => setExpandedUser(expandedUser === r.name ? null : r.name)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl transition-colors ${
                    expandedUser === r.name ? "bg-primary/10" : "hover:bg-muted"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{r.name[0]}</span>
                  </div>
                  <span className="text-xs text-foreground font-medium whitespace-nowrap">{r.name.split(" ")[0]}</span>
                  {expandedUser === r.name ? (
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-muted-foreground" />
                  )}
                </button>
              ))}
            </div>
            <AnimatePresence>
              {expandedUser && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-4 rounded-xl bg-muted">
                    <p className="text-xs text-muted-foreground mb-3">Level 2 — {expandedUser}'s referrals</p>
                    <div className="flex gap-2 flex-wrap">
                      {["User A", "User B", "User C"].map((u) => (
                        <div key={u} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card plot-border">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-[10px] font-bold text-secondary">{u[5]}</span>
                          </div>
                          <span className="text-xs text-foreground">{u}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Referral Table */}
        <div className="rounded-2xl bg-card plot-border shadow-card overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-sm font-semibold text-foreground">Referral Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Name</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Date Joined</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Status</th>
                  <th className="text-left text-xs font-medium text-muted-foreground p-4">Note</th>
                </tr>
              </thead>
              <tbody>
                {mockReferrals.map((r, i) => (
                  <tr key={r.name} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-primary">{r.name[0]}</span>
                        </div>
                        <span className="text-sm text-foreground font-medium">{r.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground tabular-nums">{r.dateJoined}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                        r.status === "Active" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      }`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {r.isLandProgress && (
                        <span className="text-xs text-primary font-medium">Progress to FREE Land</span>
                      )}
                      {r.isCommissionEligible && (
                        <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-medium">
                          5% Commission Eligible
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
