import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";
const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" name="week_day" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="time" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Diego Fernandes"
          subject="Química"
          avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
        >
          Entusiasta das melhores tecnologias de química avançada.
          <br /> <br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das
          pessoas através de experiências. Mais de 200.000 pessoas já passaram
          por uma das minhas explosões
        </TeacherItem>
      </main>
    </div>
  );
};

export default TeacherList;
