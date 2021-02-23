import React, { useEffect, useState } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import { Text, View } from '../components/Themed';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import data from '../mockup';
import CategoryItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../components/CategoryItem/CategoryItem';

const { width, height } = Dimensions.get('window');

interface ICatalogue {
  id: number;
  title: string;
  cover: string;
  children?: ICatalogue[];
}

const ITEM_SIZE = width * 0.85;

const HEIGHT = height;
const WIDTH = width;

const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const HomeScreen = () => {
  const [categories, setCategories] = useState([...data]);
  const [slideIndex, setSlideIndex] = useState(0);
  const colorScheme = useColorScheme();

  const Item = ({ item }: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          marginLeft: 30,
          // borderRadius: 24,
          borderWidth: 2,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image
          source={item.cover}
          style={{
            width: 120,
            height: 120,
            // borderBottomLeftRadius: 24,
            // borderTopLeftRadius: 24,
          }}
        />

        <View
          style={{
            backgroundColor: Colors[colorScheme].backgroundWhite,
            width: 160,
            padding: 16,
            // borderBottomRightRadius: 24,
            // borderTopRightRadius: 24,
          }}
        >
          <Text
            style={{ fontWeight: 'bold', color: Colors[colorScheme].textBlack }}
          >
            {item.title}
          </Text>
          <Text
            style={{ fontSize: 16, color: Colors[colorScheme].textBlack }}
            numberOfLines={1}
          >
            8 из 151 слов
          </Text>
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={[Colors[colorScheme].background, '#F2F7FE']}
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
        contentContainerStyle={{
          alignItems: 'center',
        }}
        renderItem={Item}
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
