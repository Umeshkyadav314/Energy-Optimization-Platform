import Image from "next/image";
import TariffMonitor from "./components/TariffMonitor";
import EnergyConsumption from "./components/EnergyConsumption";
import SmartScheduling from "./components/SmartScheduling";
import SolarManagement from "./components/SolarManagement";
import Forecasting from "./components/Forecasting";
import Notifications from "./components/Notifications";
import CostBenefitAnalysis from "./components/CostBenefitAnalysis";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TariffMonitor />
          <Forecasting />
          <SolarManagement />
          <SmartScheduling />
          <EnergyConsumption />
          <CostBenefitAnalysis />
          <Notifications />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
