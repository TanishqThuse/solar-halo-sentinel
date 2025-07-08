
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

const ParticleFluxChart = () => {
  // Mock data representing particle flux measurements
  const data = [
    { time: '00:00', proton_flux: 3.2, alpha_flux: 0.12, velocity_anisotropy: 0.15 },
    { time: '02:00', proton_flux: 3.8, alpha_flux: 0.14, velocity_anisotropy: 0.18 },
    { time: '04:00', proton_flux: 4.5, alpha_flux: 0.18, velocity_anisotropy: 0.22 },
    { time: '06:00', proton_flux: 6.2, alpha_flux: 0.28, velocity_anisotropy: 0.35 },
    { time: '08:00', proton_flux: 12.8, alpha_flux: 0.85, velocity_anisotropy: 0.78 }, // CME spike
    { time: '10:00', proton_flux: 18.5, alpha_flux: 1.32, velocity_anisotropy: 0.95 }, // Peak flux
    { time: '12:00', proton_flux: 14.2, alpha_flux: 0.95, velocity_anisotropy: 0.68 },
    { time: '14:00', proton_flux: 8.9, alpha_flux: 0.45, velocity_anisotropy: 0.42 },
    { time: '16:00', proton_flux: 5.8, alpha_flux: 0.25, velocity_anisotropy: 0.28 },
    { time: '18:00', proton_flux: 4.2, alpha_flux: 0.16, velocity_anisotropy: 0.20 },
    { time: '20:00', proton_flux: 3.6, alpha_flux: 0.13, velocity_anisotropy: 0.17 },
    { time: '22:00', proton_flux: 3.1, alpha_flux: 0.11, velocity_anisotropy: 0.14 },
  ];

  return (
    <Card className="bg-black/40 border-orange-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-300">
          <Zap className="h-5 w-5" />
          Particle Flux & Derived Parameters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="protonGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="alphaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
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
                  proton_flux: (val) => `${val.toFixed(1)} × 10⁶ /cm²·s`,
                  alpha_flux: (val) => `${val.toFixed(2)} × 10⁵ /cm²·s`,
                  velocity_anisotropy: (val) => `${val.toFixed(2)}`
                };
                return [formatters[name]?.(value) || value, name.replace('_', ' ').toUpperCase()];
              }}
            />
            <Area
              type="monotone"
              dataKey="proton_flux"
              stroke="#EF4444"
              fill="url(#protonGradient)"
              strokeWidth={2}
              name="proton_flux"
            />
            <Area
              type="monotone"
              dataKey="alpha_flux"
              stroke="#F59E0B"
              fill="url(#alphaGradient)"
              strokeWidth={2}
              name="alpha_flux"
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded"></div>
            <span className="text-red-300">Proton Flux</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded"></div>
            <span className="text-orange-300">Alpha Particle Flux</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParticleFluxChart;
