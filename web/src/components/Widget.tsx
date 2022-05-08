import { ChatTeardropDots } from "phosphor-react"; //biblioteca de ícones

import { Popover } from "@headlessui/react"; //ajuda na acessibilidade de navegação pelo teclado
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    //a cor brand-500 eu criei la no tailwind.config.js
    //e também se eu precisar colocar outra cor em específico eu
    //coloco depois do - um [#fff]... exemplo: bg-[#fff] ai eu troco o background
    <Popover
      className="
      absolute 
      bottom-4 
      right-4 
      md:bottom-8
      md:right-8 
      flex 
      flex-col 
      items-end
    "
    >
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        className="
    bg-brand-500 
    rounded-full
    px-3
    h-12
    text-white
    flex
    items-center
    group
    "
      >
        <ChatTeardropDots
          className="
      w-6
      h-6
      "
        />

        <span
          className="
        max-w-0
        overflow-hidden
        group-hover:max-w-xs
        transition-all
        duration-500
        ease-linear
        "
          //group do button faz agrupamento de tudo dentro dele para que capite qualquer ação em seus elementos
          //ease-linear faz toda a animação com velocidade igual em vez de acelerar no final
        >
          {/* <span className='pl-2'></span> */}
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}

//popover( (popover é da biblioteca headless ui ) tem integração com o tailwindcss)
//deixa o projeto acessível pela navegação usando o teclado(maioria das vezes o tab)
