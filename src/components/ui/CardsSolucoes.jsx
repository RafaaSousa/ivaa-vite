import Mentora from "../../assets/mentora.svg"
import Lidera from "../../assets/lidera.svg"
import Apoia from "../../assets/apoia.svg"
const infos = [
  {
    title: "Mentoria",
    description:
      "Focadas em potencializar seus pontos fortes e trabalhar nas áreas a desenvolver, para superar os desafios atuais da sua carreira. Nosso método de mentoria baseia-se em um profundo processo de autoanálise passando por ferramentas estruturadas de autodesenvolvimento. Nosso direcionamento será desenhado sob medida para você.",
    image: `${Mentora}`,
  },
  {
    title: "Formação de liderança",
    description:
      "Programa destinado a pessoas interessadas em ascender a cargos de liderança ou para líderes de primeira viagem. Com conteúdos exclusivos, ferramentas e muita troca de experiencias.",
    image: `${Lidera}`,
  },
  {
    title: "Parcerias e Projetos",
    description:
      "Programa sob medida para organizações que desejam empoderar e desenvolver seus colaboradores para alcançarem seu potencial e impactarem nos resultados do seu negócio.",
    image: `${Apoia}`,
  },
];

const cards = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-10">
      {infos.map((info, index) => {
        return (
          <div key={index}  className="bg-primary border rounded-[64px] py-3 mb-10 items-center text-center w-80">
            <div className="m-4">
              <li className="list-none">
              <div
                className="flex flex-col items-center text-center py-8"
              >
                <img
                  src={info.image}
                  alt="Ivaa Mentora"
                  className="w-40"
                />
                <h1 className="font-brandon font-semibold text-primaryRed text-xl m-4">
                  {info.title}
                </h1>
                <p className="font-brandon font-medium text-accent">{info.description}</p>
              </div>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
