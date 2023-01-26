import "./App.css";

import { MdClose } from "react-icons/md";

export default function App() {
  return (
    <div className="container">
      <div class="card-perfil">
        <div className="perfil">
          <div className="foto">
            <img src="Foto.png" alt="Foto de perfil" />
          </div>

          <div className="title">
            <h2>Cecilia Sassaki</h2>
            <h4>● Online</h4>
          </div>
        </div>

        <div class="icon">
          <MdClose />
        </div>
      </div>

      <div className="time">
        <h3>Hoje 11:30</h3>
      </div>
    </div>
  );
}
