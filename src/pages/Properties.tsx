import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Ruler, Star } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties } from "@/data/mockData";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<typeof mockProperties[0] | null>(null);

  const handleClaim = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    toast.success("Property claimed! (Demo)", { description: "This is a demo. No actual claim was made." });
    setSelectedProperty(null);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="label-caps text-accent mb-3 block">🎉 Congratulations</span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              You've earned your FREE land!
            </h1>
            <p className="text-sm text-muted-foreground">Select your preferred property below</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((p) => (
            <PropertyCard key={p.id} property={p} onClick={() => setSelectedProperty(p)} showClaim />
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedProperty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setSelectedProperty(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg rounded-2xl bg-card shadow-elevated overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img src={selectedProperty.image} alt={selectedProperty.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-foreground" />
                  </button>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-accent/90 text-accent-foreground text-xs font-semibold">
                    SAMPLE PROPERTY
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{selectedProperty.name}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" /> {selectedProperty.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Ruler className="w-3.5 h-3.5" /> {selectedProperty.size}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProperty.features.map((f) => (
                        <span key={f} className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                          <Star className="w-3 h-3" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted">
                    <span className="text-sm text-muted-foreground">Estimated Value</span>
                    <span className="text-lg font-bold text-foreground tabular-nums">{selectedProperty.estimatedValue}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    SAMPLE PROPERTY — For demonstration purposes only
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClaim}
                    className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Claim This Property
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
