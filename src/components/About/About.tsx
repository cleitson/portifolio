function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-8"
    >
      <div className="grid gap-10 rounded-3xl border border-white/8 bg-[#0d1b1b] p-7 md:grid-cols-[0.8fr_1.2fr] md:p-12">
        <div>
          <p className="font-code text-sm font-semibold tracking-[0.16em] text-[#63d5cc]">
            01 — SOBRE MIM
          </p>
          <div className="mt-8 space-y-3 text-sm text-[#8ea9a5]">
            <p>FORMAÇÃO FULL STACK · TRYBE</p>
            <p>REDES DE COMPUTADORES · UNIPLAN</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Tecnologia é ferramenta. O resultado é o que importa.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#afc3c0]">
            Tenho formação em Redes de Computadores e desenvolvimento web full
            stack. Trabalho do conceito à entrega, combinando front-end moderno,
            integrações e atenção aos detalhes para criar produtos simples de
            usar, sólidos de manter e alinhados ao que cada projeto precisa
            resolver.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
