import TariffMonitor from "./components/TariffMonitor";
import EnergyConsumption from "./components/EnergyConsumption";
import SmartScheduling from "./components/SmartScheduling";
import SolarManagement from "./components/SolarManagement";
import Forecasting from "./components/Forecasting";
import Notifications from "./components/Notifications";
import CostBenefitAnalysis from "./components/CostBenefitAnalysis";
import { SignUp } from "@clerk/nextjs"; // Import SignUp component
import { currentUser } from "@clerk/nextjs/server"; // Import for server use
import Card from "./components/Card";

export default async function Home() {
  const user = await currentUser(); // Get the current user
  const isLoggedIn = !!user; // Check if user is logged in

  return (
    <>
      
      <main className="container flex mx-auto py-5 flex-row justify-center">
        {isLoggedIn ? (
          <ClientComponents />
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-3xl my-10 font-sans bg-blue-500 p-4 rounded-md text-white font-semibold">
              Sign In Or Sign Up
            </h2>
            <SignUp routing="hash" />
          </div>
        )}
      </main>
      
    </>
  );
}

// Client Component
const ClientComponents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-8 my-10 border">
      <Card link="/tariff-monitor" >
        <TariffMonitor />
      </Card>
      <Card link="/forecasting">
        <Forecasting />
      </Card>
      <Card link="/solar-management">
        <SolarManagement />
      </Card>
      <Card link="/cost-benefit-analysis">
        <CostBenefitAnalysis />
      </Card>
      
      <Card link="/energy-consumption">
        <EnergyConsumption />
      </Card>
   
      <Card link="/smart-scheduling">
        <SmartScheduling />
      </Card>
      <Card link="/notifications">
        <Notifications />
      </Card>
    </div>
  );
};
