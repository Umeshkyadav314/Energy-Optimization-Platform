import TariffMonitor from "./components/TariffMonitor";
import EnergyConsumption from "./components/EnergyConsumption";
import SmartScheduling from "./components/SmartScheduling";
import SolarManagement from "./components/SolarManagement";
import Forecasting from "./components/Forecasting";
import Notifications from "./components/Notifications";
import CostBenefitAnalysis from "./components/CostBenefitAnalysis";
import Header from "./components/Header";
import { SignIn, SignUp } from "@clerk/nextjs"; // Import SignIn and SignUp components
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser(); // Get the current user
  const isLoggedIn = !!user; // Check if user is logged in

  return (
    <>
      <div className="bg-gray-800">
        <Header />
      </div>
      <main className="container flex mx-auto py-5 flex-row justify-center">
        {isLoggedIn ? (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6">
            <TariffMonitor />
            <Forecasting />
            <SolarManagement />
            <SmartScheduling />
            <EnergyConsumption />
            <CostBenefitAnalysis />
            <Notifications />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <>
              <h2 className="text-3xl mb-4 font-sans bg-blue-500 p-4 rounded-md text-white  font-semibold">
                Please Sign In or Sign Up
              </h2>
              <SignUp routing="hash" />
            </>
          </div>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-white bg-gray-700 h-50 p-5">
        <h3>&copy;2024 All right reserved.</h3>
      </footer>
    </>
  );
}
