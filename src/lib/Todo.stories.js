import Todo from "./Todo.svelte";
export default {
  title: "Components/Todo",
  component: Todo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    title: "Todo with custom title",
  },
};
