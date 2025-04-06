import { useEffect, useRef, useState } from "react";
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary components
Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
);

// const Chart1 = ({contacts}) => {
const Chart1 = () => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const [chartData, setChartData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const options = [
        { label: "Today", value: "today" },
        { label: "Last 7 Days", value: "7days" },
        { label: "Last 30 Days", value: "30days" },
        { label: "Last 6 Months", value: "6months" },
        { label: "This Year", value: "year" },
    ];

    const selectedDate = options[selectedOption].value;

    useEffect(() => {
        fetch(
            "https://cdn.jsdelivr.net/gh/swindon/fake-api@master/tailwindAlpineJsChartJsEx1.json"
        )
            .then((res) => res.json())
            .then((res) => {
                setChartData(res.dates);
            });
    }, []);

    useEffect(() => {
        if (!chartData) return;

        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Create gradient for income area
        const incomeGradient = ctx.createLinearGradient(0, 0, 0, 300);
        incomeGradient.addColorStop(0, 'rgba(79, 100, 242, 0.4)');
        incomeGradient.addColorStop(1, 'rgba(79, 100, 242, 0.02)');

        // Create gradient for expenses area
        const expenseGradient = ctx.createLinearGradient(0, 0, 0, 300);
        expenseGradient.addColorStop(0, 'rgba(237, 100, 166, 0.4)');
        expenseGradient.addColorStop(1, 'rgba(237, 100, 166, 0.02)');

        chartInstanceRef.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: chartData[selectedDate].data.labels,
                datasets: [
                    {
                        label: "Income",
                        backgroundColor: incomeGradient,
                        borderColor: "rgba(102, 126, 234, 1)",
                        pointBackgroundColor: "rgba(102, 126, 234, 1)",
                        pointRadius: 0,
                        pointHoverRadius: 3,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        data: chartData[selectedDate].data.income,
                    },
                    {
                        label: "Expenses",
                        backgroundColor: expenseGradient,
                        borderColor: "rgba(237, 100, 166, 1)",
                        pointBackgroundColor: "rgba(237, 100, 166, 1)",
                        pointRadius: 0,
                        pointHoverRadius: 3,
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        data: chartData[selectedDate].data.expenses,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
                plugins: {
                    legend: {
                        position: "top",
                        align: "start",
                        labels: {
                            usePointStyle: true,
                            boxWidth: 6,
                            boxHeight: 6,
                            color: "#c1c7cd",
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: "rgba(53, 71, 125, 0.8)",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        padding: 10,
                        cornerRadius: 4,
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            color: "rgba(150, 150, 150, 0.9)",
                            font: {
                                size: 9
                            }
                        }
                    },
                    y: {
                        position: 'left',
                        border: {
                            display: false,
                        },
                        ticks: {
                            color: "rgba(150, 150, 150, 0.9)",
                            font: {
                                size: 9
                            },
                            stepSize: 500,
                            callback: function (value) {
                                if (value === 0) return 0;
                                return value >= 1000
                                    ? value < 1000000
                                        ? value / 1000 + "K"
                                        : value / 1000000 + "M"
                                    : value;
                            },
                        },
                        grid: {
                            color: "rgba(150, 150, 150, 0.1)",
                            drawBorder: false,
                        },
                    },
                },
            },
        });
    }, [chartData, selectedDate]);

    const formatComma = (num) =>
        num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400 rounded-lg shadow-xl p-6 h-[415px]">
            <div className="flex justify-between items-center mb-3">
                <div>
                    <h3 className="text-gray-400 text-sm font-medium">Total Donation</h3>
                    <div className="flex items-baseline mt-1">
                        <h2 className="text-white text-2xl font-bold">
                            ${chartData && formatComma(chartData[selectedDate].total)}
                        </h2>
                        <span className={`ml-2 text-sm font-medium ${chartData && chartData[selectedDate].upDown < 0 ? "text-red-500" : "text-green-500"}`}>
                            {chartData && (chartData[selectedDate].upDown < 0 ? "▼" : "▲")} {chartData && chartData[selectedDate].upDown}%
                        </span>
                    </div>
                </div>
                <div className="relative">
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded flex items-center"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {options[selectedOption].label}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {showDropdown && (
                        <div
                            className="bg-gray-700 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1"
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className="absolute top-0 right-0 w-3 h-3 bg-gray-700 transform rotate-45 -mt-1 mr-3"></span>
                            <div className="bg-gray-700 rounded w-full relative z-10 py-1">
                                <ul className="list-reset text-xs">
                                    {options.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`px-4 py-2 hover:bg-gray-600 hover:text-white transition-colors duration-100 cursor-pointer ${index === selectedOption ? "text-white" : ""}`}
                                            onClick={() => {
                                                setSelectedOption(index);
                                                setShowDropdown(false);
                                            }}
                                        >
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="h-64 mt-5">
                <canvas id="chart" ref={chartRef} />
            </div>
        </div>
    );
};

export default Chart1;