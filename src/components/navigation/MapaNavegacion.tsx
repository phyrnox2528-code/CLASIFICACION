import { 
  LogIn, 
  LayoutGrid, 
  ShoppingCart, 
  Clock, 
  Package, 
  TrendingUp, 
  TrendingDown, 
  Bell, 
  Truck, 
  Calculator, 
  FileText, 
  Users, 
  Receipt,
  ArrowRight,
  Home,
  Lock
} from 'lucide-react';
import type { UserRole } from '../../App';

interface MapaNavegacionProps {
  onNavigate: (screen: string) => void;
  onClose: () => void;
  userRole: UserRole;
}

export function MapaNavegacion({ onNavigate, onClose, userRole }: MapaNavegacionProps) {
  const handleNavigate = (screen: string) => {
    onClose();
    onNavigate(screen);
  };

  // Permisos por rol
  const rolePermissions = {
    vendedor: ['ventas', 'historial-ventas', 'ticket', 'inventario'],
    almacenista: ['registro-entradas', 'inventario', 'registro-salidas', 'alertas'],
    supervisor: ['reportes', 'cortes-caja', 'proveedores'],
    administrador: ['ventas', 'historial-ventas', 'ticket', 'inventario', 'registro-entradas', 'registro-salidas', 'alertas', 'proveedores', 'cortes-caja', 'reportes', 'usuarios-roles']
  };

  const hasAccess = (moduleId: string) => {
    return rolePermissions[userRole].includes(moduleId);
  };

  const getRoleName = () => {
    const roleNames = {
      vendedor: 'Vendedor',
      almacenista: 'Almacenista',
      supervisor: 'Supervisor',
      administrador: 'Administrador'
    };
    return roleNames[userRole];
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white border-b border-neutral-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-neutral-900">Mapa de Navegación del Sistema</h2>
            <p className="text-neutral-600">Rol actual: <strong>{getRoleName()}</strong> • Haz clic en cualquier pantalla disponible para navegar</p>
          </div>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Cerrar
          </button>
        </div>

        <div className="p-8">
          {/* Login */}
          <div className="flex flex-col items-center mb-8">
            <button
              onClick={() => handleNavigate('login')}
              className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-3 min-w-[250px]"
            >
              <LogIn className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">1. Login</p>
                <p className="text-sm opacity-90">Inicio de Sesión</p>
              </div>
            </button>
            <div className="h-12 w-0.5 bg-neutral-300 my-2"></div>
            <ArrowRight className="w-6 h-6 text-neutral-400 rotate-90" />
          </div>

          {/* Dashboard */}
          <div className="flex flex-col items-center mb-8">
            <button
              onClick={() => handleNavigate('dashboard')}
              className="bg-purple-600 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-purple-700 transition-all hover:scale-105 flex items-center gap-3 min-w-[250px]"
            >
              <LayoutGrid className="w-6 h-6" />
              <div className="text-left">
                <p className="font-semibold">2. Dashboard</p>
                <p className="text-sm opacity-90">Menú Principal</p>
              </div>
            </button>
            <div className="h-12 w-0.5 bg-neutral-300 my-2"></div>
          </div>

          {/* Módulos principales en grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Módulo Ventas */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('ventas') ? 'border-green-200 bg-green-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('ventas') ? 'bg-green-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Ventas
                </h3>
                {!hasAccess('ventas') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('ventas') && handleNavigate('ventas')}
                  disabled={!hasAccess('ventas')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('ventas') 
                      ? 'bg-white border border-green-300 hover:bg-green-100 cursor-pointer' 
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className={`w-5 h-5 ${hasAccess('ventas') ? 'text-green-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">3. Ventas</p>
                  </div>
                  {!hasAccess('ventas') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
                <div className="pl-8">
                  <div className={`border-l-2 pl-4 space-y-2 ${hasAccess('ventas') ? 'border-green-300' : 'border-neutral-200'}`}>
                    <button
                      onClick={() => hasAccess('ticket') && handleNavigate('ticket')}
                      disabled={!hasAccess('ticket')}
                      className={`w-full px-3 py-2 rounded text-left transition-all flex items-center gap-2 ${
                        hasAccess('ticket')
                          ? 'bg-white border border-neutral-200 hover:bg-neutral-50'
                          : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <Receipt className={`w-4 h-4 ${hasAccess('ticket') ? 'text-neutral-700' : 'text-neutral-400'}`} />
                      <span className="text-neutral-700">Ticket</span>
                    </button>
                    <button
                      onClick={() => hasAccess('historial-ventas') && handleNavigate('historial-ventas')}
                      disabled={!hasAccess('historial-ventas')}
                      className={`w-full px-3 py-2 rounded text-left transition-all flex items-center gap-2 ${
                        hasAccess('historial-ventas')
                          ? 'bg-white border border-neutral-200 hover:bg-neutral-50'
                          : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <Clock className={`w-4 h-4 ${hasAccess('historial-ventas') ? 'text-neutral-700' : 'text-neutral-400'}`} />
                      <span className="text-neutral-700">Historial</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo Inventario */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('inventario') ? 'border-orange-200 bg-orange-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('inventario') ? 'bg-orange-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Inventario
                </h3>
                {!hasAccess('inventario') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('inventario') && handleNavigate('inventario')}
                  disabled={!hasAccess('inventario')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('inventario')
                      ? 'bg-white border border-orange-300 hover:bg-orange-100 cursor-pointer'
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <Package className={`w-5 h-5 ${hasAccess('inventario') ? 'text-orange-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">5. Inventario</p>
                  </div>
                  {!hasAccess('inventario') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
                <div className="pl-8">
                  <div className={`border-l-2 pl-4 space-y-2 ${hasAccess('inventario') ? 'border-orange-300' : 'border-neutral-200'}`}>
                    <button
                      onClick={() => hasAccess('registro-entradas') && handleNavigate('registro-entradas')}
                      disabled={!hasAccess('registro-entradas')}
                      className={`w-full px-3 py-2 rounded text-left transition-all flex items-center gap-2 ${
                        hasAccess('registro-entradas')
                          ? 'bg-white border border-neutral-200 hover:bg-neutral-50'
                          : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <TrendingUp className={`w-4 h-4 ${hasAccess('registro-entradas') ? 'text-green-600' : 'text-neutral-400'}`} />
                      <span className="text-neutral-700">Entradas</span>
                      {!hasAccess('registro-entradas') && <Lock className="w-3 h-3 text-neutral-400 ml-auto" />}
                    </button>
                    <button
                      onClick={() => hasAccess('registro-salidas') && handleNavigate('registro-salidas')}
                      disabled={!hasAccess('registro-salidas')}
                      className={`w-full px-3 py-2 rounded text-left transition-all flex items-center gap-2 ${
                        hasAccess('registro-salidas')
                          ? 'bg-white border border-neutral-200 hover:bg-neutral-50'
                          : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <TrendingDown className={`w-4 h-4 ${hasAccess('registro-salidas') ? 'text-orange-600' : 'text-neutral-400'}`} />
                      <span className="text-neutral-700">Salidas</span>
                      {!hasAccess('registro-salidas') && <Lock className="w-3 h-3 text-neutral-400 ml-auto" />}
                    </button>
                    <button
                      onClick={() => hasAccess('alertas') && handleNavigate('alertas')}
                      disabled={!hasAccess('alertas')}
                      className={`w-full px-3 py-2 rounded text-left transition-all flex items-center gap-2 ${
                        hasAccess('alertas')
                          ? 'bg-white border border-neutral-200 hover:bg-neutral-50'
                          : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <Bell className={`w-4 h-4 ${hasAccess('alertas') ? 'text-red-600' : 'text-neutral-400'}`} />
                      <span className="text-neutral-700">Alertas</span>
                      {!hasAccess('alertas') && <Lock className="w-3 h-3 text-neutral-400 ml-auto" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo Proveedores */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('proveedores') ? 'border-blue-200 bg-blue-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('proveedores') ? 'bg-blue-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Proveedores
                </h3>
                {!hasAccess('proveedores') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('proveedores') && handleNavigate('proveedores')}
                  disabled={!hasAccess('proveedores')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('proveedores')
                      ? 'bg-white border border-blue-300 hover:bg-blue-100 cursor-pointer'
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <Truck className={`w-5 h-5 ${hasAccess('proveedores') ? 'text-blue-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">9. Proveedores</p>
                  </div>
                  {!hasAccess('proveedores') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
              </div>
            </div>

            {/* Módulo Cortes de Caja */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('cortes-caja') ? 'border-yellow-200 bg-yellow-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('cortes-caja') ? 'bg-yellow-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Caja
                </h3>
                {!hasAccess('cortes-caja') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('cortes-caja') && handleNavigate('cortes-caja')}
                  disabled={!hasAccess('cortes-caja')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('cortes-caja')
                      ? 'bg-white border border-yellow-300 hover:bg-yellow-100 cursor-pointer'
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <Calculator className={`w-5 h-5 ${hasAccess('cortes-caja') ? 'text-yellow-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">10. Cortes de Caja</p>
                  </div>
                  {!hasAccess('cortes-caja') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
              </div>
            </div>

            {/* Módulo Reportes */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('reportes') ? 'border-indigo-200 bg-indigo-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('reportes') ? 'bg-indigo-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Reportes
                </h3>
                {!hasAccess('reportes') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('reportes') && handleNavigate('reportes')}
                  disabled={!hasAccess('reportes')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('reportes')
                      ? 'bg-white border border-indigo-300 hover:bg-indigo-100 cursor-pointer'
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <FileText className={`w-5 h-5 ${hasAccess('reportes') ? 'text-indigo-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">11. Reportes</p>
                  </div>
                  {!hasAccess('reportes') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
              </div>
            </div>

            {/* Módulo Usuarios */}
            <div className={`border-2 rounded-lg p-4 ${
              hasAccess('usuarios-roles') ? 'border-pink-200 bg-pink-50' : 'border-neutral-200 bg-neutral-50 opacity-60'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neutral-900 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${hasAccess('usuarios-roles') ? 'bg-pink-600' : 'bg-neutral-400'}`}></div>
                  Módulo de Usuarios
                </h3>
                {!hasAccess('usuarios-roles') && <Lock className="w-4 h-4 text-neutral-400" />}
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => hasAccess('usuarios-roles') && handleNavigate('usuarios-roles')}
                  disabled={!hasAccess('usuarios-roles')}
                  className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    hasAccess('usuarios-roles')
                      ? 'bg-white border border-pink-300 hover:bg-pink-100 cursor-pointer'
                      : 'bg-neutral-100 border border-neutral-200 cursor-not-allowed'
                  }`}
                >
                  <Users className={`w-5 h-5 ${hasAccess('usuarios-roles') ? 'text-pink-700' : 'text-neutral-400'}`} />
                  <div className="text-left flex-1">
                    <p className="text-neutral-900">12. Usuarios y Roles</p>
                  </div>
                  {!hasAccess('usuarios-roles') && <Lock className="w-4 h-4 text-neutral-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Leyenda */}
          <div className="border-t border-neutral-200 pt-6 mt-6">
            <h3 className="text-neutral-900 mb-4">Permisos por Rol:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-lg border-2 ${userRole === 'vendedor' ? 'border-green-400 bg-green-50' : 'border-neutral-200 bg-neutral-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {userRole === 'vendedor' && <div className="w-2 h-2 bg-green-600 rounded-full"></div>}
                  <strong className="text-neutral-900">Vendedor:</strong>
                </div>
                <p className="text-neutral-700">✓ Ventas, Inventario (solo consulta)</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${userRole === 'almacenista' ? 'border-orange-400 bg-orange-50' : 'border-neutral-200 bg-neutral-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {userRole === 'almacenista' && <div className="w-2 h-2 bg-orange-600 rounded-full"></div>}
                  <strong className="text-neutral-900">Almacenista:</strong>
                </div>
                <p className="text-neutral-700">✓ Entradas, Inventario (gestión completa)</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${userRole === 'supervisor' ? 'border-blue-400 bg-blue-50' : 'border-neutral-200 bg-neutral-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {userRole === 'supervisor' && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                  <strong className="text-neutral-900">Supervisor:</strong>
                </div>
                <p className="text-neutral-700">✓ Reportes, Cortes de Caja, Proveedores</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${userRole === 'administrador' ? 'border-purple-400 bg-purple-50' : 'border-neutral-200 bg-neutral-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  {userRole === 'administrador' && <div className="w-2 h-2 bg-purple-600 rounded-full"></div>}
                  <strong className="text-neutral-900">Administrador:</strong>
                </div>
                <p className="text-neutral-700">✓ Acceso completo a todos los módulos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
