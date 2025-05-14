import { Accordion } from "@/components/ui/accordion";
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
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.{" "}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const AccordionMediumWithoutDivider: Story = {
  render: () => (
    <Accordion showDivider={false} type="single" collapsible className="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const AccordionSmall: Story = {
  render: () => (
    <Accordion type="single" size="sm" collapsible className="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
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
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Para activar el servicio de Atlántida Online deberás descargar nuestra
          aplicación Atlántida Móvil y presionar el botón de "Activa tu Banca
          Digital" para poder crear tu usuario y/o una nueva cuenta con los
          accesos correspondientes. Al finalizar el proceso obtendrás tu usuario
          y contraseña. Así mismo, también tienes al opción de solicitar los
          accesos en cualquiera de nuestras agencias a nivel nacional.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
