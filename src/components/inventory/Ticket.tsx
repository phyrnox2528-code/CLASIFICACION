import { Receipt, Printer, Home } from 'lucide-react';
import { useEffect } from 'react';

interface TicketProps {
  onNavigate: (screen: string) => void;
}

export function Ticket({ onNavigate }: TicketProps) {
  useEffect(() => {
    // Redirigir automáticamente al historial después de 3 segundos
    const timer = setTimeout(() => {
      onNavigate('historial-ventas');
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Receipt className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Ticket de Venta</h2>
        </div>
        <p className="text-neutral-600">Ticket generado correctamente</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6 max-w-md mx-auto">
        <div className="border-b border-dashed border-neutral-300 pb-4 mb-4">
          <h3 className="text-center text-neutral-900">SISTEMA POS</h3>
          <p className="text-center text-neutral-600">RFC: XXX-XXXX-XXX</p>
          <p className="text-center text-neutral-600">Tel: 555-0000</p>
        </div>

        <div className="border-b border-dashed border-neutral-300 pb-4 mb-4">
          <p className="text-neutral-600">Ticket: V001</p>
          <p className="text-neutral-600">Fecha: 04/12/2025 10:30</p>
          <p className="text-neutral-600">Cajero: Usuario Demo</p>
        </div>

        <div className="border-b border-dashed border-neutral-300 pb-4 mb-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-neutral-700">Producto A x2</span>
            <span className="text-neutral-900">$100.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-700">Producto B x1</span>
            <span className="text-neutral-900">$50.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-700">Producto C x3</span>
            <span className="text-neutral-900">$100.00</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span className="text-neutral-700">Subtotal:</span>
            <span className="text-neutral-900">$250.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-700">IVA (16%):</span>
            <span className="text-neutral-900">$40.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-900">Total:</span>
            <span className="text-neutral-900">$290.00</span>
          </div>
        </div>

        <p className="text-center text-neutral-600 border-t border-dashed border-neutral-300 pt-4">
          ¡Gracias por su compra!
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
          <Printer className="w-5 h-5" />
          <span>Imprimir ticket</span>
        </button>

        <button 
          onClick={() => onNavigate('historial-ventas')}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          <Home className="w-5 h-5 text-neutral-900" />
          <span className="text-neutral-900">Ir a Historial</span>
        </button>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
        <p className="text-blue-900">
          Redirigiendo al Historial de Ventas en 3 segundos...
        </p>
      </div>
    </div>
  );
}
