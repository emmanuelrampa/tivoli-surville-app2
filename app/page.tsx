import React, { useState } from 'react';

const tabs = ['Actus', 'Agenda', 'Galerie', 'Contact'];

export default function Page() {
  const [active, setActive] = useState('Actus');

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-600">
          Association Tivoli–Surville
        </h1>
        <nav className="mt-4 flex justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full font-semibold transition-all border ${
                active === tab ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>

      <section className="max-w-4xl mx-auto p-6">
        {active === 'Actus' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Dernières actualités</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Réunion publique vendredi</li>
              <li>Atelier samedi matin</li>
            </ul>
          </div>
        )}

        {active === 'Agenda' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Événements à venir</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>04/04 : Nettoyage de quartier</li>
              <li>10/04 : Concert interquartiers</li>
            </ul>
          </div>
        )}

        {active === 'Galerie' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Galerie photos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="aspect-square bg-gray-200 rounded shadow" />
              <div className="aspect-square bg-gray-200 rounded shadow" />
              <div className="aspect-square bg-gray-200 rounded shadow" />
              <div className="aspect-square bg-gray-200 rounded shadow" />
            </div>
          </div>
        )}

        {active === 'Contact' && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Votre message"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Envoyer
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
