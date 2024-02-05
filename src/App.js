import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import Main from "./Main";
import Box from "./Box";
import WordContents from "./WordContents";
import SavedWords from "./SavedWords";
import { useEffect, useState } from "react";

const KEY = "2072fcf4-44c8-4743-88f9-b6e2ee5209ec";

export default function App() {
  const [query, setQuery] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSearch() {
    setIsLoading(true);
    setError("");
    setSearchedWord("");
    async function getWord() {
      try {
        const res = await fetch(
          `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=${KEY}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching the word");

        const data = await res.json();

        const {
          meta: {
            id: name,
            uuid: id,
            syns: [synonym1],
          },
          shortdef: [definition],
          fl: figure,
        } = data[0];

        const desData = {
          id,
          name,
          definition,
          synonym1,
          figure,
        };

        setSearchedWord(desData);
      } catch (err) {
        if (err.name !== "TypeError") setError(err.name);
      } finally {
        setIsLoading(false);
      }
    }
    getWord();
  }

  // useEffect(
  //   function () {
  //     try {
  //       async function getWord() {
  //         const res = await fetch(
  //           `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${KEY}`
  //         );
  //         const data = await res.json();

  //         console.log(data);
  //       }

  //       getWord();
  //     } catch (error) {}
  //   },
  //   [word]
  // );
  return (
    <div className="app">
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} onSearchWord={handleSearch} />
      </NavBar>
      <Main>
        <Box>
          {error && <p className="error">{error}</p>}
          {isLoading && <p className="loading">Loading...</p>}
          {searchedWord && !error && (
            <WordContents searchedWord={searchedWord} />
          )}
        </Box>
        <Box>
          <SavedWords />
        </Box>
      </Main>
    </div>
  );
}
