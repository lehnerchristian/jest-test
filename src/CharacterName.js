import { useState, useEffect } from "react";
import { fetchCharacterName } from "./fetchCharacterName";

export function CharacterName({ id }) {
  const [characterName, setCharacterName] = useState("");

  useEffect(() => {
    fetchCharacterName(id).then((jedi) => setCharacterName(jedi.name));
  }, [id]);
  return <p>{characterName}</p>;
}
