import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, ScrollView, Text, TextInput, Picker } from "react-native";
import api from "../../services/api";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

export default function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState("");
  const [time, setTime] = useState("");

  const [classes, setClasses] = useState<Teacher[]>([]);

  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => teacher.id
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get("classes", {
      params: { subject, week_day, time },
    });

    setClasses(response.data);

    handleToggleFilterVisible();
  }

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeek_day(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />

                {/* <Picker selectedValue={week_day} style={styles.input}>
                  <Picker.Item label="Domingo" value="0" />
                  <Picker.Item label="Segunda-feira" value="1" />
                </Picker> */}
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        onScroll={() => (isFiltersVisible ? handleToggleFilterVisible() : "")}
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {classes.map(classItem => {
          return (
            <TeacherItem
              key={classItem.id}
              teacher={classItem}
              favorited={favorites.includes(classItem.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
