import { render, screen, waitFor } from "@testing-library/react";
import { fetchCharacterName } from "./fetchCharacterName";
import { CharacterName } from "./CharacterName";

jest.mock("./fetchCharacterName");

//! Throws: Error: Uncaught [TypeError: Cannot read property 'then' of undefined]
// fetchCharacterName.mockResolvedValue("Darth Vader");

describe("Character Name component", () => {
  //! Throws: Error: Uncaught [TypeError: Cannot read property 'then' of undefined]
  // beforeAll(() => {
  //   fetchCharacterName.mockResolvedValue("Darth Vader");
  // });

  // Works.
  beforeEach(() => {
    fetchCharacterName.mockResolvedValue({ name: "Darth Vader" });
  });
  test("should not fail", async () => {
    render(<CharacterName id={1} />);

    await waitFor(() =>
      expect(screen.getByText("Darth Vader")).toBeInTheDocument()
    );
  });
});
