import "./App.css";

import { MdClose } from "react-icons/md";
import { MdSend } from "react-icons/md";

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

      <div className="body">
        <div className="card01">
          <h3>Cecilia - 11:30</h3>
          <p>Tive uma ideia incrível para um projeto! 😍</p>
        </div>

        <div className="card02">
          <h3>Você - 11:32</h3>
          <p>Sério? Me conta mais.</p>
        </div>

        <div className="card03">
          <h3>Cecilia - 11:34</h3>
          <p>
            E se a gente fizesse um chat moderno e responsivo em apenas uma
            semana?
          </p>
        </div>

        <div className="card04">
          <h3>Você - 11:36</h3>
          <p>#boraCodar! 🚀</p>
        </div>

        <div class="box-input">
          <input type="text" placeholder="Digite sua mensagem"></input>
          <button className="send">
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
}
