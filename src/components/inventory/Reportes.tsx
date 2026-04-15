import { FileText, BarChart, Download, Home } from 'lucide-react';

interface ReportesProps {
  onNavigate: (screen: string) => void;
}

export function Reportes({ onNavigate }: ReportesProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Reportes</h2>
        </div>
        <p className="text-neutral-600">Genera reportes personalizados del sistema</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-4 mb-6">
          <div>
            <label className="block mb-2 text-neutral-700">Tipo de reporte</label>
            <select 
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            >
              <option>Reporte de ventas</option>
              <option>Reporte de inventario</option>
              <option>Reporte de proveedores</option>
              <option>Reporte de cortes de caja</option>
              <option>Productos más vendidos</option>
              <option>Análisis de rentabilidad</option>
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

          <div>
            <label className="block mb-2 text-neutral-700">Filtros adicionales (opcional)</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              placeholder="Ej: categoría, proveedor, usuario..."
            />
          </div>
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
          <p className="text-blue-900">
            <strong>Vista previa:</strong> El reporte mostrará datos del periodo seleccionado con gráficos y tablas detalladas.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <FileText className="w-5 h-5" />
            <span>Generar reporte</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Download className="w-5 h-5" />
            <span>Exportar PDF</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Download className="w-5 h-5" />
            <span>Exportar Excel</span>
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
