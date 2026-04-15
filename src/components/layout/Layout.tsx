import { Outlet, Link, useLocation } from 'react-router';
import { Camera, Activity } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Panel Principal', icon: Camera },
    { path: '/entrenamiento', label: 'Entrenamiento', icon: Activity },
  ];
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-hidden">
      {/* Barra Superior Blanca y Limpia */}
      <header className="bg-white border-b border-slate-200 shadow-sm relative z-10">
        <div className="px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold tracking-tight text-slate-800 uppercase">
              Clasificación de Residuos
            </h1>
            <nav className="flex gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all text-sm font-semibold
                      ${isActive 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
            <span className="text-[11px] font-bold uppercase text-emerald-700 tracking-wider">Sistema Activo</span>
          </div>
        </div>
      </header>
      
      <main className="p-6 flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}