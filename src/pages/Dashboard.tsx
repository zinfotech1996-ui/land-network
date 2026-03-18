import { motion } from "framer-motion";
import { Copy, Check, Users, Clock, MapPin, Coins } from "lucide-react";
import { useState } from "react";
import CircularProgress from "@/components/CircularProgress";
import { currentUser, mockActivity, mockProperties } from "@/data/mockData";
import { toast } from "sonner";

const brandSpring = { type: "spring" as const, stiffness: 260, damping: 20 };

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const remaining = 10 - currentUser.directReferrals;

  const copyCode = () => {
    navigator.clipboard.writeText(currentUser.referralCode);
    setCopied(true);
    toast.success("Referral code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Welcome, {currentUser.name}!</h1>
            <p className="text-sm text-muted-foreground mt-1">Your referral dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Your Code:</span>
            <button
              onClick={copyCode}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border text-sm font-mono font-semibold text-foreground hover:bg-muted/80 transition-colors"
            >
              {currentUser.referralCode}
              {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
            </button>
          </div>
        </div>

        {/* Progress Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={brandSpring}
          className="rounded-2xl bg-primary p-8 shadow-elevated relative overflow-hidden mb-8"
        >
          <div className="relative z-10">
            <span className="label-caps text-primary-foreground/70">Your Progress</span>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-4">
              <CircularProgress value={currentUser.directReferrals} max={10} />
              <div>
                <p className="text-3xl font-bold text-primary-foreground tabular-nums">
                  {currentUser.directReferrals} / 10
                </p>
                <p className="text-primary-foreground/70 mt-1">Referrals confirmed</p>
                {remaining > 0 ? (
                  <p className="text-sm text-primary-foreground/60 mt-2">
                    {remaining} more {remaining === 1 ? "step" : "steps"} until the soil is yours.
                  </p>
                ) : (
                  <p className="text-sm text-sunset-light font-semibold mt-2">
                    🎉 You qualify for FREE land!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute -left-8 -top-8 w-32 h-32 bg-primary-foreground/5 rounded-full blur-2xl" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: "Total Referrals", value: currentUser.directReferrals.toString(), color: "text-primary" },
            { icon: Clock, label: "Pending", value: currentUser.pendingReferrals.toString(), color: "text-secondary" },
            { icon: MapPin, label: "Land Status", value: currentUser.qualifiedForLand ? "Qualified" : "In Progress", color: "text-accent" },
            { icon: Coins, label: "Extra Referrals", value: currentUser.extraReferrals.toString(), color: "text-primary" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-card p-5 plot-border shadow-card"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
              <p className="text-2xl font-bold text-foreground tabular-nums">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activity Feed */}
          <div className="rounded-2xl bg-card p-6 plot-border shadow-card">
            <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {mockActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{a.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">{a.name}</span>{" "}
                      <span className="text-muted-foreground">{a.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards Preview */}
          <div className="rounded-2xl bg-card plot-border shadow-card overflow-hidden">
            <div className="relative aspect-[16/9]">
              <img
                src={mockProperties[0].image}
                alt="Your future property"
                className={`w-full h-full object-cover ${remaining > 0 ? "blur-sm" : ""} transition-all duration-500`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-semibold">Your FREE land awaits!</p>
                <p className="text-xs text-primary-foreground/70 mt-1">
                  {remaining > 0
                    ? `Just ${remaining} more referrals to unlock`
                    : "Select your property now!"}
                </p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground">
                Sample property in {mockProperties[0].location} — for demonstration only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
