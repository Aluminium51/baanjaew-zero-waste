import Link from 'next/link'

const wasteTypes = [
  {
    category: 'Food Waste',
    color: 'bg-[#51c465]',
    bgColor: '',
    borderColor: '',
    description: 'Food scraps.',
    examples: ['Leftover rice', 'Vegetable scraps', 'Leftover sauce',   'Leftover curry'],
    icon: '🍗'
  },
  {
    category: 'General Waste',
    color: 'bg-[#2fb8fb]',
    bgColor: '',
    borderColor: '',
    description: 'Dirty containers, even after emptying food waste, can still spread moisture to other items.',
    examples: ['Zero-Waste cup', 'Lunch box', 'Tissue paper', 'Dipping sauce cup'],
    icon: '🚮'
  },
  {
    category: 'Waste to Energy',
    color: 'bg-[#fdcd19]',
    bgColor: '',
    borderColor: '',
    description: 'Dry materials or containers with a small amount of food residue.',
    examples: ['Spoon / Fork', 'Straw', 'Juice box', 'Receipt', 'Snack box / bag'],
    icon: '⚡'
  },
  {
    category: 'Recyclable Materials',
    color: 'bg-[#fea419]',
    bgColor: '',
    borderColor: '',
    description: 'Can be sold and reproduced',
    examples: ['Aluminium can', 'Plastic bottle'],
    icon: '♻️'
  },
]

export default function LearnPage() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-border-[#f5f5f5] via-blue-400 to-indigo-500 relative overflow-hidden">
    <div className="min-h-screen bg-[#f8f8ff] relative overflow-hidden">
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learn about 
            <span className="block text-blue-800">Waste Types</span>
          </h1>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto">
            Understanding different waste categories helps protect our environment and create a sustainable future
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4">
          {wasteTypes.map((waste, index) => (
            <div key={index} className={`bg-white/80 rounded-3xl shadow-xl overflow-hidden border-none border ${waste.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${waste.color} text-white p-6 text-center relative`}>
                <div className="absolute inset-0 bg-white/10"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-3">{waste.icon}</div>
                  <h2 className="text-xl font-bold">{waste.category}</h2>
                </div>
              </div>
              
              {/* Card Content */}
              <div className={`p-6 ${waste.bgColor}`}>
                <p className="text-gray-700 mb-4 font-medium">{waste.description}</p>

                <div className="grid grid-cols-1 gap-2">
                  {waste.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 px-2">
                      <span className="text-sm">-{'>'} {example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="text-center space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <Link href="/">
            <button className="group relative bg-white/80 border-none shadow-xl text-blue-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl border border-blue-200 hover:scale-105 flex items-center justify-center gap-3 w-full md:w-auto">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">←</span>
              <span>Back to Home</span>
            </button>
          </Link>
          
          <Link href="/game">
            <button className="group relative bg-gradient-to-r border-none shadow-xl from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 w-full md:w-auto">
              <span>Start Playing</span>
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🎮</span>
            </button>
          </Link>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/60 rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-blue-600">
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-green-600">
              <div className="text-2xl font-bold">♻️</div>
              <div className="text-sm text-gray-600">Recyclable</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-purple-600">
              <div className="text-2xl font-bold">🌱</div>
              <div className="text-sm text-gray-600">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}