"use client"

import Image from 'next/image';

export default function Home() {
  async function cadastrar(e:any){
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
  }

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
    <div className="w-full max-w-lg bg-black rounded-2xl shadow-md p-8 grid grid-cols gap-4">

      <Image
      src="/logotipo-restaurante.png"
      alt="Logotipo"
      width={200}
      height={200}
      className="mx-auto mb-4"
      />

      <h1 className="text-2x1 font-bold mb-6 text-white">Restaurante - dançakuduro</h1>

      <input type="text"
      placeholder="Digite a descrição..." 
      className="w-full rounded-2xl border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900"
      />

      <input type="number" 
      placeholder="Digite o preço do produto..."
      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900"
      />

      <input type="text" 
      placeholder="Digite a categoria..."
      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900"
      />

      <input type="text" 
      placeholder="O lanche está disponivel?"
      className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900"/>

      <button className="w-full rounded-xl bg-green-700 px-4 py-3 font-medium text-white shadow-sm cursor-pointer hover:bg-green-500" onClick={cadastrar}>Cadastrar</button>
    </div>
    </main>
  );
}