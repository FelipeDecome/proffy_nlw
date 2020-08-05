import React from "react";

import whatsIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

interface TeacherItemProps {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  id,
  name,
  subject,
  avatar,
  cost,
  whatsapp,
  bio,
}) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço por hora
          <strong>R${cost},00</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${whatsapp}`}
          type="button"
        >
          <img src={whatsIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
