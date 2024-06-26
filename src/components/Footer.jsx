import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="flex justify-between gap-2 items-center md:px-[25%] flex-col-reverse md:flex-row">
        <p>© Task-To-Go 2024. IronHack Mini Project</p>
        <a href="https://github.com/Renmy/kanban-board">
          <FontAwesomeIcon
            className="h-8 hover:text-[#775DA6] text-slate-700"
            icon={faGithub}
          />
        </a>
      </footer>
    </>
  );
}

export default Footer;
