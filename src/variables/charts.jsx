import React from 'react';
import {Line} from "react-chartjs-2";

let vehicles_paginate_api = 'http://localhost:8000/api/v1/vehicle-paginate/'
let sellers_paginate_api = 'http://localhost:8000/api/v1/seller-paginate/'
let history_paginate_api = 'http://localhost:8000/api/v1/history-paginate/'
let vehicles_api = 'http://localhost:8000/api/v1/vehicle/'
let sellers_api = 'http://localhost:8000/api/v1/seller/'
let history_api = 'http://localhost:8000/api/v1/history/'
let makes_api = 'http://localhost:8000/api/v1/makes/'
let vehicle_stats_api = 'http://localhost:8000/api/v1/vehicle-stats/'
let headers = {headers: {'Authorization': 'Token 09e954ac499b7d38c53f8a306c3093fff3926c3d'}}

function DurationChart(props) {
    return <div>
        {
            <Line
                data={canvas => {
                    let ctx = canvas.getContext("2d");

                    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

                    return {
                        labels: props.makes,
                        datasets: [
                            {
                                label: "Average",
                                fill: true,
                                backgroundColor: "#581845",
                                borderColor: "#581845",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#581845",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#581845",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=> stat.duration.average)
                            },
                            {
                                label: "Standard Deviation",
                                fill: true,
                                backgroundColor: "#FFC300",
                                borderColor: "#FFC300",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#FFC300",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#FFC300",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=>stat.duration.standard_deviation)
                            },
                            {
                                label: "Variance",
                                fill: true,
                                backgroundColor: "#FF5733",
                                borderColor: "#FF5733",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#FF5733",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#FF5733",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=>stat.duration.variance)
                            },
                        ]
                    };
                }}
                options={chart1_2_options}
            />
        }
    </div>
}

function PriceChart(props) {
    return <div>
        {
            <Line
                data={canvas => {
                    let ctx = canvas.getContext("2d");

                    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
                    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
                    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

                    return {
                        labels: props.makes,
                        datasets: [
                            {
                                label: "Average",
                                fill: true,
                                backgroundColor: "#581845",
                                borderColor: "#581845",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#581845",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#581845",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=> stat.price.average)
                            },
                            {
                                label: "Standard Deviation",
                                fill: true,
                                backgroundColor: "#FFC300",
                                borderColor: "#FFC300",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#FFC300",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#FFC300",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=>stat.price.standard_deviation)
                            },
                            {
                                label: "Variance",
                                fill: true,
                                backgroundColor: "#FF5733",
                                borderColor: "#FF5733",
                                borderWidth: 2,
                                borderDash: [],
                                borderDashOffset: 0.0,
                                pointBackgroundColor: "#FF5733",
                                pointBorderColor: "rgba(255,255,255,0)",
                                pointHoverBackgroundColor: "#FF5733",
                                pointBorderWidth: 20,
                                pointHoverRadius: 4,
                                pointHoverBorderWidth: 15,
                                pointRadius: 4,
                                data: props.stats.map(stat=>stat.price.variance)
                            },
                        ]
                    };
                }}
                options={chart1_2_options}
            />
        }
    </div>
}

let chart1_2_options = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
    scales: {
        yAxes: [{
                display: false,
            }],
        xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a"
                }
            }]
    }
};

export {
    DurationChart,
    PriceChart,
    makes_api,
    vehicle_stats_api,
    vehicles_paginate_api,
    headers,
    vehicles_api,
    history_api,
    sellers_api,
}
