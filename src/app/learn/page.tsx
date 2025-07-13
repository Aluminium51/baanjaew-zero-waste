import Link from 'next/link'

const wasteTypes = [
  {
    category: 'General Waste',
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    description: 'Mixed waste that cannot be recycled',
    examples: ['Dirty diapers', 'Used tissues', 'Broken ceramics', 'Cigarette butts'],
    icon: '🗑️'
  },
  {
    category: 'Plastic',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Recyclable plastic materials',
    examples: ['Plastic bottles', 'Food containers', 'Plastic bags', 'Yogurt cups'],
    icon: '♻️'
  },
  {
    category: 'Glass',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Glass containers and bottles',
    examples: ['Wine bottles', 'Jam jars', 'Glass containers', 'Beer bottles'],
    icon: '🍾'
  },
  {
    category: 'Organic',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    description: 'Biodegradable organic waste',
    examples: ['Food scraps', 'Fruit peels', 'Vegetable waste', 'Coffee grounds'],
    icon: '🍎'
  },
  {
    category: 'Paper',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'Paper and cardboard materials',
    examples: ['Newspapers', 'Cardboard boxes', 'Office paper', 'Magazines'],
    icon: '📰'
  }
]

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🌍</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Learn about 
            <span className="block text-blue-600">Waste Types</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Understanding different waste categories helps protect our environment and create a sustainable future
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {wasteTypes.map((waste, index) => (
            <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border ${waste.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
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
                
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Examples:
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {waste.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      <span className="text-sm">{example}</span>
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
            <button className="group relative bg-white/80 backdrop-blur-sm text-blue-700 font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl border border-blue-200 hover:scale-105 flex items-center justify-center gap-3 w-full md:w-auto">
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">←</span>
              <span>Back to Home</span>
            </button>
          </Link>
          
          <Link href="/game">
            <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 w-full md:w-auto">
              <span>Start Playing</span>
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">🎮</span>
            </button>
          </Link>
        </div>
        
        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="text-blue-600">
              <div className="text-2xl font-bold">5</div>
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