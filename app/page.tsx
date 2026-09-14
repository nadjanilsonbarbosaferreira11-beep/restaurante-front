"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
useRouter
import Swal from "sweetalert2"
import Image from 'next/image';

export default function loginUsuario() {

      const router = useRouter()
    
        const [usuario, setUsuario] = useState("")
        const [email, setEmail] = useState("")
        const [senha, setSenha] = useState("")
    
      async function entrar(){
        if(usuario === "" && senha === ""){
          localStorage.setItem("usuario_logado","true")
    
          await Swal.fire({
            title: "Logado com sucesso!",
            icon:"success",
            confirmButtonText:"Ok"
          })
    
          router.push("/cardapio")
          return
        }else{
          await Swal.fire({
            title: "Falha ao logar!",
            icon:"error",
            confirmButtonText:"Ok"
          })
        }
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

      <h1 className="text-2x1 font-bold mb-6 text-center text-white">Restaurante - dançakuduro</h1>

      <p className="text-2x1 font-bold text-white">Login</p>

      <div>

        <label className="text-black">Usuario</label>
          <input type="text" 
          placeholder="Digite o nome de usuário..."
          value={usuario}
          onChange={(e)=>setUsuario(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none text-white placeholder:text-gray-500"
          />

         <label className="text-black">Email</label>
        <input type="text"
        placeholder="Digite seu email..."
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full rounded-lg border p-3 outline-none text-white placeholder:text-gray-500" />

          <label className="text-black">Senha</label>
          <input type="password" 
          placeholder="Digite o nome de usuário..."
          value={senha}
          onChange={(e)=>setSenha(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none text-white placeholder:text-gray-500"
          />

          <button onClick={entrar}
          className="w-full p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white cursor-pointer
          py-3 mt-2 font-semibold">
            Entrar
          </button>

      </div>
    </div>
    </main>
  );
}