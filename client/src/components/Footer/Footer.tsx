import { Github, Linkedin, CodeSlash } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="w-100 mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0">© 2023 Zair Bulos. All rights reserved.</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://github.com/ZairBulos/youtube-downloader" target="_blank">
                <CodeSlash color="white" size="24" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://github.com/ZairBulos" target="_blank">
                <Github color="white" size="24" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.linkedin.com/in/zair-bulos/" target="_blank">
                <Linkedin color="white" size="24" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;