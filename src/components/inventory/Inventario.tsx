import { Package, Search, TrendingUp, TrendingDown, Bell, Home } from 'lucide-react';

interface InventarioProps {
  onNavigate: (screen: string) => void;
}

export function Inventario({ onNavigate }: InventarioProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Package className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Inventario</h2>
        </div>
        <p className="text-neutral-600">Gestiona productos, entradas y salidas del inventario</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
            <Search className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Buscar productos</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
            <Package className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Ver movimientos</span>
          </button>

          <button 
            onClick={() => onNavigate('registro-entradas')}
            className="flex items-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Registrar entrada</span>
          </button>

          <button 
            onClick={() => onNavigate('registro-salidas')}
            className="flex items-center gap-3 px-6 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <TrendingDown className="w-5 h-5" />
            <span>Registrar salida</span>
          </button>

          <button 
            onClick={() => onNavigate('alertas')}
            className="flex items-center gap-3 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors md:col-span-2"
          >
            <Bell className="w-5 h-5" />
            <span>Ver alertas de inventario</span>
          </button>
        </div>

        <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <p className="text-neutral-700">Resumen de inventario</p>
          <div className="mt-3 grid grid-cols-3 gap-4">
            <div>
              <p className="text-neutral-600">Total productos</p>
              <p className="text-neutral-900">248</p>
            </div>
            <div>
              <p className="text-neutral-600">Stock bajo</p>
              <p className="text-red-600">12</p>
            </div>
            <div>
              <p className="text-neutral-600">Sin stock</p>
              <p className="text-red-600">3</p>
            </div>
          </div>
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
