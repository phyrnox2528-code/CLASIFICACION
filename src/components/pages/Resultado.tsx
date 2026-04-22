import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft, Clock, Zap } from 'lucide-react';

export function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { image: string, category: string, confidence: number, time: string };

  if (!state || !state.image) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-full bg-slate-50 flex flex-col items-center justify-center py-6 px-4 font-sans">
      {/* Botón Volver - Cambio a hover verde */}
      <div className="w-full max-w-md mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-500 hover:text-[#006400] transition-all shadow-sm tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al panel
        </button>
      </div>

      {/* Tarjeta de Resultado */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 shadow-xl relative overflow-hidden">
        {/* Efecto de luz de fondo en verde */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#006400]/5 blur-[60px] pointer-events-none"></div>
        
        {/* Encabezado en #006400 */}
        <h3 className="text-[10px] font-black uppercase text-[#006400] tracking-[0.3em] mb-10 flex items-center gap-3">
          <Zap className="w-4 h-4 fill-current" />
          Resultado del Análisis
          <div className="h-[1px] flex-1 bg-green-100"></div>
        </h3>
        
        <div className="space-y-10">
          {/* Foto de la captura */}
          <div className="aspect-video rounded-[2rem] bg-slate-50 border border-slate-100 overflow-hidden shadow-inner flex items-center justify-center">
            <img src={state.image} alt="Captura Analizada" className="w-full h-full object-contain" />
          </div>

          {/* Información del Objeto */}
          <div className="text-center space-y-2">
            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Objeto Identificado</label>
            <p className="text-4xl font-black text-slate-800 uppercase tracking-tighter">{state.category}</p>
          </div>
          
          {/* Barra de Confianza en #006400 */}
          <div className="px-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Confianza</label>
              <span className="text-sm font-black text-[#006400]">{state.confidence}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#006400] shadow-[0_0_15px_rgba(0,100,0,0.3)] transition-all duration-1000" 
                style={{ width: `${state.confidence}%` }}
              ></div>
            </div>
          </div>

          {/* Tiempo de Respuesta */}
          <div className="pt-8 flex justify-between items-center border-t border-slate-50">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400 tracking-widest">
              <Clock className="w-4 h-4" />
              Tiempo de respuesta
            </div>
            <span className="text-sm font-black text-slate-700">{state.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}