import { describe, expect, it } from "vitest";
import { render, screen, act } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Comp from "../lib/Todo.svelte";

const mockTodo = {
  title: "To-Do List",
  tasks: [
    {
      id: 1,
      text: "Task 1",
      completed: false,
    },
    {
      id: 2,
      text: "Task 2",
      completed: true,
    },
  ],
};

describe("Todo", () => {
  it("renders the component", () => {
    render(Comp, { props: { todo: mockTodo } });
    expect(screen.getByText("To-Do List")).toBeInTheDocument();
  });

  it("adds a new todo", async () => {
    render(Comp, { props: { todo: mockTodo } });
    await act(() =>
      userEvent.type(screen.getByPlaceholderText("Add a new task"), "New task")
    );
    await act(() => userEvent.click(screen.getByText("Add Task")));
    expect(screen.getByText("New task")).toBeInTheDocument();
  });
});
