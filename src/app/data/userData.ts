export const  usersData = [
    {
      username: "1",
      production: {
        current: { date: '2024-10-08', value: 5.2, unit: 'kW' },
        last30Days: [
          { date: '2024-09-30', production: 6.3 },
          { date: '2024-10-01', production: 5.8 },
          { date: '2024-10-02', production: 4.2 },
          { date: '2024-10-03', production: 5.1 },
          { date: '2024-10-04', production: 3.7 },
          { date: '2024-10-05', production: 6.0 },
          { date: '2024-10-06', production: 4.5 },
          { date: '2024-10-07', production: 5.5 },
          { date: '2024-10-08', production: 5.2 },
        ],
        expected: { today: 5.5, tomorrow: 6.0 },
        monthly: { total: 150.0, usage: 600.0 },
        savings: {
          daily: 5.0,
          weekly: 35.0,
          monthly: 150.0,
          lastYear: 1800.0,
        },
        battery: { capacity: { current: 80, max: 100 } },
      },
      usage: {
        current: {
          daily: 20.5,
          monthly: 620.0,
          weekly: 150.0,
          highEnergyAppliances: { airConditioner: 12, dishwasher: 8 },
        },
        hourlyRates: [
          { date: '2024-10-08', hour: '10:00', rate: 0.20 },
          { date: '2024-10-08', hour: '11:00', rate: 0.25 },
        ],
      },
      notifications: [
        {
          id: 1,
          type: 'High Tariff Alert',
          message: 'Peak rates expected from 5 PM to 8 PM today. Consider reducing usage.',
          timestamp: '2024-10-08T16:30:00Z',
          severity: 'high',
        },
        {
          id: 2,
          type: 'Low Tariff Alert',
          message: 'Rates are normal now. It\'s a good time to use high-energy appliances.',
          timestamp: '2024-10-08T09:00:00Z',
          severity: 'low',
        },
        {
          id: 3,
          type: 'Excess Solar Energy',
          message: 'Opportunity to sell excess solar energy back to the grid.',
          timestamp: '2024-10-08T10:00:00Z',
          severity: 'medium',
        },
        {
          id: 4,
          type: 'Savings Notification',
          message: 'Your total savings this month has reached $150!',
          timestamp: '2024-10-08T12:00:00Z',
          severity: 'info',
        },
        {
          id: 5,
          type: 'Device Activation',
          message: 'Your dishwasher has been scheduled to run at 11 PM.',
          timestamp: '2024-10-08T08:00:00Z',
          severity: 'info',
        }
      ],
    },
    {
      username: "2",
      production: {
        current: { date: '2024-10-08', value: 3.5, unit: 'kW' },
        last30Days: [
          { date: '2024-09-30', production: 4.0 },
          { date: '2024-10-01', production: 3.8 },
          { date: '2024-10-02', production: 4.2 },
          { date: '2024-10-03', production: 3.5 },
          { date: '2024-10-04', production: 3.9 },
          { date: '2024-10-05', production: 4.0 },
          { date: '2024-10-06', production: 4.1 },
          { date: '2024-10-07', production: 3.8 },
          { date: '2024-10-08', production: 3.5 },
        ],
        expected: { today: 3.8, tomorrow: 4.2 },
        monthly: { total: 100.0, usage: 500.0 },
        savings: {
          daily: 4.0,
          weekly: 28.0,
          monthly: 120.0,
          lastYear: 1500.0,
        },
        battery: { capacity: { current: 70, max: 100 } },
      },
      usage: {
        current: {
          daily: 18.5,
          monthly: 550.0,
          weekly: 120.0,
          highEnergyAppliances: { airConditioner: 10, heater: 7 },
        },
        hourlyRates: [
          { date: '2024-10-08', hour: '10:00', rate: 0.22 },
          { date: '2024-10-08', hour: '11:00', rate: 0.27 },
        ],
      },
      notifications: [
        {
          id: 1,
          type: 'High Tariff Alert',
          message: 'Peak rates expected from 5 PM to 8 PM today. Consider reducing usage.',
          timestamp: '2024-10-08T16:30:00Z',
          severity: 'high',
        },
        {
          id: 2,
          type: 'Low Tariff Alert',
          message: 'Rates are normal now. It\'s a good time to use high-energy appliances.',
          timestamp: '2024-10-08T09:00:00Z',
          severity: 'low',
        },
        {
          id: 3,
          type: 'Excess Solar Energy',
          message: 'Opportunity to sell excess solar energy back to the grid.',
          timestamp: '2024-10-08T10:00:00Z',
          severity: 'medium',
        },
        {
          id: 4,
          type: 'Savings Notification',
          message: 'Your total savings this month has reached $120!',
          timestamp: '2024-10-08T12:00:00Z',
          severity: 'info',
        },
        {
          id: 5,
          type: 'Device Activation',
          message: 'Your air conditioner has been scheduled to run at 9 PM.',
          timestamp: '2024-10-08T08:00:00Z',
          severity: 'info',
        }
      ],
    },
    // Add more users as needed
  ];
  
  