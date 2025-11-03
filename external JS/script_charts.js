Highcharts.chart('container-chart',{
    chart:{
        type:'pie'
    },

    title:{
        Text:'Persentase Pengguna Browser'
    },

    tooltip:{
        pointFormat:'{series.name}: <b>{point.percentage:.if}%</b>'
    },

    plotOptions:{
        pie:{
            allowPointSelect: true,
            curor: 'pointer',
            dataLabels:{
                enable: true,
                format: '<b>{point.name}</b>: {point.percentage:.if}%'
            }
        }
    },

    series:[{
        name: 'Pangsa Pasar',
        colorByPoint: true,
        data:[{
            name: 'Chrome',
            y: 74.2,
            sliced: true,
            selected: true
        },{
            name: 'FireFox',
            y: 12.5
        },{
            name: 'Edge',
            y: 8.3
        },{
            name: 'Safari',
            y: 3.1
        },{
            name: 'Lainnya',
            y: 1.9
        }]
    }]
});