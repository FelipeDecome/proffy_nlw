import React from "react";

import whatsIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {
  name: string;
  subject: string;
  avatar: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  name,
  subject,
  avatar,
  children,
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Diego Fernandes" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{children}</p>

      <footer>
        <p>
          Preço por hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
