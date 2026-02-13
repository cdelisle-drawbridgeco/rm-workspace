'use client';

import React, { useState } from 'react';
import { formatUsdFromDollars } from '@/lib/format';

interface Account {
  id: string;
  name: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
    email: string | null;
    username: string | null;
    isActive: boolean;
  };
  segment: string | null;
  region: string | null;
  createdAt: Date;
  updatedAt: Date;
  opportunities: Array<{
    id: string;
    accountId: string;
    name: string;
    renewalDate: Date;
    quarterKey: string;
    expiringArrCents: number;
    stage: string | null;
    probability: number | null;
    healthScore: number | null;
    riskFlag: boolean | null;
    productFamily: string | null;
    termMonths: number | null;
    createdAt: Date;
    updatedAt: Date;
  }>;
}

interface Quarters {
  cq: string;
  nq: string;
  fq: string;
}

interface ForecastTrendChartProps {
  accounts: Account[];
  latestByAccount: Record<string, Record<string, { bestUsd: number; worstUsd: number; callUsd: number; notes: string }>>;
  vpForecasts: Record<string, { bestUsd: number; worstUsd: number; callUsd: number; notes: string }>;
  quarters: Quarters;
  selectedQuarter: string;
  selectedRM?: string; // Optional for RM filtering
}

