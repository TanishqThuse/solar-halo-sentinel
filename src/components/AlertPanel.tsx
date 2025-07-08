
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface AlertPanelProps {
  cmeDetected: boolean;
}

const AlertPanel = ({ cmeDetected }: AlertPanelProps) => {
  if (cmeDetected) {
    return (
      <Alert className="mb-6 bg-red-500/10 border-red-500/50 backdrop-blur-sm">
        <AlertTriangle className="h-4 w-4 text-red-400" />
        <AlertDescription className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-red-200">
              <strong>CME EVENT DETECTED!</strong> Halo CME signature identified in SWIS data.
            </span>
            <Badge className="bg-red-500/20 text-red-300 animate-pulse">
              HIGH PRIORITY
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-red-300">
            <Clock className="h-4 w-4" />
            <span>ETA: 6-8 hours</span>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Alert className="mb-6 bg-green-500/10 border-green-500/50 backdrop-blur-sm">
      <CheckCircle className="h-4 w-4 text-green-400" />
      <AlertDescription className="flex items-center justify-between">
        <span className="text-green-200">
          <strong>NOMINAL CONDITIONS</strong> No significant CME events detected in current timeframe.
        </span>
        <Badge className="bg-green-500/20 text-green-300">
          ALL CLEAR
        </Badge>
      </AlertDescription>
    </Alert>
  );
};

export default AlertPanel;
