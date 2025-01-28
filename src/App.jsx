import { motion } from "framer-motion";
import Button from "./components/ui/Button";
import Cards from "./components/ui/CardsSolucoes";
import CarrosselTestimonial from "./components/ui/CarrosselTestimonial";
import Solucoes from "./assets/solucoes.svg";
import Missao from "./assets/missao.svg";
import Camila from "./assets/camilapedra.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <main className="bg-background">
        {/* Seção Home */}
        <section id="home" className="p-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.1 }} // Aciona a animação quando 10% do elemento estiver visível
            className="flex flex-col xl:flex-row items-center justify-center xl:justify-around xl:mr-20"
          >
            <div className="mr-16">
              <motion.img
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.1 }}
                src="/images/simbolo azul.png"
                alt="Logo"
                className="absolute top-3 left-auto hidden xl:flex w-64"
              />
            </div>
            <div className="flex flex-col items-center justify-end gap-8">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ amount: 0.1 }}
                className="flex flex-col items-center justify-center py-6"
              >
                <img
                  src="./images/logoBege.png"
                  className="py-8 md:py-0 w-60"
                  alt="Logo"
                />
                <span className="text-primary text-4xl md:text-5xl text-center font-adventures">
                  Sua consultoria de carreira e desenvolvimento
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ amount: 0.1 }}
                className="flex flex-col font-brandon text-lg text-center text-primary py-6 md:py-0"
              >
                <span className="">Te ajudo com:</span>
                <span>Mentoria personalizada</span>
                <span>Desenvolvimento de lideranças</span>
                <span>Programas sob medida para sua organização</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                viewport={{ amount: 0.1 }}
                className="py-8 md:py-1"
              >
                <Button
                  className={
                    "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                  }
                >
                  <Link to="/contato">Bora conversar?</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Seção Sobre */}
        <section id="" className="hidden xl:flex justify-around">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.1 }}
            className="flex flex-row"
          >
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

            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.1 }}
              className="flex flex-col justify-center items-center mr-16"
            >
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
            </motion.div>
          </motion.div>
        </section>

        {/* Seção Sobre */}
        <section id="sobre" className="bg-primary p-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{  amount: 0.1 }}
            className="flex flex-col xl:flex-row items-center xl:justify-around gap-8"
          >
            <div className="flex flex-col items-center justify-center">
              <img
                className="xl:w-[700px]"
                src="/Camila Pedra.svg"
                alt="Camila Pedra"
              />
            </div>

            <div className="xl:pr-10 xl:mr-10 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-10">
                <motion.img
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0.1 }}
                  src="/logoCamilaPedra.png"
                  alt="Logo Camila Pedra"
                  className="xl:hidden"
                />
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ amount: 0.1 }}
                  className="font-brandon font-semibold text-2xl text-center xl:text-4xl mb-8 xl:text-right text-primaryRed "
                >
                  Atuo há mais de 15 anos em RH,
                  <br /> com passagens na Votorantim,
                  <br />
                  Grupo Zap, Ambev entre outras.
                </motion.h1>

                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.1 }}
                className="flex flex-col xl:items-center xl:pl-16 gap-4 font-brandon text-center text-accent xl:text-left">
                  <span>
                    Desenvolvi projetos reconhecidos, como o case Willbank,
                    focado evolução e transformação cultural.
                  </span>
                  <span>
                    Criei programas de liderança com alto engajamento e
                    satisfação das equipes e líderes.
                  </span>
                  <span>
                    Participei do podcast Jornada da Liderança para explorar os
                    desafios da primeira liderança.
                  </span>
                  <span>
                    Formação em Administração, Psicologia, MBA em RH (IBMEC) e
                    certificações em DISC®, MBTI® e HUMANGUIDE®.
                  </span>
                </motion.div>
              </div>

              <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ amount: 0.1 }}
              >
                <Button
                  className={
                    "bg-accent font-brandon text-2xl font-semibold px-8 py-3 rounded-full text-primary"
                  }
                >
                  <Link to="/contato">Bora conversar?</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Seção Missão */}
        <section id="missao">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.1 }}
            className="flex flex-col items-center p-6"
          >
            <img src={Missao} alt="Nossa Missão" />
            <p className="font-brandon text-lg text-center text-primary ">
              Impulsionar o protagonismo, especialmente de mulheres, para que
              através
              <br /> de um profundo autoconhecimento possam se desenvolver,
              ocupar os
              <br /> lugares que desejam com confiança, deixando um impacto
              positivo e <br />
              poderoso nas empresas onde atuam.
            </p>
          </motion.div>
        </section>

        {/* Seção Soluções */}
        <section id="solucoes" className="bg-accent p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.1 }}
            className="flex flex-col items-center"
          >
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
                <Link to="/contato">Bora conversar?</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Seção Depoimentos */}
        <section id="depoimentos" className="bg-accent p-6">
          <CarrosselTestimonial />
        </section>

        {/* Seção Final */}
        <section className="bg-primary p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.1 }}
            className="flex flex-col items-center"
          >
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
                <Link to="/contato">Bora conversar?</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
