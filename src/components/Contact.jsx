import React from "react";
import SocialMediaLinksNav from "./ui/SocialMediaLinksNav";
import Button from "./ui/Button";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { withMask } from "use-mask-input";
import { Textarea } from "@chakra-ui/react";

function Contact() {
  return (
    <div className="flex flex-col items-center bg-background pt-10 pb-5">
      <div className="flex flex-col items-center">
        <h1 className="font-brandon font-semibold text-4xl text-accent mb-5">
          Contato
        </h1>
        <p className="font-brandon font-medium text-primary text-center px-24">
          Alguma pergunta ou comentário? Basta nos escrever uma mensagem!
        </p>
      </div>

      <div className="max-w-screen-lg flex flex-col xl:flex-row bg-primary m-10 p-2 rounded-xl">
        <div className="bg-accent max-w-screen-sm rounded-xl p-5">
          <h1 className="font-brandon font-medium text-primary text-center xl:text-left text-lg mb-2">
            Informações de Contato
          </h1>
          <p className="font-brandon font-extralight text-sm text-primary text-center xl:text-left mb-5 xl:mb-16">
            Diga algo para iniciar um bate-papo ao comigo!
          </p>
          <div className="flex flex-col items-center xl:items-start xl:gap-2 xl:mb-16">
            <span className="flex flex-col xl:flex-row justify-center items-center xl:items-start text-sm text-center text-primary mb-4 xl:mb-6">
              <FaMobileAlt className="text-xl mb-3 mr-2" />
              +55 11 99356-5681
            </span>
            <span className="flex flex-col xl:flex-row justify-center items-center xl:items-start text-sm text-center text-primary mb-4 xl:mb-6">
              <MdEmail className="text-xl mb-3 mr-2" />
              camilapedra@ivaa.com
            </span>
            <span className="flex flex-col xl:flex-row justify-center items-center xl:items-start text-sm text-center text-primary mb-4 xl:mb-6">
              <FaLocationDot className="text-xl mb-3 mr-2" />
              Atibaia - SP
            </span>
          </div>
          <div className="flex flex-col items-center xl:items-start mt-5">
            <SocialMediaLinksNav />
          </div>
        </div>

        <div className="flex flex-col xl:grid xl:grid-cols-2 p-5 mt-5 ">
          <Field label="Primeiro nome" className="mb-5">
            <Input placeholder="Nome" variant="flushed" color="#094358" />
          </Field>
          <Field label="Sobrenome" className="mb-5">
            <Input placeholder="Sobrenome" variant="flushed" color="#094358" />
          </Field>
          <Field
            label="Email"
            errorText="This field is required"
            className="mb-5"
          >
            <Input placeholder="email@gamil.com" variant="flushed" color="#094358" />
          </Field>
          <Field label="Whatsapp">
            <Input
              color="#094358"
              placeholder="(99) 99999-9999"
              ref={withMask("(99) 99999-9999")}
              variant="flushed"
              className="mb-5"
            />
          </Field>
          <Field label="Mensagem" className="mb-5 grid col-span-2">
            <Textarea placeholder="Escreva sua mensagem" size="xl" variant="outline" color="#094358"/>
          </Field>
        <div className="grid col-span-2 mt-5 mb-10">
          <Button className="bg-accent font-brandon text-xl font-semibold px-8 py-3 rounded-md text-primary">
            Enviar Mensagem
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
