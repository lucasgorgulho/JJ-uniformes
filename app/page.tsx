export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] text-black px-4">
      <div className="max-w-2xl">
        {/* Título principal */}
        <img 
              className="mx-auto mb-4 block"
              src="/Distribuidora.svg" 
              alt="JJ Uniformes" 
              width={150}
              height={150}
              
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Uniformes
        </h1>

        {/* Mensagem de desenvolvimento */}
        <p className="text-lg md:text-xl mb-8">
          Nosso novo site está sendo desenvolvido e em breve estará no ar!
        </p>

        {/* Ícone animado */}
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
