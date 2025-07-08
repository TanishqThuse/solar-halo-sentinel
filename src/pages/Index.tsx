
import { useState } from 'react';
import { Calendar, Clock, AlertTriangle, TrendingUp, Activity, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import SolarWindChart from '@/components/SolarWindChart';
import CMEEventCard from '@/components/CMEEventCard';
import ParticleFluxChart from '@/components/ParticleFluxChart';
import AlertPanel from '@/components/AlertPanel';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [cmeDetected, setCmeDetected] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setCmeDetected(Math.random() > 0.7); // Random CME detection for demo
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white p-6">
      {/* Animated stars background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"7\" cy=\"7\" r=\"1\"/%3E%3Ccircle cx=\"27\" cy=\"27\" r=\"1\"/%3E%3Ccircle cx=\"47\" cy=\"47\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent mb-4">
            ☀️ ADITYA-L1 CME DETECTION SYSTEM
          </h1>
          <p className="text-xl text-blue-200 mb-2">Solar Wind Ion Spectrometer (SWIS) Data Analysis</p>
          <p className="text-sm text-purple-300">Real-time monitoring of Halo Coronal Mass Ejection events</p>
        </div>

        {/* Alert Panel */}
        <AlertPanel cmeDetected={cmeDetected} />

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* CME Event Checker */}
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-orange-300">
                <Calendar className="h-5 w-5" />
                CME Event Checker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="date" className="text-blue-200">Select Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-slate-800/50 border-purple-400/30 text-white"
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-blue-200">Select Time (UTC)</Label>
                <Input
                  id="time"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="bg-slate-800/50 border-purple-400/30 text-white"
                />
              </div>
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing SWIS Data...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Analyze CME Event
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Real-time Metrics */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Solar Wind Speed</p>
                    <p className="text-2xl font-bold text-cyan-300">432.5 km/s</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Particle Density</p>
                    <p className="text-2xl font-bold text-green-300">8.7 /cm³</p>
                  </div>
                  <Activity className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-yellow-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Temperature</p>
                    <p className="text-2xl font-bold text-yellow-300">1.2 × 10⁵ K</p>
                  </div>
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm">Alpha/Proton Ratio</p>
                    <p className="text-2xl font-bold text-red-300">0.034</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <SolarWindChart />
          <ParticleFluxChart />
        </div>

        {/* Last CME Event */}
        <CMEEventCard />
      </div>
    </div>
  );
};

export default Index;
