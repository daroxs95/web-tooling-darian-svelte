import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/svelte";

import Comp from "../App.svelte";

describe("Todo", () => {
  it("renders the component", () => {
    render(Comp);
    expect(screen.getByText("To-Do List")).toBeInTheDocument();
  });
});
