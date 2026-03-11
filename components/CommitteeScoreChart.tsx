'use client'

import { useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts'

interface LeaderboardEntry {
  name: string
  committee: string
  score: number
}

interface CommitteeScoreChartProps {
  data: LeaderboardEntry[]
}

export default function CommitteeScoreChart({ data }: CommitteeScoreChartProps) {
  const committeeTotals = useMemo(() => {
    const totals: Record<string, number> = {}
    
    data.forEach(entry => {
      if (totals[entry.committee]) {
        totals[entry.committee] += entry.score
      } else {
        totals[entry.committee] = entry.score
      }
    })
    
    return Object.entries(totals).map(([committee, total]) => ({
      committee,
      total
    }))
  }, [data])

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 mt-4 sm:mt-6 md:mt-8 chart-bars-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={committeeTotals}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="goldShine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1}>
                <animate attributeName="stop-color" values="#FFFFFF;#FFFFFF;#FFFFFF;#FFFFFF" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="45%" stopColor="#FFC800" stopOpacity={0.85}>
                <animate attributeName="stop-color" values="#FFFFFF;#FFC800;#FFFFFF;#FFFFFF" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stop-opacity" values="1;0.15;1;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="60%" stopColor="#FFA000" stopOpacity={0.75}>
                <animate attributeName="stop-color" values="#FFFFFF;#FFA000;#FFFFFF;#FFFFFF" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stop-opacity" values="1;0.15;1;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1}>
                <animate attributeName="stop-color" values="#FFFFFF;#FFFFFF;#FFFFFF;#FFFFFF" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
            <filter id="goldGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
          <XAxis 
            dataKey="committee" 
            stroke="rgba(255, 255, 255, 0.7)"
            style={{ fontSize: '14px' }}
          />
          <YAxis 
            stroke="rgba(255, 255, 255, 0.7)"
            style={{ fontSize: '14px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(14, 92, 154, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              color: '#fff'
            }}
            labelStyle={{ color: '#fff', fontWeight: 'bold' }}
          />
          <Bar 
            dataKey="total" 
            fill="url(#goldShine)"
            stroke="#FFC800"
            strokeWidth={2}
            radius={[8, 8, 0, 0]}
            barSize={60}
            className="chart-bar-gold"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
