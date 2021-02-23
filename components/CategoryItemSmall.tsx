import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

interface IProps {
  item: {
    id: number;
    title: string;
    cover: any;
  };
}

const CategoryItemSmall: React.FC<IProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.cover} style={styles.image} />

      <View style={styles.rightSide}>
        <Text style={styles.title}>{item.title}</Text>

        <View>
          <Text>8 из 151 слов</Text>
          <Progress.Bar
            progress={0.3}
            width={100}
            color="rgba(20, 204, 96, 1)"
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    marginLeft: 30,
    borderRadius: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
  },
  rightSide: {
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: 160,
    padding: 16,
    borderBottomRightRadius: 24,
    borderTopRightRadius: 24,
  },
  title: { fontWeight: 'bold', color: '#000000' },
});

export default CategoryItemSmall;
