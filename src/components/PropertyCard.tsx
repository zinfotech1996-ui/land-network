import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    location: string;
    size: string;
    image: string;
    features: string[];
    estimatedValue: string;
  };
  onClick?: () => void;
  showClaim?: boolean;
}

export default function PropertyCard({ property, onClick, showClaim }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden plot-border shadow-card bg-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg bg-card/20 backdrop-blur-md text-primary-foreground text-xs font-medium">
            Sample – Demo Only
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-primary-foreground font-semibold text-sm">{property.name}</p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-primary-foreground/80" />
            <span className="text-xs text-primary-foreground/80">{property.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground tabular-nums">{property.estimatedValue}</span>
          <span className="text-xs text-muted-foreground">{property.size}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {property.features.map((f) => (
            <span key={f} className="px-2 py-0.5 rounded-md bg-muted text-xs text-muted-foreground">
              {f}
            </span>
          ))}
        </div>
        {showClaim && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-2 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Claim This Property
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
