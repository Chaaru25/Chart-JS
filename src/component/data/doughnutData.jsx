// doughnut code
export const doughnutdata={
    labels:[
        'SDA',
        'SATA',
        'JPFS',
        'JDISK'
    ],
    datasets:[{
        label:'Accounting',
        data:[300,50,100],
        backgroundColor:[
            'rgb(255,99,132)',
            'rgb(54,162,235)',
            'rgb(255,205,86)',
        ],
        hoverOffset:4
    }]
}
export const doughnutdataTwo={
    labels:[
        'lib',
        'lib64',
        'opt',
        'JDISK',
        'mnt',
        'lib09',
        'str'
    ],
    datasets:[{
        label:'SDA',
        data:[200,20,150,70,110,90,100],
        backgroundColor:[
            'rgb(89, 71, 245)',
            'rgb(20, 238, 154)',
            'rgb(123, 209, 83)',
            'rgb(253, 163, 89)',
            'rgb(99, 255, 133)',
            'rgb(247, 120, 226)',
            'rgb(60, 162, 245)',
        ],
        hoverOffset:4
    }]
}
export const doughnutdataThree={
    labels:[
        'Mnt',
        'jdk',
        'pool',
        'SDK',
        'mnt',
        'LOK',
        'KJDisk'
    ],
    datasets:[{
        label:'SATA',
        data:[20,200,80,170,100,190,130],
        backgroundColor:[
            'rgb(89, 71, 245)',
            'rgb(20, 238, 154)',
            'rgb(123, 209, 83)',
            'rgb(253, 163, 89)',
            'rgb(99, 255, 133)',
            'rgb(247, 120, 226)',
            'rgb(60, 162, 245)',
        ],
        hoverOffset:4
    }]
}


export const donutConfig = {
    responsive: false,
        plugins:{
            title: {
                display: true,
                text: 'VOLUME USAGE'
              },
            legend: {
              display: true,
              position: 'right', // you can also try 'bottom', 'left', 'right'
              labels: {
                usePointStyle: false,
                boxWidth: 20,
                boxHeight: 20,
                padding: 10,
                color: '#000'
              },
            },
        },
    }
    export const donutConfigOne = {
        responsive: false,
            plugins:{
                title: {
                    display: true,
                    text: 'VOLUME USAGE: SDA'
                  },
                legend: {
                  display: true,
                  position: 'right', // you can also try 'bottom', 'left', 'right'
                  labels: {
                    usePointStyle: false,
                    boxWidth: 20,
                    boxHeight: 20,
                    padding: 10,
                    color: '#000'
                  },
                },
            },
        }
        export const donutConfigTwo = {
            responsive: false,
                plugins:{
                    title: {
                        display: true,
                        text: 'VOLUME USAGE: SATA'
                      },
                    legend: {
                      display: true,
                      position: 'right', // you can also try 'bottom', 'left', 'right'
                      labels: {
                        usePointStyle: false,
                        boxWidth: 20,
                        boxHeight: 20,
                        padding: 10,
                        color: '#000'
                      },
                    },
                },
            }