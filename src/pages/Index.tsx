import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Gift, Coins, ChevronDown, ChevronUp } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";
import heroCommunity from "@/assets/hero-community.jpg";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties, mockTestimonials, faqItems } from "@/data/mockData";

const brandSpring = { type: "spring" as const, stiffness: 260, damping: 20 };

export default function Index() {
  const [sliderValue, setSliderValue] = useState(15);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const freeLandValue = 480000;
  const extraReferrals = Math.max(sliderValue - 10, 0);
  const commissionPerReferral = 2500;
  const totalCommission = extraReferrals * commissionPerReferral;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <img src={heroCommunity} alt="Beautiful Filipino subdivision" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...brandSpring, delay: 0.1 }}
            >
              <span className="label-caps text-sunset-light mb-4 block">Land for every Filipino</span>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Own Land.<br />For Free.
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-[55ch] mb-8">
                Join Land Network, refer 10 friends, and get your own residential lot to build your home. No downpayment, just community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/register">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Start My Journey <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <a href="#how-it-works">
                  <button className="px-6 py-3 rounded-xl border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors">
                    How It Works
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-6 bg-muted border-y border-border">
        <div className="container flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
          <div>
            <p className="text-2xl font-bold text-foreground tabular-nums">2,345+</p>
            <p className="text-xs text-muted-foreground">Members Joined</p>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <p className="text-2xl font-bold text-foreground tabular-nums">156</p>
            <p className="text-xs text-muted-foreground">Lots Claimed</p>
          </div>
          <div className="w-px h-8 bg-border hidden md:block" />
          <div>
            <p className="text-2xl font-bold text-foreground tabular-nums">₱12.5M</p>
            <p className="text-xs text-muted-foreground">Commission Paid</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-caps text-accent mb-3 block">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, step: "01", title: "Register", desc: "Sign up for free at Land Network and get your unique referral code." },
              { icon: Users, step: "02", title: "Refer 10 Friends", desc: "Share your code with family and friends. Help them join the network." },
              { icon: Gift, step: "03", title: "Get FREE Land", desc: "Once 10 referrals are verified, select your residential lot for free." },
              { icon: Coins, step: "04", title: "Earn 5% More", desc: "Every referral beyond 10 earns you 5% commission. Keep growing!" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="label-caps text-muted-foreground">{item.step}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Calculator */}
      <section className="py-24 bg-muted/50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <span className="label-caps text-accent mb-3 block">Calculator</span>
            <h2 className="text-3xl font-bold text-foreground">See Your Potential Earnings</h2>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card plot-border">
            <label className="block text-sm font-medium text-foreground mb-4">
              How many people will you refer?
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-[hsl(var(--accent))]"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2 tabular-nums">
              <span>1</span>
              <span className="text-lg font-bold text-foreground">{sliderValue}</span>
              <span>50</span>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10">
                <div>
                  <p className="text-sm font-medium text-foreground">First 10 referrals</p>
                  <p className="text-xs text-muted-foreground">FREE residential lot</p>
                </div>
                <p className="text-lg font-bold text-primary tabular-nums">₱{freeLandValue.toLocaleString()}</p>
              </div>
              {extraReferrals > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex items-center justify-between p-4 rounded-xl bg-accent/10"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">Extra {extraReferrals} referrals</p>
                    <p className="text-xs text-muted-foreground">5% commission each</p>
                  </div>
                  <p className="text-lg font-bold text-accent tabular-nums">₱{totalCommission.toLocaleString()}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-caps text-accent mb-3 block">Your Future</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your referral becomes the foundation of your future
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-[50ch] mb-6">
                Together, let's build homes and communities. Every person you invite brings you one step closer to owning your own land.
              </p>
              <Link to="/register">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Start My Journey
                </motion.button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-elevated"
            >
              <img src={heroFamily} alt="Happy Filipino family in front of their home" className="w-full aspect-[4/3] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="label-caps text-accent mb-3 block">Sample Properties</span>
            <h2 className="text-3xl font-bold text-foreground">Featured Lots</h2>
            <p className="text-muted-foreground mt-2">Sample properties for demonstration purposes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-12">
            <span className="label-caps text-accent mb-3 block">Stories</span>
            <h2 className="text-3xl font-bold text-foreground">From Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockTestimonials.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 bg-card plot-border shadow-card"
              >
                <p className="text-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {t.avatar}
                  </div>
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <span className="label-caps text-accent mb-3 block">FAQ</span>
            <h2 className="text-3xl font-bold text-foreground">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="rounded-2xl bg-card plot-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-foreground">{item.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Own Land?</h2>
          <p className="text-muted-foreground mb-8 max-w-[45ch] mx-auto">
            10 referrals to your first lot. No downpayment, just community.
          </p>
          <Link to="/register">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Start My Journey
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
