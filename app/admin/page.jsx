"use client"

import { Amita } from "next/font/google"
import Image from "next/image"
import { useState } from "react"


export default function AdminPage(){

    const[descricao,setDescricao] = useState("")
    const[categoria,setCategoria] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")




    async function cadastrarLanche() {
        
        try {
            const response = await fetch("http://localhost:3001/produtos", {
                method:"POST", 
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })
            })

            if(response.ok){
                alert("Produto cadastro com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar!")
        }

    }

    return(
        <main className="min-h-screen bg-gray-900 P-8">
            <div className="mx-auto max-w-xl rounded-2xl bg-black p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                   
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
                        <label>Categoria</label>
                        <input type="text"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Categoria:"
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
                        type="text"
                        value={imagem}
                        onChange={(e)=> setImagem(e.target.value)}
                        placeholder="Insira o link da imagem"
                        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

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