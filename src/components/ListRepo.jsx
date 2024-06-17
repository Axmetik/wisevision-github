import ItemRepo from "./ItemRepo";

function ListRepo({ data }) {
  const repos = data || [];

  return (
    <div className="repos">
      {repos && repos.map((repo) => <ItemRepo repo={repo} key={repo.id} />)}
    </div>
  );
}

export default ListRepo;
