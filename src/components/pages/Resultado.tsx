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
    // Reducimos py-6 a py-2 y h-full para que use el espacio disponible
    <div className="h-full bg-slate-50 flex flex-col items-center justify-center py-2 px-4 font-sans">
      
      {/* Botón Volver - Más compacto */}
      <div className="w-full max-w-md mb-3">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-500 hover:text-[#006400] transition-all shadow-sm tracking-widest uppercase"
        >
          <ArrowLeft className="w-3 h-3" />
          Volver al panel
        </button>
      </div>

      {/* Tarjeta de Resultado - p-10 bajó a p-6 */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-[2.5rem] p-6 shadow-xl relative overflow-hidden">
        {/* Luz de fondo verde */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#006400]/5 blur-[40px] pointer-events-none"></div>
        
        {/* Encabezado más apretado */}
        <h3 className="text-[9px] font-black uppercase text-[#006400] tracking-[0.2em] mb-4 flex items-center gap-2">
          <Zap className="w-3 h-3 fill-current" />
          Resultado del Análisis
          <div className="h-[1px] flex-1 bg-green-100"></div>
        </h3>
        
        {/* space-y-10 bajó a space-y-5 */}
        <div className="space-y-5">
          
          {/* Foto de la captura - Altura máxima controlada */}
          <div className="h-40 rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden shadow-inner flex items-center justify-center">
            <img src={state.image} alt="Captura Analizada" className="w-full h-full object-contain" />
          </div>

          {/* Categoría - Texto grande pero sin márgenes excesivos */}
          <div className="text-center">
            <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest block mb-1">Objeto Identificado</label>
            <p className="text-3xl font-black text-slate-800 uppercase tracking-tighter leading-none">{state.category}</p>
          </div>
          
          {/* Confianza - Barra un poco más delgada */}
          <div className="px-2">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[9px] font-bold uppercase text-slate-400 tracking-widest">Confianza</label>
              <span className="text-xs font-black text-[#006400]">{state.confidence}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#006400] shadow-[0_0_10px_rgba(0,100,0,0.2)] transition-all duration-1000" 
                style={{ width: `${state.confidence}%` }}
              ></div>
            </div>
          </div>

          {/* Tiempo de Respuesta - Compactado al final */}
          <div className="pt-4 flex justify-between items-center border-t border-slate-50">
            <div className="flex items-center gap-2 text-[9px] font-bold uppercase text-slate-400 tracking-widest">
              <Clock className="w-3 h-3" />
              Respuesta
            </div>
            <span className="text-xs font-black text-slate-700">{state.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}