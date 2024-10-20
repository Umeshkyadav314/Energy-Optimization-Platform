import React from 'react';
import { Sun, Battery, Clock, BarChart2, Calendar, Bell, DollarSign } from 'lucide-react';
import Header from './components/Header';
import TariffMonitor from './components/TariffMonitor';
import EnergyConsumption from './components/EnergyConsumption';
import SmartScheduling from './components/SmartScheduling';
import SolarManagement from './components/SolarManagement';
import Forecasting from './components/Forecasting';
import Notifications from './components/Notifications';
import CostBenefitAnalysis from './components/CostBenefitAnalysis';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TariffMonitor />
          <EnergyConsumption />
          <SmartScheduling />
          <SolarManagement />
          <Forecasting />
          <Notifications />
          <CostBenefitAnalysis />
        </div>
      </main>
    </div>
  );
}

export default App;