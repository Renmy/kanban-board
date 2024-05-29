import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="flex justify-between items-center px-96 max-[1175px]:flex-col max-[1175px]:px-0 ">
        <p className="ml-10 max-[1175px]:mb-2">
          © Task-To-Go 2024. IronHack Mini Project
        </p>
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
