import { useState } from 'react';
import { Play, Square, TrendingUp, Database, Target, Activity, Brain } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrainingData {
  epoch: number;
  accuracy: number;
  loss: number;
}

export function Training() {
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const maxEpochs = 10;

  const [trainingData] = useState<TrainingData[]>([
    { epoch: 1, accuracy: 45.2, loss: 1.89 },
    { epoch: 2, accuracy: 58.7, loss: 1.45 },
    { epoch: 3, accuracy: 67.3, loss: 1.12 },
    { epoch: 4, accuracy: 74.8, loss: 0.89 },
    { epoch: 5, accuracy: 80.2, loss: 0.71 },
    { epoch: 6, accuracy: 84.5, loss: 0.58 },
    { epoch: 7, accuracy: 87.9, loss: 0.47 },
    { epoch: 8, accuracy: 90.3, loss: 0.39 },
    { epoch: 9, accuracy: 91.8, loss: 0.34 },
    { epoch: 10, accuracy: 92.4, loss: 0.31 },
  ]);

  const handleStartTraining = () => {
    setIsTraining(true);
    setProgress(0);
    setCurrentEpoch(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        setCurrentEpoch(Math.floor(newProgress / 10));
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          return 100;
        }
        return newProgress;
      });
    }, 800);
  };

  const stats = [
    { label: 'Precisión', value: '92.4%', icon: Target, bg: 'bg-green-50' },
    { label: 'Pérdida', value: '0.31', icon: TrendingUp, bg: 'bg-green-50' },
    { label: 'Precisión Val.', value: '90.1%', icon: Activity, bg: 'bg-green-50' },
    { label: 'Imágenes', value: '4,080', icon: Database, bg: 'bg-green-50' },
  ];

  return (
    // Reducimos el espacio vertical total con space-y-3
    <div className="max-w-7xl mx-auto w-full space-y-3 pt-0 px-2">
      
      {/* Control de Entrenamiento - Diseño más horizontal para ahorrar altura */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-black text-slate-800 uppercase tracking-tighter leading-none">Entrenamiento del Modelo</h2>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">
          </p>
        </div>
        
        <button
          onClick={isTraining ? () => setIsTraining(false) : handleStartTraining}
          className={`flex items-center justify-center gap-3 px-6 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all border-b-4
            ${isTraining 
              ? 'bg-red-500 border-red-800 text-white' 
              : 'bg-[#006400] border-[#004d00] text-white hover:bg-[#007500]'}`}
        >
          {isTraining ? <><Square className="w-3 h-3 fill-current" /> Detener</> : <><Play className="w-3 h-3 fill-current" /> Iniciar Entrenamiento</>}
        </button>
      </div>

      {/* Grid de Métricas - Iconos medianos y texto claro */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                <stat.icon className="w-5 h-5 text-[#006400]" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase">{stat.label}</p>
                <p className="text-lg font-black text-slate-800 leading-none">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contenedor Principal - Ajustado para altura de pantalla */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        
        {/* Gráfica - Altura optimizada h-60 (240px) */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          <h3 className="text-[10px] font-black uppercase text-slate-800 tracking-widest mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#006400]" />
            Curva de Rendimiento
          </h3>
          <div className="h-60 w-full"> 
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="epoch" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip contentStyle={{ borderRadius: '12px', fontSize: '11px' }} />
                <Line type="monotone" dataKey="accuracy" stroke="#006400" strokeWidth={4} dot={false} />
                <Line type="monotone" dataKey="loss" stroke="#cbd5e1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribución - Compacta pero con barras claras */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
          <h3 className="text-[10px] font-black uppercase text-slate-800 tracking-widest mb-4 flex items-center gap-2">
            <Database className="w-4 h-4 text-[#006400]" />
            Dataset
          </h3>
          <div className="space-y-3.5">
            {[
              { label: 'Plástico', val: 1250, color: 'bg-[#006400]' },
              { label: 'Vidrio', val: 980, color: 'bg-emerald-600' },
              { label: 'Papel', val: 1100, color: 'bg-green-700' },
              { label: 'Metal', val: 750, color: 'bg-slate-400' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[9px] font-bold uppercase mb-1">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="text-slate-800">{item.val}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.val / 1250) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-2">
             <Brain className="w-5 h-5 text-[#006400] shrink-0" />
             <p className="text-[9px] font-bold text-[#006400] leading-tight uppercase">
               Arquitectura Optimizada
             </p>
          </div>
        </div>
      </div>

      {/* Barra de progreso minimalista pegada al borde inferior si está activo */}
      {isTraining && (
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#006400] transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
}