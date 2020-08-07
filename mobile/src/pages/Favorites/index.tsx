import React from "react";
import { View, ScrollView } from "react-native";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import styles from "./styles";

export default function Favorites() {
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}
