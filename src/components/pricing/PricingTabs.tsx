
import { cn } from "@/lib/utils";

interface PricingTabsProps {
  activeTab: "digital" | "led";
  setActiveTab: (tab: "digital" | "led") => void;
}

const PricingTabs = ({ activeTab, setActiveTab }: PricingTabsProps) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-900/80 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
        <button
          onClick={() => setActiveTab("digital")}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            activeTab === "digital" 
              ? "bg-gradient-rgb bg-300% animate-flow-rgb text-white shadow-md" 
              : "text-gray-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Digital Screens
        </button>
        <button
          onClick={() => setActiveTab("led")}
          className={`px-8 py-3 rounded-lg font-medium transition-all ${
            activeTab === "led" 
              ? "bg-gradient-rgb bg-300% animate-flow-rgb text-white shadow-md" 
              : "text-gray-300 hover:text-white hover:bg-white/5"
          }`}
        >
          LED Video Walls
        </button>
      </div>
    </div>
  );
};

export default PricingTabs;
