
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const SolarWindChart = () => {
  // Mock data representing solar wind parameters over time
  const data = [
    { time: '00:00', speed: 380, density: 7.2, temperature: 80000, alpha_ratio: 0.028 },
    { time: '02:00', speed: 395, density: 8.1, temperature: 85000, alpha_ratio: 0.031 },
    { time: '04:00', speed: 420, density: 9.3, temperature: 92000, alpha_ratio: 0.035 },
    { time: '06:00', speed: 450, density: 11.2, temperature: 105000, alpha_ratio: 0.042 },
    { time: '08:00', speed: 480, density: 13.8, temperature: 120000, alpha_ratio: 0.055 }, // CME signature
    { time: '10:00', speed: 520, density: 16.5, temperature: 140000, alpha_ratio: 0.068 }, // Peak CME
    { time: '12:00', speed: 490, density: 14.2, temperature: 125000, alpha_ratio: 0.048 },
    { time: '14:00', speed: 440, density: 10.8, temperature: 98000, alpha_ratio: 0.038 },
    { time: '16:00', speed: 410, density: 8.9, temperature: 88000, alpha_ratio: 0.032 },
    { time: '18:00', speed: 395, density: 7.8, temperature: 82000, alpha_ratio: 0.029 },
    { time: '20:00', speed: 385, density: 7.1, temperature: 79000, alpha_ratio: 0.027 },
    { time: '22:00', speed: 378, density: 6.8, temperature: 76000, alpha_ratio: 0.026 },
  ];

  return (
    <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-300">
          <Activity className="h-5 w-5" />
          Solar Wind Parameters (24h)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="time" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#ffffff'
              }}
              formatter={(value: any, name: string) => {
                const formatters: { [key: string]: (val: number) => string } = {
                  speed: (val) => `${val} km/s`,
                  density: (val) => `${val} /cm³`,
                  temperature: (val) => `${(val / 1000).toFixed(1)}K × 10³`,
                  alpha_ratio: (val) => `${val.toFixed(3)}`
                };
                return [formatters[name]?.(value) || value, name.replace('_', '/').toUpperCase()];
              }}
            />
            <Line 
              type="monotone" 
              dataKey="speed" 
              stroke="#06B6D4" 
              strokeWidth={2}
              dot={{ fill: '#06B6D4', strokeWidth: 2, r: 3 }}
              name="speed"
            />
            <Line 
              type="monotone" 
              dataKey="density" 
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
              name="density"
            />
            <Line 
              type="monotone" 
              dataKey="alpha_ratio" 
              stroke="#F59E0B" 
              strokeWidth={2}
              dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
              name="alpha_ratio"
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded"></div>
            <span className="text-cyan-300">Solar Wind Speed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded"></div>
            <span className="text-green-300">Particle Density</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded"></div>
            <span className="text-yellow-300">Alpha/Proton Ratio</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarWindChart;
