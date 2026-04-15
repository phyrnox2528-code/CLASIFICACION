import { useState } from 'react';
import { LogIn } from 'lucide-react';
import type { UserRole } from '../../App';

interface LoginProps {
  onLogin: (username: string, password: string, role: UserRole) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('vendedor');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Usuario y contraseña son requeridos');
      return;
    }

    setError('');
    onLogin(username, password, role);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="bg-white p-8 rounded-lg border border-neutral-200 w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          <LogIn className="w-6 h-6 text-neutral-900" />
          <h2 className="text-neutral-900">Inicio de Sesión</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-neutral-700">
              Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              placeholder="Ingresa tu usuario"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-neutral-700">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
              placeholder="Ingresa tu contraseña"
            />
          </div>

          <div>
            <label htmlFor="role" className="block mb-2 text-neutral-700">
              Rol de Usuario
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
            >
              <option value="vendedor">Vendedor</option>
              <option value="almacenista">Almacenista</option>
              <option value="supervisor">Supervisor</option>
              <option value="administrador">Administrador</option>
            </select>
            <p className="mt-2 text-neutral-500">
              {role === 'vendedor' && '→ Acceso: Ventas, Inventario'}
              {role === 'almacenista' && '→ Acceso: Entradas, Inventario'}
              {role === 'supervisor' && '→ Acceso: Reportes, Cortes de Caja, Proveedores'}
              {role === 'administrador' && '→ Acceso: Todos los módulos'}
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="mt-6 text-center text-neutral-500">
          Demo: Ingresa cualquier usuario y contraseña, selecciona un rol
        </p>
      </div>
    </div>
  );
}