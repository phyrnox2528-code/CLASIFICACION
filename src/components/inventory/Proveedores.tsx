import { Truck, Plus, Edit, Clock, Home } from 'lucide-react';

interface ProveedoresProps {
  onNavigate: (screen: string) => void;
}

export function Proveedores({ onNavigate }: ProveedoresProps) {
  const proveedores = [
    { id: 1, nombre: 'Proveedor A', contacto: 'contacto@proveedora.com', telefono: '555-0001' },
    { id: 2, nombre: 'Proveedor B', contacto: 'ventas@proveedorb.com', telefono: '555-0002' },
    { id: 3, nombre: 'Proveedor C', contacto: 'info@proveedorc.com', telefono: '555-0003' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Truck className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Proveedores</h2>
        </div>
        <p className="text-neutral-600">Gestiona la información de tus proveedores</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-3 mb-6">
          {proveedores.map((proveedor) => (
            <div 
              key={proveedor.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200"
            >
              <div>
                <p className="text-neutral-900">{proveedor.nombre}</p>
                <p className="text-neutral-600">{proveedor.contacto}</p>
                <p className="text-neutral-600">{proveedor.telefono}</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
                  <Clock className="w-5 h-5 text-neutral-900" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Agregar proveedor</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Edit className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Editar proveedor</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Clock className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Ver historial</span>
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
