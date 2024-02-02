import Logo from "./Logo";
import NavBar from "./NavBar";
import Search from "./Search";
import Main from "./Main";
import Box from "./Box";
import WordContents from "./WordContents";
import SavedWords from "./SavedWords";

export default function App() {
  return (
    <div className="app">
      <NavBar>
        <Logo />
        <Search />
      </NavBar>
      <Main>
        <Box>
          <WordContents />
        </Box>
        <Box>
          <SavedWords />
        </Box>
      </Main>
    </div>
  );
}
