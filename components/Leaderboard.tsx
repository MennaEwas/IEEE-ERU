'use client'

import { useEffect, useState, useMemo } from 'react'
import leaderboardData from '@/content/leaderboard.json'
import CommitteeScoreChart from './CommitteeScoreChart'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

interface LeaderboardEntry {
  name: string
  committee: string
  score: number
}

export default function Leaderboard() {
  const [data, setData] = useState<LeaderboardEntry[]>([])

  useEffect(() => {
    setData(leaderboardData as LeaderboardEntry[])
  }, [])

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => b.score - a.score)
  }, [data])

  if (data.length === 0) return null

  const floatingIcons = [
    { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
    { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
    { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
    { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
    { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
    { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
  ]

  return (
    <section className="relative section-padding text-white">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-wider uppercase">
            Leaderboard Dashboard
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 md:w-24 bg-white/50"></div>
            <div className="w-3 h-3 bg-white/70 rotate-45 shadow-lg"></div>
            <div className="h-px w-20 md:w-24 bg-white/50"></div>
          </div>
        </div>

        {/* Committee Score Chart */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="bg-ieee-blue-dark/90 border-2 border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl">
            <CommitteeScoreChart data={data} />
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="bg-ieee-blue-dark/90 border-2 border-white/30 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-[600px] sm:min-w-0">
                <thead>
                  <tr className="bg-white/10 border-b border-white/20">
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      LB
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Committee
                    </th>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sortedData.slice(0, 5).map((entry, index) => (
                    <tr
                      key={`${entry.name}-${index}`}
                      className="leaderboard-table-row transition-all duration-300"
                    >
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-white">
                        {index + 1}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-200">
                        {entry.name}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-200">
                        {entry.committee}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-right text-ieee-blue-light">
                        {entry.score.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
