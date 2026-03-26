'use client';
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
}

export default function PasswordModal({ isOpen, onClose, onConfirm }: Props) {
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose} 
    >
      <div 
        className="bg-white p-10 rounded-[32px] shadow-2xl w-full max-w-[400px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-2xl font-bold text-black mb-10 text-center leading-tight">
          Insertar contraseña actual
        </h2>
        
        <div className="relative w-full mb-10 border-2 border-black rounded-xl overflow-hidden flex items-center px-4 py-2">
          {/* Icono de Candado Negro */}
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          
          <input 
            type="password" 
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-4 text-3xl tracking-[0.3em] font-bold outline-none placeholder-gray-300"
            autoFocus
          />
        </div>

        <button 
          onClick={() => onConfirm(password)}
          className="bg-[#f2994a] hover:bg-[#e88a35] text-black text-xl font-bold py-3 px-16 rounded-xl transition-transform active:scale-95 shadow-md"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}