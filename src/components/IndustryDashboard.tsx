import { Building2, Zap, Wifi, TrendingDown, AlertCircle, DollarSign, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ImpactMetric {
  label: string;
  value: string;
  change: string;
  isNegative: boolean;
  description: string;
}

const IndustryDashboard = () => {
  const powerGridMetrics: ImpactMetric[] = [
    {
      label: 'GIC Peak Current',
      value: '287 A',
      change: '+340%',
      isNegative: true,
      description: 'Geomagnetically Induced Currents in transformers'
    },
    {
      label: 'Transformer Saturation',
      value: '12 Units',
      change: 'At Risk',
      isNegative: true,
      description: 'High-voltage transformers experiencing half-cycle saturation'
    },
    {
      label: 'Grid Voltage Fluctuation',
      value: '±18%',
      change: 'Critical',
      isNegative: true,
      description: 'Voltage instability across regional grid'
    },
    {
      label: 'Estimated Financial Loss',
      value: '$2.8M',
      change: 'Per Hour',
      isNegative: true,
      description: 'Revenue loss from disruptions and equipment damage'
    }
  ];

  const solarCompanyMetrics: ImpactMetric[] = [
    {
      label: 'Panel Efficiency Drop',
      value: '-8.3%',
      change: 'During Storm',
      isNegative: true,
      description: 'Reduced photovoltaic conversion efficiency'
    },
    {
      label: 'Inverter Failures',
      value: '23 Units',
      change: '+156%',
      isNegative: true,
      description: 'Electromagnetic pulse damage to power electronics'
    },
    {
      label: 'MPPT Tracking Errors',
      value: '47%',
      change: 'Systems Affected',
      isNegative: true,
      description: 'Maximum Power Point Tracking algorithm disruptions'
    },
    {
      label: 'Production Loss',
      value: '$450K',
      change: 'Per Storm Event',
      isNegative: true,
      description: 'Combined efficiency drop and equipment repair costs'
    }
  ];

  const ispMetrics: ImpactMetric[] = [
    {
      label: 'GPS Signal Degradation',
      value: '67%',
      change: 'Accuracy Loss',
      isNegative: true,
      description: 'Ionospheric scintillation affecting positioning'
    },
    {
      label: 'Satellite Communication',
      value: '89 min',
      change: 'Total Outage',
      isNegative: true,
      description: 'Complete loss of satellite link during peak storm'
    },
    {
      label: 'Network Latency',
      value: '+340ms',
      change: '+890%',
      isNegative: true,
      description: 'Signal routing disruptions and packet loss'
    },
    {
      label: 'Customer Impact',
      value: '$1.2M',
      change: 'SLA Penalties',
      isNegative: true,
      description: 'Service Level Agreement violations and compensation'
    }
  ];

  const renderMetricsGrid = (metrics: ImpactMetric[]) => (
    <div className="grid md:grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-card/50 border-space-danger/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-muted-foreground text-sm mb-1">{metric.label}</p>
                <p className="text-3xl font-bold text-space-danger mb-1">{metric.value}</p>
                <Badge variant="destructive" className="text-xs">
                  {metric.change}
                </Badge>
              </div>
              <AlertCircle className="h-8 w-8 text-space-danger" />
            </div>
            <p className="text-xs text-muted-foreground">{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="bg-card/80 border-space-warning/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="h-7 w-7 text-space-warning" />
            <span className="bg-gradient-to-r from-space-warning to-space-danger bg-clip-text text-transparent">
              Industry Impact Dashboard
            </span>
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            Real-time CME impact analysis and financial risk assessment for critical infrastructure sectors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-destructive/10 border border-space-danger/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-space-danger flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-space-danger font-semibold mb-1">Active Warning: Major Halo-CME Event</p>
                <p className="text-sm text-muted-foreground">
                  6-8 hour advance warning system based on ADITYA-L1 SWIS in-situ measurements. 
                  Estimated Earth impact: <span className="font-bold text-space-warning">Today at 18:30 UTC</span>
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="power" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="power" className="data-[state=active]:bg-space-info data-[state=active]:text-space-info-foreground">
                <Building2 className="h-4 w-4 mr-2" />
                Power Grid
              </TabsTrigger>
              <TabsTrigger value="solar" className="data-[state=active]:bg-space-info data-[state=active]:text-space-info-foreground">
                <Zap className="h-4 w-4 mr-2" />
                Solar Energy
              </TabsTrigger>
              <TabsTrigger value="isp" className="data-[state=active]:bg-space-info data-[state=active]:text-space-info-foreground">
                <Wifi className="h-4 w-4 mr-2" />
                Telecom/ISP
              </TabsTrigger>
            </TabsList>

            <TabsContent value="power" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-space-warning">Power Grid & Electricity Infrastructure</h3>
                  <Badge variant="destructive" className="text-sm px-3 py-1">
                    Critical Risk
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Geomagnetically Induced Currents (GICs) flow through power transmission systems during CME events, 
                  causing transformer saturation, voltage instability, and potential grid collapse. Historical events 
                  like the 1989 Quebec blackout affected 6 million people and cost $2 billion.
                </p>
              </div>

              {renderMetricsGrid(powerGridMetrics)}

              <Card className="bg-card/50 border-space-warning/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-space-warning flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    CME Event Response Protocol
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Pre-Storm Actions (6-8 hrs advance warning):</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Redistribute load across regional interconnections</li>
                      <li>Activate GIC blocking devices on critical transformers</li>
                      <li>Place maintenance crews on standby at substations</li>
                      <li>Reduce transmission line loading to 70% capacity</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">During CME Event:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Monitor GIC levels in real-time at all major substations</li>
                      <li>Implement rolling blackouts if grid stability compromised</li>
                      <li>Isolate critical infrastructure on backup power systems</li>
                      <li>Coordinate with adjacent grid operators for support</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Post-Event Recovery:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Conduct thermal imaging scans of all transformers</li>
                      <li>Test protective relay systems for accuracy</li>
                      <li>Document all equipment anomalies for insurance claims</li>
                      <li>Gradually restore full grid capacity over 12-24 hours</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-space-warning text-space-warning-foreground hover:bg-space-warning/90">
                    Download Protection Protocol (PDF)
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solar" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-space-warning">Solar Power Generation Systems</h3>
                  <Badge variant="destructive" className="text-sm px-3 py-1">
                    High Risk
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Solar installations face electromagnetic pulse (EMP) effects from CMEs causing inverter damage, 
                  DC arc faults, and MPPT tracking errors. Modern power electronics are particularly vulnerable 
                  to rapid magnetic field variations. Studies show 5-15% efficiency drops during severe storms.
                </p>
              </div>

              {renderMetricsGrid(solarCompanyMetrics)}

              <Card className="bg-card/50 border-space-warning/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-space-warning flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    CME Protection & Response Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Pre-Event Preparation:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Install surge protection devices (SPD) on DC and AC sides</li>
                      <li>Implement grounding mesh with low impedance paths</li>
                      <li>Use inverters with enhanced EMI/EMC filtering</li>
                      <li>Deploy real-time monitoring for early fault detection</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">During Storm (If possible):</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Consider preventive disconnect for extreme G5-class events</li>
                      <li>Monitor DC voltage levels for abnormal spikes</li>
                      <li>Check inverter temperature and performance metrics</li>
                      <li>Document all efficiency variations for analysis</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Post-Storm Assessment:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Conduct thermal imaging of all inverters and combiners</li>
                      <li>Test MPPT performance under varying light conditions</li>
                      <li>Inspect all grounding connections for degradation</li>
                      <li>Review production data for lasting efficiency impacts</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-space-warning text-space-warning-foreground hover:bg-space-warning/90">
                    Request Equipment Audit
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="isp" className="mt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-space-warning">Telecommunications & Internet Services</h3>
                  <Badge variant="destructive" className="text-sm px-3 py-1">
                    Severe Risk
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  CME-induced ionospheric disturbances cause HF radio blackouts, GPS signal degradation (ionospheric 
                  scintillation), and satellite communication disruptions. The 2022 SpaceX incident lost 40 Starlink 
                  satellites ($50M) due to atmospheric expansion from a geomagnetic storm.
                </p>
              </div>

              {renderMetricsGrid(ispMetrics)}

              <Card className="bg-card/50 border-space-warning/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-space-warning flex items-center gap-2">
                    <Wifi className="h-5 w-5" />
                    Network Resilience Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Pre-Storm Network Hardening:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Implement terrestrial backup routes for satellite links</li>
                      <li>Use multi-constellation GNSS receivers (GPS+GLONASS+Galileo)</li>
                      <li>Activate low-latency caching systems pre-storm</li>
                      <li>Pre-position technical teams at critical facilities</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Active Storm Management:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Deploy predictive packet routing during ionospheric disturbances</li>
                      <li>Switch to lower-frequency bands for HF communications</li>
                      <li>Monitor satellite telemetry for drag coefficient increases</li>
                      <li>Implement aggressive error correction protocols</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-foreground font-semibold">Recovery & Analysis:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Test all backup systems under load conditions</li>
                      <li>Analyze packet loss patterns for infrastructure improvements</li>
                      <li>Update SLA calculations with space weather exceptions</li>
                      <li>Maintain redundant ground stations with geographic diversity</li>
                    </ul>
                  </div>
                  <Button className="w-full bg-space-warning text-space-warning-foreground hover:bg-space-warning/90">
                    Generate Contingency Plan
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6 bg-card/80 border-space-info/50">
            <CardHeader>
              <CardTitle className="text-space-info">Why Choose Our CME Early Warning System?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-space-warning">🎯 6-8 Hour Advance Warning</h4>
                  <p className="text-sm text-muted-foreground">
                    ADITYA-L1 L1 point measurements provide critical lead time - enough to implement 
                    protection protocols and prevent catastrophic failures
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-space-warning">🧠 LSTM-Based Prediction</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced time-series analysis with derived parameters (alpha/proton ratio, flux gradients) 
                    achieves 94% accuracy in halo-CME detection
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-space-warning">📊 Real-Time Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous SWIS particle flux analysis with automatic threshold detection for 
                    transient events differentiated from normal solar wind
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-space-warning">💰 ROI Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    Prevent millions in equipment damage and SLA penalties. Single prevented 
                    transformer failure saves $5-15M in replacement costs
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">
                  Join leading infrastructure operators protecting critical systems with predictive space weather intelligence
                </p>
                <div className="flex gap-3">
                  <Button className="flex-1 bg-space-info text-space-info-foreground hover:bg-space-info/90">
                    Schedule Enterprise Demo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Request Pricing
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndustryDashboard;
