import React from "react";

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">Olá, muito prazer!</p>
          <p className="text-lg mb-6">
            Me chamo Maria Coutinho, sou psicóloga clínica formada pela
            Universidade Federal do Rio de Janeiro (UFRJ), onde tive
            experiências com a escuta psicanalítica dentro e fora dos
            consultórios. Atualmente, trabalho com atendimentos de crianças,
            jovens, adultos e idosos de forma presencial, na Gávea e no Largo do
            Machado, e on-line.
          </p>
          <p className="text-lg mb-6">
            Ao longo da minha trajetória acadêmica, passei por diferentes
            campos, como clínica, pesquisa, saúde mental e educação -
            experiências que ampliaram meu olhar sobre o sofrimento psíquico e
            reforçaram meu compromisso com uma escuta ética e singular.
          </p>
          <p className="text-lg mb-6">
            Nos atendimentos, busco oferecer um espaço seguro, sigiloso e
            acolhedor, onde seja possível falar sobre as angústias e dores que
            atravessam a vida. Cada encontro é atravessado pelo desejo de
            oferecer um momento de cuidado e construção, respeitando a história
            e o tempo de cada sujeito.A partir da escuta, construímos juntos
            outras formas de compreender e habitar a própria existência,
            valorizando a singularidade de cada paciente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
