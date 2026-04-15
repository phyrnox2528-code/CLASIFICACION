import { Users, Plus, Edit, Trash2, Home } from 'lucide-react';

interface UsuariosRolesProps {
  onNavigate: (screen: string) => void;
}

export function UsuariosRoles({ onNavigate }: UsuariosRolesProps) {
  const usuarios = [
    { id: 1, nombre: 'Admin Principal', email: 'admin@sistema.com', rol: 'Administrador' },
    { id: 2, nombre: 'Vendedor 1', email: 'vendedor1@sistema.com', rol: 'Vendedor' },
    { id: 3, nombre: 'Almacenista', email: 'almacen@sistema.com', rol: 'Almacén' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-neutral-900" />
          <h2 className="text-neutral-900">Usuarios y Roles</h2>
        </div>
        <p className="text-neutral-600">Administra usuarios y sus permisos en el sistema</p>
      </div>

      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <div className="space-y-3 mb-6">
          {usuarios.map((usuario) => (
            <div 
              key={usuario.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200"
            >
              <div>
                <p className="text-neutral-900">{usuario.nombre}</p>
                <p className="text-neutral-600">{usuario.email}</p>
                <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {usuario.rol}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
          <p className="text-yellow-900">
            <strong>Roles disponibles:</strong> Administrador (acceso total), Vendedor (ventas y consultas), 
            Almacén (inventario y entradas/salidas).
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Crear usuario</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:bg-neutral-100 transition-colors">
            <Edit className="w-5 h-5 text-neutral-900" />
            <span className="text-neutral-900">Editar usuario</span>
          </button>

          <button className="flex items-center gap-3 px-6 py-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <Trash2 className="w-5 h-5 text-red-600" />
            <span className="text-red-600">Eliminar usuario</span>
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
