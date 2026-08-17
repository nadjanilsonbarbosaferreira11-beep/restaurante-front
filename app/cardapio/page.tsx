import Image from "next/image"

export default function CardapioPage(){

        const produtos = [
            {
            id:1,
            nome:"Hamburguer Artesanal",
            preco:29.90,
            imagem:"/hamburguer.jpg"
        },

        {
            id:2,
            nome:"Pizza Calabresa",
            preco:49.90,
            imagem:"/pizza.jpg"

        },
        {
            id:3,
            nome:"Coca-Cola",
            preco:20.00,
            imagem:"/refri.jpg"
        }
    ]
    return(
        <main className="bg-gray-900 p-8"> 
            <h1 className="mb-6 text-3xl font-bold">
                Cardápio
            </h1>
            
            <div className="grid grid-cols-3 gap-6">
                {
                    produtos.map((produtos)=>(
                        <div key={produtos.id}>
                            <Image 
                            src={produtos.imagem}
                            alt={produtos.nome}
                            width={500}
                            height={600}
                            className="h-40 w-full rounded object-contain"
                            />

                            <h2 className="mt-3 text-x1 font-semibold">
                                {produtos.nome}
                            </h2>

                            <p className="mt-2 text-lg text-green-600">
                               R$ {produtos.preco.toFixed(2)}
                            </p>

                            <button className="mt-4 w-full rounded bg-green-400 py-2 text-white cursor-pointer hover:bg-green-300">
                                Fazer pedidos
                            </button>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}