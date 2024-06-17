import { useEffect, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ListRepo from "./components/ListRepo";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function click(e) {
    e.preventDefault();
    setSearchStatus(true);
  }

  useEffect(() => {
    async function fetchRepos() {
      if (inputValue.length < 2) {
        setRepos([]);
        return;
      }

      try {
        setIsLoading(true);

        const fetching = await fetch(
          `https://api.github.com/search/repositories?q=${inputValue}&per_page=100`,
          {}
        );

        const data = await fetching.json();
        console.log("Data", data);

        if (!data.items) throw new Error("Repos not found");

        setRepos(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setSearchStatus(false);
      }
    }

    fetchRepos();
  }, [searchStatus]);

  // pagination
  const reposPerPage = 6;
  const lastRepoIndex = currentPage * reposPerPage;
  const firstRepoIndex = lastRepoIndex - reposPerPage;
  const currentRepos = repos.slice(firstRepoIndex, lastRepoIndex);

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Input
          inputValue={inputValue}
          onChangeValue={(e) => setInputValue(e.target.value)}
          click={click}
        />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : repos.length ? (
          <>
            <ListRepo data={currentRepos} />
            <Pagination
              totalRepos={repos.length}
              reposPerPage={reposPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <p>There are no repos yet. Paste something into input field</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
