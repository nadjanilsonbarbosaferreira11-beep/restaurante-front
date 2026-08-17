"use client"

import Image from "next/image"
import { useState } from "react"


export default function AdminPage(){

    const[nome, setNome] = useState("")
    const[descricao,setDescricao] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")


    function selecionarImagem(e: React.ChangeEvent<HTMLInputElement>){
        const arquivo = e.target.files?.[0]

        if(arquivo){
            setImagem(URL.createObjectURL(arquivo))
        }
    }


    async function cadastrarLanche() {
        alert("Lanche cadastrado com sucesso!")
    }

    return(
        <main className="min-h-screen bg-gray-900 P-8">
            <div className="mx-auto max-w-xl rounded-2x1 bg-black p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label>Nome</label>
                        <input type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder="Ex: X-Bacon"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <div>
                        <label>Descricao</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: X-Bacon de salada com carne"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <div>
                        <label>Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <div>
                        <label>Imagem</label>
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                        placeholder="Ex: 10.00"
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    {/*previa da imagem */}

                    {imagem && (
                        <div>
                            <p className="mb-2 font-medium">Previa</p>

                            <Image 
                            src={imagem}
                            alt="Previa do lanche"
                            width={400}
                            height={250}
                            className="h-48 w-full rounded object-contain"
                            />
                        </div>
                    )}

                    <button
                    type="submit"
                    className="w-full rounded bg-green-600 py-3 font-semibold text-white hover:bg-green-500 cursor-pointer">
                        Cadastrar Lanche
                    </button>
                </form>
            
            
            </div>
        </main>
    )
}