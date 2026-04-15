import { Camera, Upload, Play, Edit2, Trash2, Save, X, Plus, CheckCircle2, TrendingUp, Database, Activity, FolderOpen, AlertCircle, Settings, ArrowRight, Home } from 'lucide-react';

export function DesignDiagram() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-100 shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-md">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Sistema de Clasificación de Residuos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guía de Diseño y Sistema de Componentes Visuales
        </p>
      </div>

      {/* Navigation Map */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Mapa de Navegación</h2>
          <p className="text-gray-600">Estructura y flujo de navegación entre pantallas del sistema</p>
        </div>

        {/* Main Navigation Flow */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Flujo Principal</h3>
          
          {/* Navigation Architecture */}
          <div className="relative">
            {/* Layout Base */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-300 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Layout Principal</h3>
                  <p className="text-sm text-gray-600">Header + Navigation + Content Area</p>
                </div>
              </div>

              {/* Screens Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Dashboard */}
                <div className="bg-white rounded-lg p-5 border-2 border-green-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-green-700">1</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Dashboard</h4>
                  <p className="text-xs text-gray-600 mb-3">Ruta: /</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Captura de imagen</p>
                    <p>• Carga de archivo</p>
                    <p>• Vista previa</p>
                    <p>• Botón clasificar</p>
                  </div>
                </div>

                {/* Resultado */}
                <div className="bg-white rounded-lg p-5 border-2 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-700">2</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Resultado</h4>
                  <p className="text-xs text-gray-600 mb-3">Ruta: /resultado</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Imagen analizada</p>
                    <p>• Categoría detectada</p>
                    <p>• Nivel de confianza</p>
                    <p>• Historial reciente</p>
                  </div>
                </div>

                {/* Categorías */}
                <div className="bg-white rounded-lg p-5 border-2 border-amber-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                      <FolderOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-700">3</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Categorías</h4>
                  <p className="text-xs text-gray-600 mb-3">Ruta: /categorias</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Listado de categorías</p>
                    <p>• Agregar nueva</p>
                    <p>• Editar existente</p>
                    <p>• Eliminar categoría</p>
                  </div>
                </div>

                {/* Entrenamiento */}
                <div className="bg-white rounded-lg p-5 border-2 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-700">4</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">Entrenamiento</h4>
                  <p className="text-xs text-gray-600 mb-3">Ruta: /entrenamiento</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Iniciar entrenamiento</p>
                    <p>• Progreso en tiempo real</p>
                    <p>• Gráficas de métricas</p>
                    <p>• Configuración modelo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Flow Diagram */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-6">Flujo de Usuario</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Inicio en Dashboard</h4>
                      <p className="text-sm text-gray-600">Usuario captura o carga una imagen de residuo</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mt-3" />
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Clasificación</h4>
                      <p className="text-sm text-gray-600">Sistema procesa imagen y navega a pantalla Resultado</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mt-3" />
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Ver Resultados</h4>
                      <p className="text-sm text-gray-600">Usuario visualiza categoría detectada, confianza y detalles técnicos</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mt-3" />
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Nueva Clasificación</h4>
                      <p className="text-sm text-gray-600">Botón para retornar al Dashboard y clasificar otra imagen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Navegación Secundaria</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Categorías Flow */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Gestión de Categorías</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="text-sm font-medium text-gray-900">Ver lista de categorías</p>
                  <p className="text-xs text-gray-600">Tabla con todas las categorías existentes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-600 mx-auto" />
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="text-sm font-medium text-gray-900">Agregar / Editar</p>
                  <p className="text-xs text-gray-600">Formulario para gestionar categorías</p>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-600 mx-auto" />
                <div className="bg-white rounded-lg p-3 border border-amber-200">
                  <p className="text-sm font-medium text-gray-900">Guardar cambios</p>
                  <p className="text-xs text-gray-600">Actualización en la lista principal</p>
                </div>
              </div>
            </div>

            {/* Entrenamiento Flow */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900">Entrenamiento del Modelo</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <p className="text-sm font-medium text-gray-900">Configurar parámetros</p>
                  <p className="text-xs text-gray-600">Épocas, learning rate, batch size</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-600 mx-auto" />
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <p className="text-sm font-medium text-gray-900">Iniciar entrenamiento</p>
                  <p className="text-xs text-gray-600">Proceso con barra de progreso</p>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-600 mx-auto" />
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <p className="text-sm font-medium text-gray-900">Visualizar métricas</p>
                  <p className="text-xs text-gray-600">Gráficas de accuracy y loss</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Route Table */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Tabla de Rutas</h3>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Pantalla</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Ruta</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Componente</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Acceso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Camera className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-900">Dashboard</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600">/</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Dashboard.tsx</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Principal
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Resultado</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600">/resultado</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Result.tsx</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Navegación
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-5 h-5 text-amber-600" />
                      <span className="font-medium text-gray-900">Categorías</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600">/categorias</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Categories.tsx</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      Pestaña
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">Entrenamiento</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-sm text-gray-600">/entrenamiento</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Training.tsx</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      Pestaña
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Paleta de Colores</h2>
          <p className="text-gray-600">Colores principales del sistema enfocados en sostenibilidad y claridad</p>
        </div>

        {/* Primary Colors */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Colores Principales</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group">
              <div className="aspect-square bg-green-600 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Verde Principal</p>
              <p className="text-sm text-gray-600 font-mono">#16a34a</p>
              <p className="text-xs text-gray-500 mt-1">Botones primarios</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-green-700 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Verde Oscuro</p>
              <p className="text-sm text-gray-600 font-mono">#15803d</p>
              <p className="text-xs text-gray-500 mt-1">Hover states</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-green-50 rounded-xl mb-3 shadow-lg border-2 border-green-200 group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Verde Claro</p>
              <p className="text-sm text-gray-600 font-mono">#f0fdf4</p>
              <p className="text-xs text-gray-500 mt-1">Fondos activos</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-green-100 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Verde Suave</p>
              <p className="text-sm text-gray-600 font-mono">#dcfce7</p>
              <p className="text-xs text-gray-500 mt-1">Badges, alertas</p>
            </div>
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Colores Neutrales</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="group">
              <div className="aspect-square bg-gray-900 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Gris Oscuro</p>
              <p className="text-sm text-gray-600 font-mono">#111827</p>
              <p className="text-xs text-gray-500 mt-1">Textos principales</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-gray-600 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Gris Medio</p>
              <p className="text-sm text-gray-600 font-mono">#6b7280</p>
              <p className="text-xs text-gray-500 mt-1">Textos secundarios</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-gray-200 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Gris Claro</p>
              <p className="text-sm text-gray-600 font-mono">#e5e7eb</p>
              <p className="text-xs text-gray-500 mt-1">Bordes</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-gray-50 rounded-xl mb-3 shadow-lg border-2 border-gray-200 group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Gris Fondo</p>
              <p className="text-sm text-gray-600 font-mono">#f9fafb</p>
              <p className="text-xs text-gray-500 mt-1">Fondos</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-white rounded-xl mb-3 shadow-lg border-2 border-gray-300 group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Blanco</p>
              <p className="text-sm text-gray-600 font-mono">#ffffff</p>
              <p className="text-xs text-gray-500 mt-1">Tarjetas</p>
            </div>
          </div>
        </div>

        {/* Accent Colors */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Colores de Acento</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group">
              <div className="aspect-square bg-blue-500 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Azul</p>
              <p className="text-sm text-gray-600 font-mono">#3b82f6</p>
              <p className="text-xs text-gray-500 mt-1">Plástico</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-amber-500 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Ámbar</p>
              <p className="text-sm text-gray-600 font-mono">#f59e0b</p>
              <p className="text-xs text-gray-500 mt-1">Papel</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-gray-500 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Gris Metálico</p>
              <p className="text-sm text-gray-600 font-mono">#6b7280</p>
              <p className="text-xs text-gray-500 mt-1">Metal</p>
            </div>
            <div className="group">
              <div className="aspect-square bg-red-600 rounded-xl mb-3 shadow-lg group-hover:scale-105 transition-transform"></div>
              <p className="font-semibold text-gray-900">Rojo</p>
              <p className="text-sm text-gray-600 font-mono">#dc2626</p>
              <p className="text-xs text-gray-500 mt-1">Errores, eliminar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tipografía</h2>
          <p className="text-gray-600">Sistema tipográfico basado en Sans-serif moderno</p>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Heading 1</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Sistema de Clasificación de Residuos</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Font: System Sans-serif</span>
              <span>•</span>
              <span>Size: 36px</span>
              <span>•</span>
              <span>Weight: Bold (700)</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Heading 2</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Gestión de Categorías</h2>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Font: System Sans-serif</span>
              <span>•</span>
              <span>Size: 24px</span>
              <span>•</span>
              <span>Weight: Semibold (600)</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Heading 3</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultado de Clasificación</h3>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Font: System Sans-serif</span>
              <span>•</span>
              <span>Size: 20px</span>
              <span>•</span>
              <span>Weight: Semibold (600)</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Body Text</p>
            <p className="text-base text-gray-600 mb-2">Este es el texto de cuerpo utilizado para descripciones, contenido general y párrafos informativos en toda la aplicación.</p>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Font: System Sans-serif</span>
              <span>•</span>
              <span>Size: 16px</span>
              <span>•</span>
              <span>Weight: Normal (400)</span>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Small Text / Labels</p>
            <p className="text-sm text-gray-600 mb-2">Texto pequeño utilizado para etiquetas, metadatos y texto secundario</p>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Font: System Sans-serif</span>
              <span>•</span>
              <span>Size: 14px</span>
              <span>•</span>
              <span>Weight: Medium (500)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Botones</h2>
          <p className="text-gray-600">Estilos y estados de botones del sistema</p>
        </div>

        <div className="space-y-8">
          {/* Primary Buttons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Botones Primarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Default</p>
                <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm">
                  Clasificar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-green-600 • text-white</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Hover</p>
                <button className="w-full px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow-md">
                  Clasificar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-green-700 • shadow-md</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Disabled</p>
                <button className="w-full px-6 py-3 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed" disabled>
                  Clasificar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-gray-300 • disabled</p>
              </div>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Botones Secundarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Default</p>
                <button className="w-full px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm">
                  Cancelar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-white • border-gray-300</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Hover</p>
                <button className="w-full px-6 py-3 bg-gray-50 border border-gray-300 text-gray-900 font-medium rounded-lg shadow-sm">
                  Cancelar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-gray-50 • text-gray-900</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Disabled</p>
                <button className="w-full px-6 py-3 bg-white border border-gray-200 text-gray-400 font-medium rounded-lg cursor-not-allowed" disabled>
                  Cancelar
                </button>
                <p className="text-xs text-gray-600 mt-3">text-gray-400 • disabled</p>
              </div>
            </div>
          </div>

          {/* Danger Buttons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Botones de Peligro</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Default</p>
                <button className="w-full px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-sm">
                  Eliminar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-red-600 • text-white</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Hover</p>
                <button className="w-full px-6 py-3 bg-red-700 text-white font-medium rounded-lg shadow-md">
                  Eliminar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-red-700 • shadow-md</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-500 mb-3">Disabled</p>
                <button className="w-full px-6 py-3 bg-gray-300 text-gray-500 font-medium rounded-lg cursor-not-allowed" disabled>
                  Eliminar
                </button>
                <p className="text-xs text-gray-600 mt-3">bg-gray-300 • disabled</p>
              </div>
            </div>
          </div>

          {/* Icon Buttons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Botones con Iconos</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <button className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm flex items-center justify-center gap-2">
                  <Camera className="w-5 h-5" />
                  <span>Capturar</span>
                </button>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <button className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  <span>Cargar</span>
                </button>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <button className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg shadow-sm flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  <span>Iniciar</span>
                </button>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span>Agregar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tarjetas (Cards)</h2>
          <p className="text-gray-600">Contenedores para agrupar información relacionada</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tarjeta Básica</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Título de Tarjeta</h3>
              <p className="text-sm text-gray-600 mb-4">Descripción o contenido de la tarjeta. Bordes redondeados y padding consistente.</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
                  Acción
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-600">bg-white • border-gray-200 • rounded-lg • p-6</p>
          </div>

          {/* Metric Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tarjeta de Métrica</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">Accuracy</p>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">92.4%</p>
              <p className="text-xs text-gray-500">Modelo entrenado</p>
            </div>
            <p className="text-xs text-gray-600">Icono + Valor grande + Descripción</p>
          </div>

          {/* Info Card with Badge */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tarjeta con Estado</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Modelo CNN</h3>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Activo
                </span>
              </div>
              <p className="text-sm text-gray-600">Red neuronal convolucional para clasificación de residuos.</p>
            </div>
            <p className="text-xs text-gray-600">Título + Badge + Descripción</p>
          </div>

          {/* Highlighted Card */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Tarjeta Destacada</h3>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Clasificación Exitosa</h3>
                  <p className="text-sm text-gray-600">La imagen ha sido procesada correctamente.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600">Gradiente verde • Icono destacado</p>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Campos de Entrada (Inputs)</h2>
          <p className="text-gray-600">Elementos para captura de datos del usuario</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Input */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Input de Texto</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Categoría
              </label>
              <input
                type="text"
                placeholder="Ej: Plástico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <p className="text-xs text-gray-600 mt-2">border-gray-300 • focus:ring-green-500</p>
            </div>
          </div>

          {/* Text Input Filled */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Input con Valor</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <input
                type="text"
                value="Botellas y envases plásticos"
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
              <p className="text-xs text-gray-600 mt-2">Valor predeterminado</p>
            </div>
          </div>

          {/* Select Dropdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Select / Dropdown</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color de Identificación
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none">
                <option>Azul</option>
                <option>Verde</option>
                <option>Ámbar</option>
                <option>Gris</option>
              </select>
              <p className="text-xs text-gray-600 mt-2">Igual estilo que inputs</p>
            </div>
          </div>

          {/* Disabled Input */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Input Deshabilitado</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modelo
              </label>
              <input
                type="text"
                value="CNN v2.1"
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
              />
              <p className="text-xs text-gray-600 mt-2">bg-gray-100 • disabled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress & Indicators */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Barras de Progreso e Indicadores</h2>
          <p className="text-gray-600">Elementos para mostrar estado y progreso</p>
        </div>

        <div className="space-y-8">
          {/* Progress Bar */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Barra de Progreso</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Confianza</span>
                  <span className="text-sm font-semibold text-gray-900">94.3%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-full rounded-full transition-all" style={{ width: '94.3%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Entrenamiento</span>
                  <span className="text-sm font-semibold text-gray-900">67%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-full rounded-full transition-all" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Badges / Insignias</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Modelo Activo
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Plástico
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                Papel
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                Metal
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                Error
              </span>
            </div>
          </div>

          {/* Status Indicators */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Indicadores de Estado</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Conectado</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-amber-700">Procesando</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-red-700">Desconectado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Iconografía</h2>
          <p className="text-gray-600">Iconos del sistema usando Lucide React</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {[
            { Icon: Camera, name: 'Captura', color: 'text-gray-700' },
            { Icon: Upload, name: 'Cargar', color: 'text-gray-700' },
            { Icon: Play, name: 'Iniciar', color: 'text-green-600' },
            { Icon: Edit2, name: 'Editar', color: 'text-blue-600' },
            { Icon: Trash2, name: 'Eliminar', color: 'text-red-600' },
            { Icon: Save, name: 'Guardar', color: 'text-green-600' },
            { Icon: X, name: 'Cerrar', color: 'text-gray-600' },
            { Icon: Plus, name: 'Agregar', color: 'text-green-600' },
            { Icon: CheckCircle2, name: 'Éxito', color: 'text-green-600' },
            { Icon: TrendingUp, name: 'Métricas', color: 'text-blue-600' },
            { Icon: Database, name: 'Datos', color: 'text-gray-700' },
            { Icon: Activity, name: 'Monitor', color: 'text-green-600' },
            { Icon: FolderOpen, name: 'Carpeta', color: 'text-gray-700' },
            { Icon: AlertCircle, name: 'Alerta', color: 'text-amber-600' },
            { Icon: Settings, name: 'Config', color: 'text-gray-700' },
          ].map(({ Icon, name, color }) => (
            <div key={name} className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md hover:scale-105 transition-all">
              <Icon className={`w-8 h-8 ${color}`} />
              <span className="text-xs text-gray-600 font-medium text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Principios de Diseño</h2>
          <p className="text-gray-600">Fundamentos que guían el sistema visual</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sostenibilidad Visual</h3>
            <p className="text-sm text-gray-600">Colores verdes como acento principal reforzando el propósito ecológico del sistema.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Minimalismo</h3>
            <p className="text-sm text-gray-600">Diseño limpio sin elementos innecesarios, enfocado en funcionalidad y claridad.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Consistencia</h3>
            <p className="text-sm text-gray-600">Elementos visuales uniformes: mismo radio de bordes, padding y espaciado en toda la app.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Aspecto Técnico</h3>
            <p className="text-sm text-gray-600">Estilo profesional académico, diseñado para uso en entornos universitarios y de investigación.</p>
          </div>
        </div>
      </div>

      {/* Spacing & Layout */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Espaciado y Layout</h2>
          <p className="text-gray-600">Sistema de espaciado consistente basado en múltiplos de 4px</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-4 mb-3">
              <div className="bg-green-600 rounded" style={{ height: '8px' }}></div>
            </div>
            <p className="text-sm font-semibold text-gray-900">XS - 8px</p>
            <p className="text-xs text-gray-600">Gaps internos</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-4 mb-3">
              <div className="bg-green-600 rounded" style={{ height: '16px' }}></div>
            </div>
            <p className="text-sm font-semibold text-gray-900">SM - 16px</p>
            <p className="text-xs text-gray-600">Padding pequeño</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-4 mb-3">
              <div className="bg-green-600 rounded" style={{ height: '24px' }}></div>
            </div>
            <p className="text-sm font-semibold text-gray-900">MD - 24px</p>
            <p className="text-xs text-gray-600">Padding cards</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-4 mb-3">
              <div className="bg-green-600 rounded" style={{ height: '32px' }}></div>
            </div>
            <p className="text-sm font-semibold text-gray-900">LG - 32px</p>
            <p className="text-xs text-gray-600">Secciones</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Bordes Redondeados</h3>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="bg-green-600 h-16 rounded" style={{ borderRadius: '4px' }}></div>
              <p className="text-xs text-gray-600 mt-2 text-center">SM - 4px</p>
            </div>
            <div>
              <div className="bg-green-600 h-16 rounded-md"></div>
              <p className="text-xs text-gray-600 mt-2 text-center">MD - 6px</p>
            </div>
            <div>
              <div className="bg-green-600 h-16 rounded-lg"></div>
              <p className="text-xs text-gray-600 mt-2 text-center">LG - 8px</p>
            </div>
            <div>
              <div className="bg-green-600 h-16 rounded-xl"></div>
              <p className="text-xs text-gray-600 mt-2 text-center">XL - 12px</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}