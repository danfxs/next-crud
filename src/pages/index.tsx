import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const clientes = [
    new Cliente('Bia', 34, '1'),
    new Cliente('Pedro', 23, '2'),
    new Cliente('Bianca', 45, '3'),
    new Cliente('Carlos', 21, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Excluindo: ' + cliente)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className='flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-yellow-500 to-blue-600
      text-white'>
        <Layout titulo="Cadastro Simples">
          { visivel === 'tabela' ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" onClick={() => setVisivel('form')}>
                  Novo Cliente
                </Botao>
              </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido} />
            </>
          ) : (
            <>
              <Formulario cliente={clientes[1]}
                cancelado={() => setVisivel('tabela')}
                clienteMudou={salvarCliente}/>
            </>
          )}
        </Layout>
    </div>
  )
}
