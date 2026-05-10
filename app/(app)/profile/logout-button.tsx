'use client';

import { LogOut } from 'lucide-react';
import { logoutAction } from '../../actions';

export function LogoutButton() {
  return (
    <button 
      onClick={async () => await logoutAction()}
      className="flex items-center justify-center gap-2 w-full p-4 rounded-xl border border-gitpo-danger/30 text-gitpo-danger hover:bg-gitpo-danger/10 transition-colors font-medium text-sm"
    >
       <LogOut className="w-4 h-4" />
       Sign out
    </button>
  );
}
