import { GridContainer } from "@/components/ui/grid-container";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GridContainer> = {
  title: "Components/GridContainer",
  component: GridContainer,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof GridContainer>;

export const GridContainerOneElement: Story = {
  render: () => (
    <GridContainer className="h-11 border border-gray-600 rounded-02">
      <div className="col-start-2 col-span-2  border border-gray-700 grid place-content-center md:col-start-4 rounded-02">
        ¡Hello Worls!
      </div>
    </GridContainer>
  ),
};

export const GridContainerSeveralElement: Story = {
  render: () => (
    <GridContainer className="h-11 border border-gray-600 rounded-02">
      <div className="col-start-1 col-span-1 bg-green-500 rounded-02 grid place-content-center font-bold text-gray-100">
        1
      </div>
      <div className="col-start-2 col-span-1 bg-green-500 rounded-0 grid place-content-center font-bold text-gray-100">
        2
      </div>
      <div className="col-start-3 col-span-1 bg-green-500 rounded-02 grid place-content-center font-bold text-gray-100">
        3
      </div>
      <div className="col-start-4 col-span-1 bg-green-500 rounded-02 grid place-content-center font-bold text-gray-100">
        4
      </div>
      <div className="hidden  col-start-5 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        5
      </div>
      <div className="hidden  col-start-6 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        6
      </div>
      <div className="hidden col-start-7 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        7
      </div>
      <div className="hidden col-start-8 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        8
      </div>
      <div className="hidden col-start-5 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        9
      </div>
      <div className="hidden col-start-6 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        10
      </div>
      <div className="hidden col-start-7 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        11
      </div>
      <div className="hidden col-start-8 col-span-1 bg-green-500 rounded-02 md:grid place-content-center font-bold text-gray-100">
        12
      </div>
    </GridContainer>
  ),
};
