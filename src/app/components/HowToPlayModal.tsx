interface HowToPlayModalProps {
  onClose: () => void
}

export default function HowToPlayModal({ onClose }: HowToPlayModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/20">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              <h2 className="text-2xl font-bold">How to Play</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <span className="text-lg">🎯</span>
              Objective
            </h3>
            <p className="text-blue-700">Sort falling trash items into the correct bins to earn points and help save the environment!</p>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <span className="text-lg">🎮</span>
              Controls
            </h3>
            <div className="space-y-2 text-green-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Use arrow keys or WASD to move the bin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Click the bin type buttons to switch categories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Catch trash items with the matching bin type</span>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <span className="text-lg">🗂️</span>
              Bin Types
            </h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                <span className="font-medium text-gray-700">General:</span>
                <span className="text-gray-600">Mixed waste</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="font-medium text-blue-700">Plastic:</span>
                <span className="text-gray-600">Bottles, containers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-medium text-green-700">Glass:</span>
                <span className="text-gray-600">Jars, bottles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="font-medium text-yellow-700">Organic:</span>
                <span className="text-gray-600">Food waste</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="font-medium text-red-700">Paper:</span>
                <span className="text-gray-600">Newspapers, cardboard</span>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
              <span className="text-lg">📊</span>
              Scoring
            </h3>
            <div className="text-orange-700 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">+10</span>
                <span>points for correct matches</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold">-5</span>
                <span>points for wrong matches</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Got it! Let's Play 🚀
          </button>
        </div>
      </div>
    </div>
  )
}