import { useState } from 'react';
import { ShoppingCart, Search, Plus, Trash2, Check, Receipt, Home, Clock } from 'lucide-react';

interface VentasProps {
  onNavigate: (screen: string) => void;
}

export function Ventas({ onNavigate }: VentasProps) {
  const [ventaConfirmada, setVentaConfirmada] = useState(false);

  const handleConfirmarVenta = () => {
    setVentaConfirmada(true);
  };

  const handleGenerarTicket = () => {
    onNavigate('ticket');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ShoppingCart className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Ventas</h2>
        </div>
        <p className="text-neutral-600">Registra y gestiona las ventas del sistema</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <button className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
            <Search className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Buscar producto</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
            <Plus className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Agregar producto</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
            <Trash2 className="w-5 h-5 text-red-600" />
            <span className="text-neutral-900">Eliminar producto</span>
          </button>

          <button 
            onClick={handleConfirmarVenta}
            className="flex items-center gap-3 px-6 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Check className="w-5 h-5" />
            <span>Confirmar venta</span>
          </button>
        </div>

        {ventaConfirmada && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">✓ Venta confirmada exitosamente</p>
          </div>
        )}

        <div className="flex gap-3">
          <button 
            onClick={handleGenerarTicket}
            disabled={!ventaConfirmada}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors ${
              ventaConfirmada 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <Receipt className="w-5 h-5" />
            <span>Generar ticket</span>
          </button>

          <button 
            onClick={() => onNavigate('historial-ventas')}
            className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <Clock className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Historial de ventas</span>
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
