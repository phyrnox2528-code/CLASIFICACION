import { Clock, Eye, Download, ShoppingCart, Home } from 'lucide-react';

interface HistorialVentasProps {
  onNavigate: (screen: string) => void;
}

export function HistorialVentas({ onNavigate }: HistorialVentasProps) {
  const ventasEjemplo = [
    { id: 'V001', fecha: '2025-12-04 10:30', total: '$250.00', productos: 3 },
    { id: 'V002', fecha: '2025-12-04 11:15', total: '$180.50', productos: 2 },
    { id: 'V003', fecha: '2025-12-04 12:00', total: '$420.00', productos: 5 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Historial de Ventas</h2>
        </div>
        <p className="text-neutral-600">Consulta el registro de todas las ventas realizadas</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-3 mb-6">
          {ventasEjemplo.map((venta) => (
            <div 
              key={venta.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200"
            >
              <div>
                <p className="text-neutral-900">{venta.id}</p>
                <p className="text-neutral-600">{venta.fecha}</p>
              </div>
              <div className="text-right">
                <p className="text-neutral-900">{venta.total}</p>
                <p className="text-neutral-600">{venta.productos} productos</p>
              </div>
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Eye className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Ver detalle</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Download className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Exportar</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button 
          onClick={() => onNavigate('ventas')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <ShoppingCart className="w-5 h-5 text-neutral-900" />
          <span className="text-neutral-900">Volver a Ventas</span>
        </button>

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
