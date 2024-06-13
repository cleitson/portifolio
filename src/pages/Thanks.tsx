import { Link } from "react-router-dom"

function Thanks() {
  return (
    <section className="flex flex-col justify-center items-center p-10 text-white w-full h-screen">
      <h1 className="md:text-6xl text-5xl font-semibold mb-10 text-[#5DBCCC]">Obrigado por entrar em contato!</h1>
      <p className="text-2xl md:text-4xl font-semibold bg-clip-text text-[#BEDADA] mb-10">
        Sua mensagem foi enviada com sucesso! Responderei em breve.
      </p>
      <Link to='/' className="inline-flex items-center justify-center rounded-md bg-[#9AC8D0] text-black hover:bg-[#BEDADA] h-10 px-4 py-2 w-52 text-xl font-medium"> Página inicial</Link>
    </section>
  )
}

export default Thanks