'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamically import the game component to avoid SSR issues with Phaser
const GameComponent = dynamic(() => import('./GameComponent'), {
  ssr: false,
  loading: () => <div className="text-center p-8">Loading game...</div>
})

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🗂️ Waste Sorting Game
          </h1>
          <p className="text-gray-600">
            Sort the falling trash into the correct bins!
          </p>
        </div>
        
        <GameComponent />
        
        <div className="text-center mt-6">
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}