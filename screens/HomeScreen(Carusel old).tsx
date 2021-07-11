import React, { useState } from 'react';
import { Dimensions, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import data from '../mockup';
import CategoryItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../components/CategoryItem/CategoryItem';
import CategoryItemSmall from '../components/CategoryItemSmall';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width * 0.85;

const HomeScreen = () => {
  const [categories, setCategories] = useState(data);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <LinearGradient
      colors={['#ffffff', '#F2F7FE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={CategoryItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(i) => {
          setSlideIndex(i);
        }}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categories[slideIndex].children}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={CategoryItemSmall}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverStyle: {
    width: '100%',
    height: ITEM_SIZE,
    resizeMode: 'cover',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

export default HomeScreen;
