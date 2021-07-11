import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Spinner } from '@ui-kitten/components';
import { observer, inject } from 'mobx-react';
import { AuthScreenProps } from '../../types/navigation';
import { IAuthStore } from '../../types/store';
import { ILanguage } from '../../types';

const ChooseLanguageScreen: React.FC<AuthScreenProps> = ({
  navigation,
  authStore,
}) => {
  const {
    user,
    languages,
    isLoading,
    choosenLanguage,
    setChoosenLanguage,
    setLanguage,
    getLanguages,
  } = authStore;

  React.useEffect(() => {
    getLanguages();
  }, []);

  const onChange = (language: ILanguage) => {
    setChoosenLanguage(language);
  };

  const LoadingIndicator = () => (
    <View>{isLoading.language && <Spinner status="basic" size="small" />}</View>
  );
  const handleNext = () => {
    if (!choosenLanguage) return;
    setLanguage(user.id, choosenLanguage.id);
    navigation && navigation.navigate('ChooseCountScreen');
  };

  if (languages.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} category="h4">
        Изучаемый язык
      </Text>
      <Text style={styles.textLanguage}>
        {choosenLanguage && choosenLanguage.name}
      </Text>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.ingContainer,
            choosenLanguage?.id === languages[0].id && styles.isActive,
          ]}
          onTouchStart={() => onChange(languages[0])}
        >
          <Image
            style={styles.image}
            source={require('../../assets/images/ing_flag.jpg')}
          />
          <Text>{languages[0].name.split(' ')[0]}</Text>
        </View>
        <View
          style={[
            styles.cheContainer,
            choosenLanguage?.id == languages[1].id && styles.isActive,
          ]}
          onTouchStart={() => onChange(languages[1])}
        >
          <Image
            style={styles.image}
            source={require('../../assets/images/che_flag.jpg')}
          />
          <Text>{languages[1].name.split(' ')[0]}</Text>
        </View>
      </View>
      <Text style={{ textAlign: 'center', marginBottom: 12 }}>
        Выберите нужный язык, нажав на соответсвующий флаг
      </Text>
      <Button
        size="large"
        onPress={handleNext}
        accessoryLeft={LoadingIndicator}
      >
        Далее
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 44,
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginHorizontal: 24,
    marginBottom: 12,
  },
  textTitle: {
    marginVertical: 12,
    textAlign: 'center',
  },
  textLanguage: {
    fontSize: 20,
    textAlign: 'center',
  },
  ingContainer: {
    alignItems: 'center',
    opacity: 0.25,
  },
  cheContainer: {
    alignItems: 'center',
    opacity: 0.25,
  },
  isActive: {
    opacity: 1,
  },
});

export default inject((authStore: IAuthStore) => authStore)(
  observer(ChooseLanguageScreen),
);
