import Button from "./components/ui/Button";
import Cards from "./components/ui/CardsSolucoes";

import CarrosselTestimonial from "./components/ui/CarrosselTestimonial"

import Solucoes from "./assets/solucoes.svg"
import Missao from "./assets/missao.svg"
import Camila from "./assets/camilapedra.svg"
import { Link } from "react-router-dom";

function App() {
  
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <main className="bg-background ">
        <section className="p-8">
          <div className=" flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:mr-20 ">
            <div className=" top-0">
              <img
                src="/images/simbolo azul.png"
                alt="Logo"
                className="absolute top-3 left-20 hidden xl:flex w-64"
              />
            </div>
            <div className="flex flex-col items-center justify-end gap-8">
              <div className="flex flex-col items-center justify-center py-6">
                <img
                  src="./images/logoBege.png"
                  className="py-8 md:py-0 w-60"
                  alt="Logo"
                />
                <span className="text-primary text-4xl md:text-5xl text-center font-adventures">
                  Sua consultoria de carreira e desenvolvimento
                </span>
              </div>
              <div className="flex flex-col font-brandon text-lg text-center text-primary py-6 md:py-0">
                <span className="">Te ajudo com:</span>
                <span>✓Mentoria personalizada</span>
                <span>✓Desenvolvimento de lideranças</span>
                <span>✓Programas sob medida para sua organização</span>
              </div>
              <div className="py-8 md:py-1">
                <Button
                  className={
                    "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                  }
                >
                  <Link to="/contato">
                  Bora conversar?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="hidden xl:flex justify-center">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <div>
                <img src={Camila} alt="Camila Pedra" />
              </div>
              <div>
                <img
                  src="/images/Camila Pedra.png"
                  alt="Camila Pedra"
                  className="w-[600px]"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mr-16">
              <h1 className="font-adventures text-primary text-5xl mb-6">
                Há muito tempo descobri minha <br />
                vocação por facilitar conhecimento e <br />
                tornár-lo acessível
              </h1>
              <p className="font-brandon text-primary text-xl">
                Por isso, idealizei e fundei a IVAA, transformando
                <br /> incômodos em ação, ajudando pessoas a serem
                <br /> protagonistas de suas trajetórias e carreiras.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary p-6">
          <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-8">
            <div className="flex flex-col items-center justify-center">
              <img
                className="xl:w-[700px]"
                src="/mobileCamilaOneSvg.svg"
                alt="Next.js logo"
              />
            </div>

            <div className="xl:pr-10 xl:mr-10 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-10">
                <img
                  src="/logoCamilaPedra.png"
                  alt="Logo Camila Pedra"
                  className="xl:hidden"
                />
                <h1 className="font-brandon font-semibold text-2xl text-center xl:text-4xl mb-8 xl:text-right text-primaryRed ">
                  Atuo há mais de 15 anos em RH,
                  <br /> com passagens na Votorantim,
                  <br />
                  Grupo Zap, Ambev entre outras.
                </h1>

                <div className="flex flex-col xl:items-center xl:pl-16 gap-4 font-brandon text-center text-accent xl:text-left">
                  <span>
                    Desenvolvi projetos reconhecidos, como o case Willbank, focado evolução e transformação cultural.
                  </span>
                  <span>
                    Criei programas de liderança com alto engajamento e satisfação das equipes e líderes.
                  </span>
                  <span>
                    Participei do podcast Jornada da Liderança para explorar os desafios da primeira liderança.
                  </span>
                  <span>
                    Formação em Administração, Psicologia, MBA em RH (IBMEC) e
                    certificações em DISC®, MBTI® e HUMANGUIDE®.
                  </span>
                </div>
              </div>

              <div>
                <Button
                  className={
                    "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                  }
                >
                  <Link to="/contato">
                  Bora conversar?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="missao">
          <div className="flex flex-col items-center p-6">
            <img src={Missao} alt="Nossa Missão" />
            <p className="font-brandon text-lg text-center text-primary ">
              Impulsionar o protagonismo, especialmente de mulheres, para que
              através<br/> de um profundo autoconhecimento possam se desenvolver,
              ocupar os<br/> lugares que desejam com confiança, deixando um impacto
              positivo e <br/>poderoso nas empresas onde atuam.
            </p>
          </div>
        </section>

        <section id="solucoes" className="bg-accent p-6">
          <div className="flex flex-col items-center">
            <img src={Solucoes} alt="solucoes" />
            <div>
              <Cards />
            </div>
            <div>
              <Button
                className={
                  "bg-background font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                }
              >
                <Link to="/contato">
                  Bora conversar?
                  </Link>
              </Button>
            </div>
          </div>
        </section>

        <section  id="depoimentos" className="bg-accent p-6">
          <CarrosselTestimonial />
        </section>

        <section className="bg-primary p-6">
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-center text-lg text-accent font-brandon font-semibold py-4">
                Pronto para transformar sua carreira e alcançar seus objetivos
                com confiança?
              </h1>
              <span className="text-center text-accent font-brandon py-4">
                Dê o próximo passo na sua jornada de autodesenvolvimento e
                liderança. Vamos juntos construir o caminho para o sucesso!
              </span>
            </div>
            <div className="p-4">
              <Button
                className={
                  "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                }
              >
                <Link to="/contato">
                  Bora conversar?
                  </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
