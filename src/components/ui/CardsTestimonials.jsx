import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Thiago Assis",
    position: "Coordenador de marketing na 123 comprou",
    testimonial:
      "O que mais me impressionou na Camila, além de dominar os assuntos, foi a forma leve e carinhosa com que ela conduziu os treinamentos. Ela tem uma habilidade incrível de envolver todos, fazendo com que cada um se sinta parte do processo, o que torna o aprendizado muito mais dinâmico e prazeroso.",
    image: "/images/Thiago Assis.png",
  },
  {
    name: "Marcelo Pachani",
    position: "Gerente de operações no Reclame Aqui",
    testimonial:
      "Participei do programa de Liderança no Grupo Zap (Atual OLX) com a Camila. Ela foi responsável pela criação, organização e execução do programa. A Formação foi de grande impacto em minha carreira, desenvolvi alguns skills de liderança que hoje vejo que foram de grande importância. Sua didática e facilidade na condução fizeram grande diferença no meu desenvolvimento.",
    image: "/images/Marcelo Pachani.png",
  },
  {
    name: "Daniela Mayrinck",
    position: "Diretora comercial na Credaluga",
    testimonial:
      "Camila sempre se destacou como protagonista na capacitação de líderes, trabalhando com maestria para garantir que o maior ativo de qualquer empresa – as pessoas – alcance seu pleno potencial. Ela liderou projetos essenciais voltados à formação de lideranças, e teve um impacto significativo no meu desenvolvimento. Confio plenamente em seu trabalho e sou profundamente grata por sua contribuição em me tornar uma líder.",
    image: "/images/Daniela Mayrinck.png",
  },
  {
    name: "Caroline Perez",
    position: "Consultora e coordenadora de marketing",
    testimonial:
      "Tive a oportunidade de participar de dois treinamentos com a Camila e ambos superaram minhas expectativas. A forma como ela conduz, com clareza e foco no desenvolvimento real, fez toda a diferença. Aprendi ferramentas práticas e estratégicas que impactaram diretamente minha carreira e liderança. Recomendo demais!",
    image: "/images/Caroline Perez.png",
  },
  {
    name: "Gabriel Andrade",
    position: "Consultor em design organizacional e co-founder da Sextil",
    testimonial:
      "Tive a oportunidade de participar de treinamentos ministrados pela Camila mais de uma vez. Sua forma despojada de apresentar o conteúdo e a sua linha de raciocínio concreta e cheia de referências teóricas fazem toda a diferença. Posso dizer com segurança que aprendi muito em todos os treinamentos, tanto que me sinto seguro para propagar o conhecimento adquirido. A Camila desperta algo muito raro nos dias de hoje: a vontade de continuar aprendendo e evoluindo a partir do conhecimento.",
    image: "/images/Gabriel Andrade.png",
  },
  {
    name: "Juliana Esparza",
    position: "Especialista em comunicação e marca empregadora na Nomad",
    testimonial:
      "Quando eu olho para trás, percebo o quanto eu me desenvolvi e tive um crescimento acelerado no mercado de trabalho. E reconheço que ter tido o privilégio de conhecer a Camila Pedra, em um dos capítulos da minha jornada, fez muita diferença no meu autodesenvolvimento. É incrível a maneira como ela ministra conteúdos densos e técnicos de uma forma leve, objetiva e focada na vida real. Aprender com a Camila Pedra é inspirador.",
    image: "/images/Juliana Esparza.png",
  },
];

const CardsTestimonials = () => {
  return (
    <div className="flex flex-row items-center gap-8 mb-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="relative z-0 bg-accent flex flex-col pt-10 mx-auto items-center"
        >
          <div className="z-10 static bg-primary rounded-[64px] w-[30rem] p-8 mt-10 flex flex-col items-center text-center">
            <div className="absolute top-0 z-40 bg-primary rounded-full p-3 flex">
              <div className="bg-background rounded-full">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-28"
                />
              </div>
            </div>
            <div className="z-50 pt-6">
              <h1 className="font-brandon font-semibold text-2xl">
                {testimonial.name}
              </h1>
              <span className="font-brandon font-medium text-lg">
                {testimonial.position}
              </span>
              <p className="mt-4 mb-12 font-brandon font-medium">
                {testimonial.testimonial}
              </p>
            </div>
            <div className="absolute z-20 w-16 h-16 bottom-14 bg-primary rotate-45"></div>
            <div className="absolute z-10 bottom-0 h-16 rounded-b-[64px] bg-background w-full">
              <div className="flex flex-row justify-center pt-6 text-2xl gap-3">
                <FaStar className="text-[#FACF5E]" />
                <FaStar className="text-[#FACF5E]" />
                <FaStar className="text-[#FACF5E]" />
                <FaStar className="text-[#FACF5E]" />
                <FaStar className="text-[#FACF5E]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsTestimonials;
