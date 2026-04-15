import { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  color: string;
  sampleCount: number;
}

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Plástico', description: 'Botellas, envases y contenedores plásticos', color: 'blue', sampleCount: 1250 },
    { id: 2, name: 'Vidrio', description: 'Botellas y envases de vidrio', color: 'green', sampleCount: 980 },
    { id: 3, name: 'Papel', description: 'Papel, cartón y documentos', color: 'amber', sampleCount: 1100 },
    { id: 4, name: 'Metal', description: 'Latas y objetos metálicos', color: 'gray', sampleCount: 750 },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', description: '', color: 'blue' });

  const handleAdd = () => {
    if (formData.name && formData.description) {
      const newCategory: Category = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        color: formData.color,
        sampleCount: 0,
      };
      setCategories([...categories, newCategory]);
      setFormData({ name: '', description: '', color: 'blue' });
      setIsAdding(false);
    }
  };

  const handleEdit = (id: number) => {
    const category = categories.find(c => c.id === id);
    if (category) {
      setFormData({ name: category.name, description: category.description, color: category.color });
      setEditingId(id);
    }
  };

  const handleSaveEdit = () => {
    if (editingId !== null) {
      setCategories(categories.map(cat => 
        cat.id === editingId 
          ? { ...cat, name: formData.name, description: formData.description, color: formData.color }
          : cat
      ));
      setEditingId(null);
      setFormData({ name: '', description: '', color: 'blue' });
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Estás seguro de eliminar esta categoría?')) {
      setCategories(categories.filter(cat => cat.id !== id));
    }
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: '', description: '', color: 'blue' });
  };

  const colorOptions = [
    { value: 'blue', label: 'Azul' },
    { value: 'green', label: 'Verde' },
    { value: 'amber', label: 'Ámbar' },
    { value: 'gray', label: 'Gris' },
    { value: 'red', label: 'Rojo' },
    { value: 'purple', label: 'Púrpura' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Gestión de Categorías</h2>
          <p className="text-gray-600 mt-1">Administra las categorías de clasificación de residuos</p>
        </div>
        {!isAdding && !editingId && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span className="font-medium">Agregar Categoría</span>
          </button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId !== null) && (
        <div className="bg-white rounded-lg border-2 border-green-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            {isAdding ? 'Nueva Categoría' : 'Editar Categoría'}
          </h3>
          
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Categoría
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Plástico"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Ej: Botellas, envases y contenedores plásticos"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color de Identificación
              </label>
              <select
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {colorOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={isAdding ? handleAdd : handleSaveEdit}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span className="font-medium">Guardar</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="font-medium">Cancelar</span>
            </button>
          </div>
        </div>
      )}

      {/* Categories Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Color
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Muestras
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 bg-${category.color}-500 rounded-full`}></div>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{category.description}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${category.color}-100 text-${category.color}-800`}>
                      {colorOptions.find(c => c.value === category.color)?.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{category.sampleCount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(category.id)}
                        disabled={isAdding || editingId !== null}
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        disabled={isAdding || editingId !== null}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Total de Categorías</p>
          <p className="text-3xl font-bold text-gray-900">{categories.length}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Total de Muestras</p>
          <p className="text-3xl font-bold text-gray-900">
            {categories.reduce((sum, cat) => sum + cat.sampleCount, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-5">
          <p className="text-sm text-gray-600 mb-1">Promedio por Categoría</p>
          <p className="text-3xl font-bold text-gray-900">
            {Math.round(categories.reduce((sum, cat) => sum + cat.sampleCount, 0) / categories.length)}
          </p>
        </div>
      </div>
    </div>
  );
}
