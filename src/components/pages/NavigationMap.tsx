import { Camera, CheckCircle2, FolderOpen, Activity, ArrowRight, ArrowDown, Home, Palette, Map as MapIcon } from 'lucide-react';

export function NavigationMap() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100 shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-md">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <MapIcon className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Mapa de Navegación</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Diagrama de flujo y estructura de navegación del sistema
        </p>
      </div>

      {/* Main Architecture Diagram */}
      <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Arquitectura de Navegación</h2>
          <p className="text-gray-600">Estructura jerárquica del sistema de clasificación</p>
        </div>

        {/* Layout Container */}
        <div className="relative">
          {/* Main Layout Box */}
          <div className="border-4 border-gray-400 rounded-2xl p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6 p-4 bg-white rounded-xl border-2 border-gray-300 shadow-md">
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Layout Principal</h3>
                <p className="text-sm text-gray-600">Header + Navigation Tabs + Content</p>
              </div>
            </div>

            <ArrowDown className="w-8 h-8 text-gray-400 mx-auto mb-6" />

            {/* Main Screens Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dashboard Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition"></div>
                <div className="relative bg-white rounded-xl p-6 border-4 border-green-500 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-md">
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-green-700">1</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Dashboard</h4>
                  <div className="bg-green-50 rounded-lg p-3 mb-3 border border-green-200">
                    <p className="text-xs font-mono text-green-800">Ruta: /</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Captura de imagen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Carga de archivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Vista previa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span>Botón clasificar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resultado Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition"></div>
                <div className="relative bg-white rounded-xl p-6 border-4 border-blue-500 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-700">2</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Resultado</h4>
                  <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-200">
                    <p className="text-xs font-mono text-blue-800">Ruta: /resultado</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Imagen analizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Categoría detectada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Nivel de confianza</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Historial reciente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Categorías Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition"></div>
                <div className="relative bg-white rounded-xl p-6 border-4 border-amber-500 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
                      <FolderOpen className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-amber-700">3</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Categorías</h4>
                  <div className="bg-amber-50 rounded-lg p-3 mb-3 border border-amber-200">
                    <p className="text-xs font-mono text-amber-800">Ruta: /categorias</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Listado categorías</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Agregar nueva</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Editar existente</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                      <span>Eliminar categoría</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Entrenamiento Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition"></div>
                <div className="relative bg-white rounded-xl p-6 border-4 border-purple-500 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
                      <Activity className="w-7 h-7 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-700">4</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Entrenamiento</h4>
                  <div className="bg-purple-50 rounded-lg p-3 mb-3 border border-purple-200">
                    <p className="text-xs font-mono text-purple-800">Ruta: /entrenamiento</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Iniciar entrenamiento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Progreso en tiempo real</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Gráficas de métricas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      <span>Configuración modelo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Flow Diagram */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8 shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Flujo de Usuario Principal</h2>
          <p className="text-gray-600">Recorrido típico del usuario a través del sistema</p>
        </div>

        <div className="relative">
          {/* Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-3 border-green-500 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Captura</h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Usuario captura o carga imagen de residuo
                </p>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs font-semibold text-green-800 text-center">Dashboard</p>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-16 h-16 text-green-500" strokeWidth={3} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-3 border-blue-500 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Procesar</h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Sistema analiza imagen con modelo CNN
                </p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs font-semibold text-blue-800 text-center">Clasificación</p>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-16 h-16 text-blue-500" strokeWidth={3} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-3 border-purple-500 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Visualizar</h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Ver categoría, confianza y detalles
                </p>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="text-xs font-semibold text-purple-800 text-center">Resultado</p>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-16 h-16 text-purple-500" strokeWidth={3} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-3 border-green-500 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg">
                  4
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-3">Repetir</h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  Botón para nueva clasificación
                </p>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs font-semibold text-green-800 text-center">Reiniciar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Flows */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Categorías Flow */}
        <div className="bg-white rounded-2xl border-2 border-amber-300 p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center shadow-md">
              <FolderOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Gestión de Categorías</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <h4 className="font-semibold text-gray-900">Ver Lista</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Tabla con todas las categorías existentes</p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-amber-500" strokeWidth={3} />
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h4 className="font-semibold text-gray-900">Agregar / Editar</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Formulario para gestionar categorías</p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-amber-500" strokeWidth={3} />
            </div>

            <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h4 className="font-semibold text-gray-900">Guardar Cambios</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Actualización en la lista principal</p>
            </div>
          </div>
        </div>

        {/* Training Flow */}
        <div className="bg-white rounded-2xl border-2 border-purple-300 p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Entrenamiento del Modelo</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                <h4 className="font-semibold text-gray-900">Configurar</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Épocas, learning rate, batch size</p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-purple-500" strokeWidth={3} />
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                <h4 className="font-semibold text-gray-900">Entrenar</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Proceso con barra de progreso</p>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-purple-500" strokeWidth={3} />
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                <h4 className="font-semibold text-gray-900">Visualizar Métricas</h4>
              </div>
              <p className="text-sm text-gray-600 ml-11">Gráficas de accuracy y loss</p>
            </div>
          </div>
        </div>
      </div>

      {/* Routes Table */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tabla de Rutas del Sistema</h2>
          <p className="text-gray-600">Listado completo de pantallas y sus rutas</p>
        </div>

        <div className="overflow-hidden rounded-xl border-2 border-gray-300">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Pantalla</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Ruta</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Componente</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase">Tipo</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-200 bg-white">
              <tr className="hover:bg-green-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-md">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Dashboard</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">Dashboard.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-lg">
                    Principal
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Resultado</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/resultado</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">Result.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-lg">
                    Navegación
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-amber-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-md">
                      <FolderOpen className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Categorías</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/categorias</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">Categories.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-lg">
                    Pestaña
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-purple-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Entrenamiento</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/entrenamiento</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">Training.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-lg">
                    Pestaña
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-pink-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center shadow-md">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Diagrama de Diseño</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/diagrama</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">DesignDiagram.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-pink-100 text-pink-700 text-sm font-semibold rounded-lg">
                    Pestaña
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                      <MapIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Mapa de Navegación</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <code className="px-3 py-1.5 bg-gray-100 rounded-md font-mono text-sm text-gray-800">/mapa</code>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">NavigationMap.tsx</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-lg">
                    Pestaña
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
