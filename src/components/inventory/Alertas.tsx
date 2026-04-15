import { Bell, AlertTriangle, Eye, Package, Home } from 'lucide-react';

interface AlertasProps {
  onNavigate: (screen: string) => void;
}

export function Alertas({ onNavigate }: AlertasProps) {
  const alertas = [
    { id: 1, producto: 'Producto A', stock: 5, minimo: 10, tipo: 'bajo' },
    { id: 2, producto: 'Producto B', stock: 2, minimo: 15, tipo: 'crítico' },
    { id: 3, producto: 'Producto C', stock: 0, minimo: 20, tipo: 'agotado' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Bell className="w-8 h-8 text-red-600" />
          <h2 className="text-neutral-900">Alertas de Inventario</h2>
        </div>
        <p className="text-neutral-600">Productos con stock bajo o agotado</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-3 mb-6">
          {alertas.map((alerta) => (
            <div 
              key={alerta.id}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                alerta.tipo === 'agotado' 
                  ? 'bg-red-50 border-red-200' 
                  : alerta.tipo === 'crítico'
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className={`w-5 h-5 ${
                  alerta.tipo === 'agotado' 
                    ? 'text-red-600' 
                    : alerta.tipo === 'crítico'
                    ? 'text-orange-600'
                    : 'text-yellow-600'
                }`} />
                <div>
                  <p className="text-neutral-900">{alerta.producto}</p>
                  <p className="text-neutral-600">
                    Stock: {alerta.stock} / Mínimo: {alerta.minimo}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-900">
            <strong>Recomendación:</strong> Considera realizar pedidos para los productos con stock bajo.
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button 
          onClick={() => onNavigate('inventario')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <Package className="w-5 h-5 text-neutral-900" />
          <span className="text-neutral-900">Volver a Inventario</span>
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
