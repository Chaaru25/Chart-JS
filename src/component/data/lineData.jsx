export const options =  {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'DATA EXPLORATION: Today (11 July 2025 20:34)'
      },
    legend: {
      display: true,
      position: 'top', 
      labels: {
        usePointStyle: false,
        padding: 20,
      },
    },
  },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
}
export const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sept','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [10,12,30,11,12,40,20,10,50,12,70,10],
      borderColor: 'rgba(75,192,192,1)',
      borderWidth:1.5,
      backgroundColor: 'rgb(232, 248, 248)',
      tension: 0.8, // for smooth curves
      // cubicInterpolationMode: 'monotone',  
      fill: true,
    },
    {
      label: 'Delivery',
      data: [0,11,13,1,12,4,20,10,30,12,90,1],
      borderColor: 'rgb(235, 89, 21)',
      borderWidth:1.5,
      backgroundColor: 'rgb(250, 243, 240)',
      tension: 0.6, // for smooth curves
      // cubicInterpolationMode: 'monotone',
      fill: true,
    },
  ],
};

export const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sept','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [200,129,930,811,712,640,520,410,350,212,170,10],
      borderColor: 'rgba(75,192,192,1)',
      borderWidth:1.5,
      backgroundColor: 'rgb(232, 248, 248)',
      tension: 0.8, // for smooth curves
      // cubicInterpolationMode: 'monotone',  
      fill: true,
    },
    {
      label: 'Delivery',
      data: [100,911,813,791,112,504,820,710,830,812,990,1011],
      borderColor: 'rgb(235, 89, 21)',
      borderWidth:1.5,
      backgroundColor: 'rgb(250, 243, 240)',
      tension: 0.6, // for smooth curves
      // cubicInterpolationMode: 'monotone',
      fill: true,
    },
  ],
};
export const YearlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','June','July','Aug','Sept','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Sales',
      data: [1250,900,350,101,1010,400,2500,1000,550,120,700,2000],
      borderColor: 'rgba(75,192,192,1)',
      borderWidth:1.5,
      backgroundColor: 'rgb(232, 248, 248)',
      tension: 0.8, // for smooth curves
      // cubicInterpolationMode: 'monotone',  
      fill: true,
    },
    {
      label: 'Delivery',
      data: [2500,1001,1300,1500,1200,400,2000,1300,3570,1203,900,1034],
      borderColor: 'rgb(235, 89, 21)',
      borderWidth:1.5,
      backgroundColor: 'rgb(250, 243, 240)',
      tension: 0.6, // for smooth curves
      // cubicInterpolationMode: 'monotone',
      fill: true,
    },
  ],
};