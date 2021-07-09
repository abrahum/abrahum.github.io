<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>var myChart = echarts.init(document.getElementById('1wlike'));
var option = {
    title: {
        text: "1w收藏以上的标签分布",
        subtext: "Pixiv数据截至17年2月"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["作品数量"]
    },
    xAxis: [
        {
            type: "value",
            boundaryGap: [0, 0.02],
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true
            },
            axisLine: {
                show: true
            },
            position: "bottom",
            nameLocation: "end",
        }
    ],
    yAxis: [
        {
            type: "category",
            data: ['R-18', '女の子', '10点じゃ足りない', 'なにこれ素敵', 'クリック推奨', "おそ松さん", "ハイセンス", "BL松", "なにこれかわいい", "刀剣乱舞", "腐向け", "漫画", "ふつくしい", "オリジナル"],
            left: "40%"
        }
    ],
    series: [
        {
            name: "作品数量",
            type: "bar",
            data: [584, 651, 657, 695, 724, 740, 749, 811, 827, 939, 1076, 1140, 1180, 1812]
        }
    ],
    animation: true,
    animationDuration: 1786,
    animationEasing: "Linear",
    left: "40%"
};
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('1klike'));
var option = {
    title: {
        text: "1k收藏以上的标签分布",
        subtext: "Pixiv数据截至17年2月"
    },
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: ["作品数量"]
    },
    toolbox: {
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar"]
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        show: true
    },
    xAxis: [
        {
            type: "value",
            boundaryGap: [0, 0.01],
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true
            },
            axisLine: {
                show: true
            },
            position: "bottom",
            nameLocation: "end"
        }
    ],
    yAxis: [
        {
            type: "category",
            data: ['なにこれ素敵', '黒子のバスケ', '刀剣乱舞', '女の子', '東方', '尻神様', "BL松", "ふつくしい", "艦隊これくしょん", "艦これ", "なにこれかわいい", "オリジナル", "漫画", "腐向け", "R-18"]
        }
    ],
    series: [
        {
            name: "作品数量",
            type: "bar",
            data: [9084, 9110, 9678, 9909, 11775, 12151, 13707, 15621, 17741, 19995, 21129, 30410, 32280, 38244, 56897]
        }
    ],
    animation: true,
    animationDuration: 1786,
    animationEasing: "Linear"
}
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('10w18'));
var option = {
    title: {
        text: "十万以上的R-18占比",
        subtext: "Pixiv数据截止17年2月",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["非R18"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "作品数",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 8,
                    name: "非R18"
                }
            ]
        }
    ]
}
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('1w18'));
var option = {
    title: {
        text: "一万以上的R-18占比",
        subtext: "Pixiv数据截止17年2月",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["非R18", "R18"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "作品数",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 11467,
                    name: "非R18"
                },
                {
                    value: 591,
                    name: "R18"
                }
            ]
        }
    ]
}
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('1k18'));
var option = {
    title: {
        text: "一千以上的R-18占比",
        subtext: "Pixiv数据截止17年2月",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["非R18", "R18"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "作品数",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 306678,
                    name: "非R18"
                },
                {
                    value: 56897,
                    name: "R18"
                }
            ]
        }
    ]
}
myChart.setOption(option);
var myChart = echarts.init(document.getElementById('1h18'));
var option = {
    title: {
        text: "现有一百以上数据中R-18占比",
        subtext: "Pixiv数据截止17年2月",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["非R18", "R18"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "作品数",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 1887878,
                    name: "非R18"
                },
                {
                    value: 362191,
                    name: "R18"
                }
            ]
        }
    ]
}
myChart.setOption(option);
