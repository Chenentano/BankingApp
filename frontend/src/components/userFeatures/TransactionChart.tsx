import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { PieController, ArcElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, CategoryScale, Title, Tooltip, Legend);

interface TransactionChartProps {
    income: number;
    outcome: number;
}

const TransactionChart: React.FC<TransactionChartProps> = ({ income, outcome }) => {
    const chartRef = useRef<Chart<'pie', number[], string> | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            const config: ChartConfiguration<'pie', number[], string> = {
                type: 'pie',
                data: {
                    labels: ['Einnahmen', 'Ausgaben'],
                    datasets: [
                        {
                            data: [income, outcome],
                            backgroundColor: [
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 1)',
                                'rgba(255, 99, 132, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const labelIndex = context.dataIndex;
                                    const label = context.chart.data.labels ? context.chart.data.labels[labelIndex] : 'Unknown';
                                    const value = context.dataset.data[labelIndex];
                                    const total = income + outcome;
                                    const percentage = Math.round((value / total) * 100);
                                    return `${label}: ${value.toFixed(2)} (${percentage}%)`;
                                }
                            }
                        },
                        legend: {
                            display: true
                        }
                    }
                }
            };

            if (!chartRef.current) {
                chartRef.current = new Chart(ctx, config);
            } else {
                chartRef.current.data.datasets[0].data = [income, outcome];
                chartRef.current.update();
            }
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };
    }, [income, outcome]);

    return (
        <div className="w-full h-64 md:h-80 lg:h-96 mx-auto">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default TransactionChart;