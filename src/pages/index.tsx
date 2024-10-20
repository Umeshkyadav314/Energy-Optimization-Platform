import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TariffMonitor from '../components/TariffMonitor';
import EnergyConsumption from '../components/EnergyConsumption';
import SmartScheduling from '../components/SmartScheduling';
import SolarManagement from '../components/SolarManagement';
import Forecasting from '../components/Forecasting';
import Notifications from '../components/Notifications';
import CostBenefitAnalysis from '../components/CostBenefitAnalysis';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Solar Smart Energy</title>
        <meta name="description" content="ToD/ToU based platform for solar renewable energy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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