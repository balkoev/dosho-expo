import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Dimensions.get('window').height * 0.5;

interface IProps {
  item: {
    id: number;
    title: string;
    cover: any;
    children: {
      id: number;
      title: string;
      cover: any;
    }[];
  };
}

const CategoryItem: React.FC<IProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.cover} style={styles.image}></Image>
      <View style={styles.bottom}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.progressWrapper}>
          <Text style={styles.progressText} numberOfLines={1}>
            8 из 151 слов
          </Text>
          <Progress.Bar progress={0.3} width={120} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,

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
    width: ITEM_WIDTH,
    height: '75%',
    resizeMode: 'cover',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  bottom: {
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
    height: '25%',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  progressWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: { fontSize: 16, color: '#000000' },
});

export default CategoryItem;
