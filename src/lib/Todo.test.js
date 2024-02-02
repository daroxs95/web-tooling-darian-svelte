import { describe, expect, it } from "vitest";
import { render, screen, act } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Comp from "../App.svelte";

describe("Todo", () => {
  it("renders the component", () => {
    render(Comp);
    expect(screen.getByText("To-Do List")).toBeInTheDocument();
  });

  it("adds a new todo", async () => {
    render(Comp);
    await act(() =>
      userEvent.type(screen.getByPlaceholderText("Add a new task"), "New task")
    );
    await act(() => userEvent.click(screen.getByText("Add Task")));
    expect(screen.getByText("New task")).toBeInTheDocument();
  });
});
