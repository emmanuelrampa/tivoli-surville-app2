'use client';
import { useState } from 'react';

const tabs = ['Actus', 'Agenda', 'Galerie', 'Contact'];

export default function Page() {
  const [active, setActive] = useState('Actus');

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Association Tivoli–Surville
      </h1>

      <div className="flex gap-4 justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-full border ${
              active === tab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="bg-white rounded-xl shadow p-6 min-h-[200px]">
        {active === 'Actus' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Dernières actualités</h2>
            <p>– Réunion publique vendredi</p>
            <p>– Atelier samedi matin</p>
          </div>
        )}

        {active === 'Agenda' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Événements à venir</h2>
            <p>Calendrier à intégrer...</p>
          </div>
        )}

        {active === 'Galerie' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Galerie photos</h2>
            <p>[Zone pour photos ici]</p>
          </div>
        )}

        {active === 'Contact' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>Formulaire à intégrer...</p>
          </div>
        )}
      </section>
    </main>
  );
}
