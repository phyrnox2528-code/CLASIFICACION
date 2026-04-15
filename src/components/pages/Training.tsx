import { useState } from 'react';
import { Play, Square, TrendingUp, Database, Target, Activity, Brain } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

  const handleStopTraining = () => {
    setIsTraining(false);
    setProgress(0);
    setCurrentEpoch(0);
  };

  const stats = [
    { label: 'Precisión', value: '92.4%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Pérdida', value: '0.31', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Precisión Val.', value: '90.1%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Imágenes Totales', value: '4,080', icon: Database, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6 pt-2 px-2">
      
      {/* Control de Entrenamiento */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter">Entrenamiento del Modelo</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
            {isTraining ? `Época ${currentEpoch}/${maxEpochs} en curso...` : 'Listo para el proceso de aprendizaje'}
          </p>
        </div>
        
        <button
          onClick={isTraining ? handleStopTraining : handleStartTraining}
          className={`flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-b-4
            ${isTraining 
              ? 'bg-red-500 border-red-800 text-white shadow-red-100' 
              : 'bg-indigo-600 border-indigo-800 text-white hover:bg-indigo-700 shadow-indigo-100 shadow-lg'}`}
        >
          {isTraining ? (
            <><Square className="w-4 h-4 fill-current" /> Detener</>
          ) : (
            <><Play className="w-4 h-4 fill-current" /> Iniciar Entrenamiento</>
          )}
        </button>
      </div>

      {/* Progress Bar (Solo cuando entrena) */}
      {isTraining && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progreso Global</span>
            <span className="text-xs font-black text-indigo-600">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}

      {/* Grid de Métricas Principales */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className="text-lg font-black text-slate-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico y Distribución */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Gráfico Real con Recharts */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-xs font-black uppercase text-slate-800 tracking-widest mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600" />
            Curva de Rendimiento
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="epoch" hide />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="accuracy" stroke="#4f46e5" strokeWidth={4} dot={false} name="Precisión" />
                <Line type="monotone" dataKey="loss" stroke="#cbd5e1" strokeWidth={2} dot={false} name="Pérdida" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Distribución del Dataset */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col">
          <h3 className="text-xs font-black uppercase text-slate-800 tracking-widest mb-6 flex items-center gap-2">
            <Database className="w-4 h-4 text-indigo-600" />
            Distribución del Dataset
          </h3>
          <div className="space-y-4 flex-1">
            {[
              { label: 'Plástico', val: 1250, color: 'bg-indigo-500' },
              { label: 'Vidrio', val: 980, color: 'bg-emerald-500' },
              { label: 'Papel', val: 1100, color: 'bg-orange-500' },
              { label: 'Metal', val: 750, color: 'bg-slate-400' }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-bold uppercase mb-1">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="text-slate-800">{item.val}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-50 rounded-full">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.val / 1250) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-start gap-3">
             <Brain className="w-5 h-5 text-indigo-600 shrink-0" />
             <p className="text-[10px] font-bold text-indigo-800 leading-tight uppercase tracking-tight">
               Arquitectura Optimizada para Reconocimiento de Residuos
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}