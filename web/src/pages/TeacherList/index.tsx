import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";
import Input from "../../components/Input";
import Select from "../../components/Select";
const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Física", label: "Física" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Quimica", label: "Quimica" },
              { value: "Português", label: "Português" },
              { value: "Matemática", label: "Matemática" },
              { value: "Geografia", label: "Geografia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input type="time" name="time" label="Hora" />
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