export default function ForecastTrendChart({
  accounts,
  latestByAccount,
  vpForecasts,
  quarters,
  selectedQuarter,
  selectedRM
}: ForecastTrendChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<{
    x: number;
    y: number;
    label: string;
    value: string;
    period: string;
  } | null>(null);
  // Get the target quarter key based on selectedQuarter
  const getTargetQuarterKey = () => {
    switch (selectedQuarter) {
      case 'CQ': return quarters.cq;
      case 'NQ': return quarters.nq;
      case 'FQ': return quarters.fq;
      default: return quarters.cq;
    }
  };

  const targetQuarterKey = getTargetQuarterKey();

  // Generate historical monthly data points for the past 6 months leading to selected quarter
  const generateHistoricalData = () => {
    const historicalData = [];
    const currentDate = new Date();
    
    // Get selected quarter data as baseline, filtered by RM if specified
    const quarterAccounts = accounts.filter(acc => {
      if (!acc.owner) return false;
      const hasQuarterOpps = acc.opportunities.some(opp => opp.quarterKey === targetQuarterKey);
      const rmName = `${acc.owner.firstName} ${acc.owner.lastName}`;
      const matchesRM = !selectedRM || selectedRM === 'All' || rmName === selectedRM;
      return hasQuarterOpps && matchesRM;
    });

    let rmBest = 0, rmWorst = 0, rmCall = 0;
    for (const acc of quarterAccounts) {
      const accountSnapshots = latestByAccount[acc.name];
      const latest = accountSnapshots?.[targetQuarterKey];
      if (latest) {
        rmBest += latest.bestUsd || 0;
        rmWorst += latest.worstUsd || 0;
        rmCall += latest.callUsd || 0;
      }
    }

    const vpForecast = vpForecasts[targetQuarterKey];
    const vpBest = vpForecast?.bestUsd || 0;
    const vpWorst = vpForecast?.worstUsd || 0;
    const vpCall = vpForecast?.callUsd || 0;

    // Generate 6 months of historical data (assuming same values as current)
    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setMonth(date.getMonth() - i);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      
      historicalData.push({
        period: monthLabel,
        type: 'monthly',
        rmBest,
        rmWorst,
        rmCall,
        vpBest,
        vpWorst,
        vpCall
      });
    }

    return historicalData;
  };

  // Generate current quarter data (only for the selected quarter)
  const generateCurrentQuarterData = () => {
    const quarterAccounts = accounts.filter(acc => {
      if (!acc.owner) return false;
      const hasQuarterOpps = acc.opportunities.some(opp => opp.quarterKey === targetQuarterKey);
      const rmName = `${acc.owner.firstName} ${acc.owner.lastName}`;
      const matchesRM = !selectedRM || selectedRM === 'All' || rmName === selectedRM;
      return hasQuarterOpps && matchesRM;
    });

    // Calculate RM totals
    let rmBest = 0, rmWorst = 0, rmCall = 0;
    for (const acc of quarterAccounts) {
      const accountSnapshots = latestByAccount[acc.name];
      const latest = accountSnapshots?.[targetQuarterKey];
      if (latest) {
        rmBest += latest.bestUsd || 0;
        rmWorst += latest.worstUsd || 0;
        rmCall += latest.callUsd || 0;
      }
    }

    // Get VP forecast
    const vpForecast = vpForecasts[targetQuarterKey];
    const vpBest = vpForecast?.bestUsd || 0;
    const vpWorst = vpForecast?.worstUsd || 0;
    const vpCall = vpForecast?.callUsd || 0;

    return {
      period: selectedQuarter,
      type: selectedQuarter === 'CQ' ? 'weekly' : 'monthly',
      rmBest,
      rmWorst,
      rmCall,
      vpBest,
      vpWorst,
      vpCall
    };
  };

  // Combine historical and current data
  const allData = [...generateHistoricalData(), generateCurrentQuarterData()];

  // Chart dimensions - compact
  const width = 700;
  const height = 300;
  const padding = 60;
  const chartWidth = width - (padding * 2);
  const chartHeight = height - (padding * 2);

  // Find max value for scaling
  const maxValue = Math.max(
    ...allData.flatMap(d => [d.rmBest, d.rmWorst, d.rmCall, d.vpBest, d.vpWorst, d.vpCall])
  );

  // Helper function to convert value to Y coordinate
  const valueToY = (value: number) => {
    return padding + chartHeight - (value / maxValue) * chartHeight;
  };

  // Helper function to convert data index to X coordinate
  const dataToX = (index: number) => {
    return padding + (index / (allData.length - 1)) * chartWidth;
  };

  // Generate path for line with different styles for monthly vs weekly
  const createPath = (values: number[], dataType: string) => {
    const points = values.map((value, index) => {
      const x = dataToX(index);
      const y = valueToY(value);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
    return points;
  };


  // Split data into monthly and weekly segments
  const monthlyData = allData.filter(d => d.type === 'monthly');
  const weeklyData = allData.filter(d => d.type === 'weekly');

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing forecast trends across quarters
        </div>
        <div className="flex flex-col space-y-1 text-xs">
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
            <span>Best Case</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <span>Worst Case</span>
          </div>
          <div className="flex items-center">
            <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
            <span>Call</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg width={width} height={height} className="border">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => {
            const y = padding + chartHeight - (ratio * chartHeight);
            return (
              <line
                key={ratio}
                x1={padding}
                y1={y}
                x2={padding + chartWidth}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth={1}
              />
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map(ratio => {
            const y = padding + chartHeight - (ratio * chartHeight);
            const value = maxValue * ratio;
            return (
              <text
                key={ratio}
                x={padding - 10}
                y={y + 4}
                textAnchor="end"
                className="text-sm fill-gray-600"
              >
                {formatUsdFromDollars(value)}
              </text>
            );
          })}

          {/* X-axis labels */}
          {allData.map((data, index) => {
            const x = dataToX(index);
            return (
              <text
                key={`${data.period}-${index}`}
                x={x}
                y={height - padding + 20}
                textAnchor="middle"
                className="text-sm fill-gray-600"
              >
                {data.period}
              </text>
            );
          })}

          {/* VP Forecast Lines - Only show when not in RM mode and VP data exists */}
          {(!selectedRM || Object.keys(vpForecasts).length > 0) && (
            <>
              <path
                d={createPath(allData.map(d => d.vpBest), 'weekly')}
                stroke="#10b981"
                strokeWidth={4}
                fill="none"
              />
              <path
                d={createPath(allData.map(d => d.vpWorst), 'weekly')}
                stroke="#ef4444"
                strokeWidth={4}
                fill="none"
              />
              <path
                d={createPath(allData.map(d => d.vpCall), 'weekly')}
                stroke="#3b82f6"
                strokeWidth={4}
                fill="none"
              />
            </>
          )}

          {/* RM Forecast Lines - Only show when in RM mode */}
          {selectedRM && (
            <>
              <path
                d={createPath(allData.map(d => d.rmBest), 'rm')}
                stroke="#10b981"
                strokeWidth={3}
                fill="none"
              />
              <path
                d={createPath(allData.map(d => d.rmWorst), 'rm')}
                stroke="#ef4444"
                strokeWidth={3}
                fill="none"
              />
              <path
                d={createPath(allData.map(d => d.rmCall), 'rm')}
                stroke="#3b82f6"
                strokeWidth={3}
                fill="none"
              />
            </>
          )}

          {/* Data points with interactive tooltips */}
          {allData.map((data, index) => {
            const x = dataToX(index);
            const isCurrentQuarter = data.period === selectedQuarter;
            const isRMMode = selectedRM !== undefined;
            
            return (
              <g key={`${data.period}-${index}`}>
                {/* VP Data points (when not in RM mode or when VP data exists) */}
                {(!isRMMode || Object.keys(vpForecasts).length > 0) && (
                  <>
                    <circle 
                      cx={x} 
                      cy={valueToY(data.vpBest)} 
                      r={isCurrentQuarter ? 8 : 6} 
                      fill="#10b981" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.vpBest) - 10,
                        label: 'VP Best',
                        value: formatUsdFromDollars(data.vpBest),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    
                    <circle 
                      cx={x} 
                      cy={valueToY(data.vpWorst)} 
                      r={isCurrentQuarter ? 8 : 6} 
                      fill="#ef4444" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.vpWorst) - 10,
                        label: 'VP Worst',
                        value: formatUsdFromDollars(data.vpWorst),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    
                    <circle 
                      cx={x} 
                      cy={valueToY(data.vpCall)} 
                      r={isCurrentQuarter ? 8 : 6} 
                      fill="#3b82f6" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-8 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.vpCall) - 10,
                        label: 'VP Call',
                        value: formatUsdFromDollars(data.vpCall),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  </>
                )}
                
                {/* RM Data points (when in RM mode) */}
                {isRMMode && (
                  <>
                    <circle 
                      cx={x} 
                      cy={valueToY(data.rmBest)} 
                      r={isCurrentQuarter ? 6 : 4} 
                      fill="#10b981" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-6 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.rmBest) - 10,
                        label: 'RM Best',
                        value: formatUsdFromDollars(data.rmBest),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    
                    <circle 
                      cx={x} 
                      cy={valueToY(data.rmWorst)} 
                      r={isCurrentQuarter ? 6 : 4} 
                      fill="#ef4444" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-6 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.rmWorst) - 10,
                        label: 'RM Worst',
                        value: formatUsdFromDollars(data.rmWorst),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                    
                    <circle 
                      cx={x} 
                      cy={valueToY(data.rmCall)} 
                      r={isCurrentQuarter ? 6 : 4} 
                      fill="#3b82f6" 
                      stroke="white" 
                      strokeWidth={2}
                      className="cursor-pointer hover:r-6 transition-all"
                      onMouseEnter={() => setHoveredPoint({
                        x: x + 10,
                        y: valueToY(data.rmCall) - 10,
                        label: 'RM Call',
                        value: formatUsdFromDollars(data.rmCall),
                        period: data.period
                      })}
                      onMouseLeave={() => setHoveredPoint(null)}
                    />
                  </>
                )}
              </g>
            );
          })}

          {/* Custom tooltip */}
          {hoveredPoint && (
            <g>
              <rect
                x={hoveredPoint.x - 5}
                y={hoveredPoint.y - 25}
                width={120}
                height={20}
                fill="rgba(0, 0, 0, 0.8)"
                rx={4}
              />
              <text
                x={hoveredPoint.x + 5}
                y={hoveredPoint.y - 10}
                fill="white"
                fontSize="12"
                className="font-medium"
              >
                {hoveredPoint.label}: {hoveredPoint.value}
              </text>
              <text
                x={hoveredPoint.x + 5}
                y={hoveredPoint.y + 5}
                fill="white"
                fontSize="10"
                className="opacity-80"
              >
                {hoveredPoint.period}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="mt-4 flex justify-center text-xs text-gray-600">
        <div className="flex items-center">
          <div className="mr-2 h-2 w-4 border-t-2 border-gray-400"></div>
          <span>{selectedRM ? 'RM Forecasts (Account Level Rollup)' : 'VP Forecasts (Executive Level)'}</span>
        </div>
      </div>
    </div>
  );
}
