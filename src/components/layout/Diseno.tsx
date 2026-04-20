import { Outlet, Link, useLocation } from 'react-router';
import { Camera, Activity } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Clasificador', icon: Camera },
    { path: '/entrenamiento', label: 'IA Training', icon: Activity },
  ];
  
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60 px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              {/* Mantengo el logo grande que pediste antes */}
              <img 
                src="/Sin logosh.png" 
                alt="Logo" 
                className="h-24 w-24 object-contain transition-transform hover:scale-105" 
              />
              
              <img 
                src="/tirulosh.png" 
                alt="Título" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            
            <nav className="flex items-center gap-2 border-l border-slate-200 pl-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-5 py-2.5 rounded-xl transition-all text-sm font-black uppercase tracking-wider
                      ${isActive 
                        ? 'bg-green-50 text-[#006400] shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}
                  >
                    {/* Icono un poco más grande (w-5 h-5) */}
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Sistema Online</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto w-full p-8 flex-1">
        <Outlet />
      </main>
    </div>
  );
}