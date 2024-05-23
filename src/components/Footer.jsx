import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex justify-between items-center px-96">
          <p className="ml-10">© Task-To-Go 2024</p>
          <a href="https://github.com/Renmy/kanban-board">
            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
