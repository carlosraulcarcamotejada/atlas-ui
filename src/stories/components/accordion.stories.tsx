import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionMedium: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionMediumWithoutDivider: Story = {
  render: () => (
    <Accordion showDivider={false} type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Imágen de Dakota Tyler</AccordionTrigger>
        <AccordionContent>
          <div className="rounded-03 overflow-hidden border border-gray-300 inline-block">
            <img
              className="w-full h-auto block"
              src="https://pbs.twimg.com/media/FrEx8qZaEAEEPCT.jpg:large"
              alt="dakota-tyler-image"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionSmall: Story = {
  render: () => (
    <Accordion type="single" size="sm" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionSmallWithoutDivider: Story = {
  render: () => (
    <Accordion
      showDivider={false}
      size="sm"
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionMediumMultiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
