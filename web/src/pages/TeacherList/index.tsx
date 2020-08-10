import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";
import Loading from "../../components/Loading";

interface Teacher {
  id: number;
  subject: string;
  cost: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

const week_days = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");
  const [responseMessage, setResponseMessage] = useState(
    "Preencha o formulário para encontrar um Proffy."
  );

  const [isLoading, setIsLoading] = useState(false);

  const [classes, setClasses] = useState<Teacher[]>([]);

  useEffect(() => {
    async function searchTeachers() {
      setIsLoading(true);
      await api
        .get("classes", {
          params: {
            subject,
            week_day,
            time,
          },
        })
        .then(response => {
          if (response.data.length <= 0) {
            setResponseMessage(
              `Nenhum Proffy de ${subject} disponível na ${
                week_days[Number(week_day)]
              } às ${time}, tente mudar o dia ou a hora.`
            );
          }

          setClasses(response.data);
          setIsLoading(false);
        })
        .catch(err => {
          setResponseMessage(
            "Desculpa, houve algum erro, atualize a página e se o erro persistir nos reporte o problema."
          );
          setIsLoading(false);
        });
    }

    if (subject !== "" && week_day !== "" && time !== "") {
      searchTeachers();
    }
  }, [subject, week_day, time]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Física", label: "Física" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Química", label: "Química" },
              { value: "Português", label: "Português" },
              { value: "Matemática", label: "Matemática" },
              { value: "Geografia", label: "Geografia" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
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
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {isLoading ? (
          <div id="loading">
            <Loading loadingWidth="6rem" />
          </div>
        ) : classes.length > 0 ? (
          classes.map(({ id, name, subject, avatar, bio, cost, whatsapp }) => (
            <TeacherItem
              id={id}
              key={id}
              name={name}
              subject={subject}
              avatar={avatar}
              cost={cost}
              whatsapp={whatsapp}
              bio={bio}
            />
          ))
        ) : (
          <p id="response-message">{responseMessage}</p>
        )}
      </main>
    </div>
  );
};

export default TeacherList;
