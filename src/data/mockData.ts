import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export const currentUser = {
  name: "Maria Dela Cruz",
  referralCode: "MARIA123",
  directReferrals: 6,
  pendingReferrals: 2,
  qualifiedForLand: false,
  extraReferrals: 0,
  earnings: 0,
  email: "maria@email.com",
};

export const mockUsers = [
  { name: "Maria Dela Cruz", referralCode: "MARIA123", directReferrals: 7, qualifiedForLand: false, earnings: 0 },
  { name: "Jose Rizal", referralCode: "JOSE456", directReferrals: 15, qualifiedForLand: true, extraReferrals: 5, earnings: 12500 },
  { name: "Ana Santos", referralCode: "ANA789", directReferrals: 10, qualifiedForLand: true, extraReferrals: 0, earnings: 0 },
  { name: "Ben Torres", referralCode: "BEN321", directReferrals: 3, qualifiedForLand: false, earnings: 0 },
  { name: "Carla Cruz", referralCode: "CARLA654", directReferrals: 8, qualifiedForLand: false, earnings: 0 },
  { name: "David Lim", referralCode: "DAVID987", directReferrals: 12, qualifiedForLand: true, extraReferrals: 2, earnings: 5000 },
  { name: "Elena Gomez", referralCode: "ELENA111", directReferrals: 5, qualifiedForLand: false, earnings: 0 },
  { name: "Francisco Reyes", referralCode: "FRAN222", directReferrals: 10, qualifiedForLand: true, extraReferrals: 0, earnings: 0 },
  { name: "Gregorio Santos", referralCode: "GREG333", directReferrals: 1, qualifiedForLand: false, earnings: 0 },
  { name: "Hannah Villanueva", referralCode: "HAN444", directReferrals: 6, qualifiedForLand: false, earnings: 0 },
];

export const mockReferrals = [
  { name: "Ana Santos", dateJoined: "Mar 15, 2024", status: "Active" as const, isLandProgress: true },
  { name: "Ben Torres", dateJoined: "Mar 14, 2024", status: "Active" as const, isLandProgress: true },
  { name: "Carla Cruz", dateJoined: "Mar 10, 2024", status: "Active" as const, isLandProgress: true },
  { name: "David Lim", dateJoined: "Mar 5, 2024", status: "Verified" as const, isLandProgress: true },
  { name: "Elena Gomez", dateJoined: "Mar 1, 2024", status: "Verified" as const, isCommissionEligible: true },
  { name: "Francisco Reyes", dateJoined: "Feb 28, 2024", status: "Verified" as const, isCommissionEligible: true },
];

export const mockActivity = [
  { name: "Pedro Reyes", action: "registered (pending verification)", time: "Just now" },
  { name: "Juan Dela Cruz", action: "registered using your code", time: "2 days ago" },
  { name: "Maria Santos", action: "registered using your code", time: "5 days ago" },
  { name: "Lisa Tan", action: "completed verification", time: "1 week ago" },
];

export const mockProperties = [
  { id: "LOT001", name: "Greenfield Lot A", location: "Antipolo, Rizal", size: "120 sqm", image: property1, features: ["Near school", "Flat terrain", "With water & electricity"], estimatedValue: "₱480,000" },
  { id: "LOT002", name: "Hillside Lot B", location: "Tagaytay, Cavite", size: "150 sqm", image: property2, features: ["Mountain view", "Cool climate", "Near highway"], estimatedValue: "₱650,000" },
  { id: "LOT003", name: "Sunrise Lot C", location: "Meycauayan, Bulacan", size: "100 sqm", image: property3, features: ["Near market", "Gated community", "With playground"], estimatedValue: "₱380,000" },
  { id: "LOT004", name: "Garden Lot D", location: "San Pedro, Laguna", size: "110 sqm", image: property4, features: ["Corner lot", "Near park", "Wide road"], estimatedValue: "₱420,000" },
  { id: "LOT005", name: "Lakeview Lot E", location: "Lipa, Batangas", size: "130 sqm", image: property5, features: ["Subdivision", "Street lights", "Near church"], estimatedValue: "₱520,000" },
  { id: "LOT006", name: "Riverside Lot F", location: "Sta. Rosa, Laguna", size: "90 sqm", image: property6, features: ["Creek view", "Peaceful area", "Near school"], estimatedValue: "₱350,000" },
];

export const mockCommissions = [
  { name: "Gregorio Santos", date: "Mar 12", commission: "₱2,500", status: "For Release" as const },
  { name: "Hannah Villanueva", date: "Mar 8", commission: "₱2,500", status: "For Release" as const },
  { name: "Ian Mercado", date: "Mar 3", commission: "₱2,500", status: "Paid" as const },
];

export const mockTestimonials = [
  { name: "The Reyes Family", text: "Thank you Land Network, we now have our own land!", avatar: "R" },
  { name: "Ka Roberto", text: "With the 5% commission, we earn extra income while helping others.", avatar: "K" },
  { name: "Aling Nena", text: "The process is simple. I just referred my siblings, and now we have land!", avatar: "A" },
];

export const faqItems = [
  { q: "How does Land Network work?", a: "Register for free, share your unique referral code with friends and family. Once 10 people register using your code, you qualify for a FREE residential lot." },
  { q: "When do I receive the land?", a: "Once your 10 referrals are verified and confirmed, you'll be notified to select your preferred lot from available properties. The claiming process takes 30-60 days." },
  { q: "Where are the properties located?", a: "Properties are located across Luzon including Rizal, Cavite, Bulacan, Laguna, and Batangas. More locations are added regularly." },
  { q: "How do I claim my commission?", a: "For every referral beyond 10, you earn 5% commission. You can request payouts via Bank Transfer, GCash, or over-the-counter once you reach the ₱1,000 minimum." },
];
