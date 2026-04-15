import { Calculator, FileText, Download, Home } from 'lucide-react';

interface CortesCajaProps {
  onNavigate: (screen: string) => void;
}

export function CortesCaja({ onNavigate }: CortesCajaProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Cortes de Caja</h2>
        </div>
        <p className="text-neutral-600">Genera y consulta los cortes de caja del sistema</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-4 mb-6">
          <div>
            <label className="block mb-2 text-neutral-700">Periodo del corte</label>
            <select 
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            >
              <option>Turno actual</option>
              <option>Día actual</option>
              <option>Semana actual</option>
              <option>Mes actual</option>
              <option>Personalizado</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-neutral-700">Fecha inicio</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block mb-2 text-neutral-700">Fecha fin</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 mb-6">
          <p className="text-neutral-700 mb-3">Resumen preliminar</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-neutral-600">Total ventas</p>
              <p className="text-neutral-900">$5,280.00</p>
            </div>
            <div>
              <p className="text-neutral-600">Efectivo</p>
              <p className="text-neutral-900">$3,150.00</p>
            </div>
            <div>
              <p className="text-neutral-600">Tarjeta</p>
              <p className="text-neutral-900">$2,130.00</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Generar corte</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Download className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Exportar corte (PDF)</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Download className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Exportar corte (Excel)</span>
          </button>
        </div>
      </div>

      <div className="mt-6">
        <button 
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <Home className="w-5 h-5 text-neutral-900" />
          <span className="text-neutral-900">Volver al Dashboard</span>
        </button>
      </div>
    </div>
  );
}
