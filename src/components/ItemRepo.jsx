import { JournalCode } from "react-bootstrap-icons";
import { CircleFill } from "react-bootstrap-icons";

function trimText(text, lng = 60) {
  if (text.length > lng) {
    return text.slice(0, lng) + "...";
  }
  return text;
}

function ItemRepo({ repo }) {
  const description = trimText(repo.description || "");

  return (
    <a href={repo.html_url} className="item-repo" target="_blank">
      <div className="item-repo__content">
        <h2 className="repo__name">
          <JournalCode size={24} />
          {repo.full_name}
        </h2>
        <span className="repo__type">{repo.visibility}</span>
        <p className="repo__description">{description}</p>
        <div className="repo__techs">
          <CircleFill size={12} /> {repo.language}
        </div>
      </div>
    </a>
  );
}

export default ItemRepo;
