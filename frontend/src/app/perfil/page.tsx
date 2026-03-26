'use client';
import React, { useState } from 'react';
// IMPORTANTE: Verifica que esta ruta sea exacta
import PasswordModal from '@/components/profile/PasswordModal'; 

export default function PerfilPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const handleValidation = (pass: string) => {
    console.log("Validando:", pass);
    setIsModalOpen(false); // Por ahora solo lo cierra
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Datos Personales</h1>
        
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-blue-900/40 uppercase tracking-widest mb-1">
              Correo Electrónico
            </span>
            <span className="text-lg text-gray-700">josue.lara@gmail.com</span>
          </div>
          
          {/* BOTÓN TRIGGER: Al hacer clic, activamos el modal */}
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="p-2 text-gray-300 hover:text-blue-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
          </button>
        </div>

        {/* El Modal escuchando al estado isModalOpen */}
        <PasswordModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onConfirm={handleValidation}
        />
      </div>
    </div>
  );
}