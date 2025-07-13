'use client'

import { useState } from 'react'
import Link from 'next/link'
import HowToPlayModal from './components/HowToPlayModal'

export default function Home() {
  const [showHowToPlay, setShowHowToPlay] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          {/* Title section */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="text-4xl">♻️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Waste Sorting
              <span className="block text-4xl md:text-5xl text-blue-200 font-light">Game</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg mx-auto leading-relaxed">
              Learn sustainable waste management through an engaging and educational gaming experience
            </p>
          </div>
          
          {/* Buttons */}
          <div className="space-y-4 flex flex-col">
            <Link href="/game">
              <button className="group relative w-full max-w-sm mx-auto bg-white text-blue-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🎮</span>
                <span>Start Playing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            <button
              onClick={() => setShowHowToPlay(true)}
              className="group relative w-full max-w-sm mx-auto bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-white/20 flex items-center justify-center"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📖</span>
              <span>How to Play</span>
            </button>
            
            <Link href="/learn">
              <button className="group relative w-full max-w-sm mx-auto bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border border-white/20 flex items-center justify-center">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">📚</span>
                <span>Learn Waste Types</span>
              </button>
            </Link>
          </div>
          
          {/* Stats or features */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-sm">Waste Categories</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white">∞</div>
              <div className="text-sm">Learning Fun</div>
            </div>
            <div className="text-white/80">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-32 right-16 w-4 h-4 bg-blue-300/30 rounded-full animate-bounce delay-700"></div>
      <div className="absolute bottom-24 left-16 w-5 h-5 bg-indigo-300/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-500"></div>
      
      {/* Modal */}
      {showHowToPlay && (
        <HowToPlayModal onClose={() => setShowHowToPlay(false)} />
      )}
    </div>
  )
}