import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";
import AsyncStorage from "@react-native-community/async-storage";

export default function Favorites() {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    AsyncStorage.getItem("favorites").then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {favorites.map(teacher => {
          return <TeacherItem key={teacher.id} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </View>
  );
}
