// user
const notuser = document.querySelector(".not_user")
const thisuser = document.querySelector(".this_user")
const thisUserText = document.querySelector(".this_user_text")
const itemthisuser = document.querySelector(".item_this_user")
const logout = document.querySelector(".logout")
const login = document.querySelector(".login")
const aboutWeb = document.querySelector(".aboutWeb")
if(localStorage.getItem("first") , localStorage.getItem("last")){
    notuser.remove()
    thisuser.style.visibility = "visible"
    logout.style.visibility = "visible"
    aboutWeb .style.display = "inline-block"
    login.style.display = "none"
    thisUserText.innerHTML = localStorage.getItem("first") + " " + localStorage.getItem("last")
}
// nav
const links = document.querySelectorAll('#nav_item .nav-link');
links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(link => link.classList.remove('active'));

    link.classList.add('active');
  });
});
//tooltip
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// chart
const growthChart = echarts.init(document.getElementById('growth-chart'));

const option = {
    backgroundColor: 'rgba(0 , 0 , 0)', 
    animation: false,
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        textStyle: {
            color: '#000000'
        }
    },
    legend: {
        data: ['Front-End Developers', 'Average Salary'],
        textStyle: {
            color: '#ffffff' 
        }
    },
    grid: {
        left: 0,
        right: 0,
        top: 60,
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        axisLine: {
            lineStyle: {
                color: '#888888' 
            }
        },
        axisLabel: {
            color: '#cccccc' 
        }
    },
    yAxis: [
        {
            type: 'value',
            name: 'Developers (millions)',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#888888'
                }
            },
            axisLabel: {
                formatter: '{value}M',
                color: '#cccccc'
            },
            splitLine: {
                lineStyle: {
                    color: '#444444'
                }
            }
        },
        {
            type: 'value',
            name: 'Salary ($K)',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#888888'
                }
            },
            axisLabel: {
                formatter: '${value}K',
                color: '#cccccc'
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: 'Front-End Developers',
            type: 'line',
            smooth: true,
            data: [1.2, 1.6, 2.0, 2.5, 3.0, 3.6, 4.1, 4.5, 4.8, 5.2, 5.6],
            itemStyle: {
                color: 'rgba(87, 181, 231, 1)'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(87, 181, 231, 0.4)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(87, 181, 231, 0.1)'
                        }
                    ]
                }
            }
        },
        {
            name: 'Average Salary',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [75, 80, 85, 90, 95, 98, 102, 105, 108, 110, 112],
            itemStyle: {
                color: 'rgba(252, 141, 98, 1)'
            }
        }
    ]
};

growthChart.setOption(option);

      window.addEventListener('resize', function() {
      growthChart.resize();
  });
  
// about web
const infoWeb = document.querySelector("#infoWeb")
const XmarkWeb = document.querySelector("#XmarkWeb")
aboutWeb.addEventListener("click", () => {
    infoWeb.style.cssText = `
        display: block;
        transition: 0.5s;
    `;
});
XmarkWeb.addEventListener("click" , () => {
    infoWeb.style.display ="none"
})