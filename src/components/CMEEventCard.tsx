
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const CMEEventCard = () => {
  return (
    <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-300">
          <AlertTriangle className="h-5 w-5" />
          Last Detected Halo CME Event
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-200">Detection Time:</span>
              <span className="font-mono text-white">2024-12-07 14:32:15 UTC</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-400" />
              <span className="text-sm text-blue-200">Earth Impact ETA:</span>
              <span className="font-mono text-green-300">2024-12-08 20:15:00 UTC</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-blue-200">Angular Width:</span>
              <Badge className="bg-purple-500/20 text-purple-300">285°</Badge>
              <Badge className="bg-red-500/20 text-red-300">HALO CME</Badge>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-blue-200">Predicted Velocity:</span>
              <span className="font-mono text-orange-300">650 km/s</span>
            </div>
          </div>

          {/* Derived Parameters */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-yellow-300 border-b border-yellow-500/30 pb-2">
              Key Detection Parameters
            </h4>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-blue-200">Speed Gradient:</span>
                <div className="font-mono text-cyan-300">+285 km/s/hr</div>
              </div>
              
              <div>
                <span className="text-blue-200">Density Ratio:</span>
                <div className="font-mono text-green-300">0.078</div>
              </div>
              
              <div>
                <span className="text-blue-200">Flux Spike:</span>
                <div className="font-mono text-red-300">5.8σ</div>
              </div>
              
              <div>
                <span className="text-blue-200">Velocity Anisotropy:</span>
                <div className="font-mono text-purple-300">0.85</div>
              </div>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold text-yellow-300">Parker Spiral Analysis</span>
              </div>
              <p className="text-xs text-yellow-200">
                Trajectory analysis indicates 78% probability of Earth-directed impact.
                Estimated intensity: <span className="font-semibold text-orange-300">Moderate to Strong</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-200">LSTM Model Confidence:</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
              </div>
              <span className="font-mono text-green-300">92.3%</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-blue-200">Detection Accuracy (RMSE):</span>
            <span className="font-mono text-cyan-300">0.045</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CMEEventCard;
