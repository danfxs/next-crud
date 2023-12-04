import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import useClientes from '@/hooks/useClientes'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { selecionarCliente, excluirCliente, cliente, clientes, novoCliente, 
    salvarCliente, tabelaVisivel, exibirTabela} = useClientes()

  return (
    <div className='flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
      text-white'>
        <Layout titulo="Cadastro Simples">
          { tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" onClick={novoCliente}>
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente} />
            </>
          ) : (
            <>
              <Formulario cliente={cliente}
                cancelado={exibirTabela}
                clienteMudou={salvarCliente}/>
            </>
          )}
        </Layout>
    </div>
  )
}
