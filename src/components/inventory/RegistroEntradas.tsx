import { TrendingUp, Save, X, Home } from 'lucide-react';

interface RegistroEntradasProps {
  onNavigate: (screen: string) => void;
}

export function RegistroEntradas({ onNavigate }: RegistroEntradasProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <TrendingUp className="w-8 h-8 text-green-600" />
          <h2 className="text-neutral-900">Registro de Entradas</h2>
        </div>
        <p className="text-neutral-600">Registra las entradas de productos al inventario</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-4 mb-6">
          <div>
            <label className="block mb-2 text-neutral-700">Producto</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              placeholder="Selecciona o busca un producto"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-neutral-700">Cantidad</label>
              <input 
                type="number" 
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block mb-2 text-neutral-700">Proveedor</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                placeholder="Selecciona un proveedor"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-neutral-700">Observaciones</label>
            <textarea 
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              rows={3}
              placeholder="Notas opcionales sobre esta entrada"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Save className="w-5 h-5" />
            <span>Guardar entrada</span>
          </button>

          <button 
            onClick={() => onNavigate('inventario')}
            className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Cancelar</span>
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
