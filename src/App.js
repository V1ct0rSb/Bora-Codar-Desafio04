import "./App.css";

import { MdClose } from "react-icons/md";
import { MdSend } from "react-icons/md";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1500, offset: 0 });
  }, []);

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

        <button class="icon">
          <MdClose />
        </button>
      </div>

      <div className="time">
        <h3>Hoje 11:30</h3>
      </div>

      <div className="body">
        <div className="card01" data-aos="fade-right">
          <h3>Cecilia - 11:30</h3>
          <p>Tive uma ideia incrível para um projeto! 😍</p>
        </div>

        <div className="card02" data-aos="fade-left" data-aos-delay="600">
          <h3>Você - 11:32</h3>
          <p>Sério? Me conta mais.</p>
        </div>

        <div className="card03" data-aos="fade-right" data-aos-delay="1200">
          <h3>Cecilia - 11:34</h3>
          <p>
            E se a gente fizesse um chat moderno e responsivo em apenas uma
            semana?
          </p>
        </div>

        <div className="card04" data-aos="fade-left" data-aos-delay="2200">
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
