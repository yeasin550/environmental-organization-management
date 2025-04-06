import React, { useState, useRef } from 'react';

const Chart = () => {
    const chartData = [112, 10, 225, 134, 101, 80, 50, 100, 200];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    const containerRef = useRef(null);

    const [tooltip, setTooltip] = useState({
        content: '',
        open: false,
        x: 0,
        y: 0,
    });

    const showTooltip = (e, value) => {
        const bar = e.target;
        const container = containerRef.current;
        const barRect = bar.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const x = barRect.left - containerRect.left + barRect.width / 2;
        const y = barRect.top - containerRect.top - 40;

        setTooltip({
            content: value,
            open: true,
            x,
            y,
        });
    };

    const hideTooltip = () => {
        setTooltip({ content: '', open: false, x: 0, y: 0 });
    };

    return (
        <div className="w-full font-['IBM_Plex_Mono']">
            <div className="shadow p-6 rounded-lg bg-white border">
                <div className="md:flex md:justify-between md:items-center">
                    <div>
                        <h2 className="text-xl text-gray-800 font-bold leading-tight">Users</h2>
                        <p className="mb-2 text-gray-600 text-sm">Monthly Average</p>
                    </div>

                    {/* Legends */}
                    <div className="mb-4">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                            <div className="text-sm text-gray-700">User</div>
                        </div>
                    </div>
                </div>

                <div ref={containerRef} className="relative my-8">
                    {/* Tooltip */}
                    {tooltip.open && (
                        <div
                            className="absolute z-10 shadow-lg rounded-lg bg-white p-2 text-sm"
                            style={{ left: tooltip.x, top: tooltip.y, transform: 'translate(-50%, -100%)' }}
                        >
                            <div className="font-bold">Users: {tooltip.content}</div>
                        </div>
                    )}

                    {/* Bar Chart */}
                    <div className="flex -mx-2 items-end mb-2">
                        {chartData.map((data, idx) => (
                            <div key={idx} className="px-2 w-1/6">
                                <div
                                    style={{ height: `${data}px` }}
                                    className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative"
                                    onMouseEnter={(e) => showTooltip(e, data)}
                                    onMouseLeave={hideTooltip}
                                >
                                    <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">
                                        {data}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Line */}
                    <div
                        className="border-t border-gray-400 mx-auto"
                        style={{ height: '1px', width: `${100 - 1 / chartData.length * 100 + 3}%` }}
                    ></div>

                    {/* Labels */}
                    <div className="flex -mx-2 items-end mt-4">
                        {labels.map((label, idx) => (
                            <div key={idx} className="px-2 w-1/6">
                                <div className="relative">
                                    <div className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto" style={{ width: '1px' }}></div>
                                    <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">
                                        {label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
