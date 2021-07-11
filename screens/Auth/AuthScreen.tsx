import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon, Spinner } from '@ui-kitten/components';
import { observer, inject } from 'mobx-react';
import Constants from 'expo-constants';
import { IAuthStore } from '../../types/store';

const AppleIcon = (props: any) => <Icon {...props} name="apple" />;
const GmailIcon = (props: any) => <Icon {...props} name="google" />;
const FacebookIcon = (props: any) => <Icon {...props} name="facebook" />;
const VkontakteIcon = (props: any) => <Icon {...props} name="vk" />;

const AuthScreen: React.FC<{ authStore: IAuthStore }> = ({ authStore }) => {
  const skipAuth = () => {
    authStore.loginShadow(Constants.installationId);
  };
  const LoadingIndicator = () => (
    <View>{authStore.isLoading.skip && <Spinner size="small" />}</View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={require('../../assets/images/studying.png')}
        />
        <Text style={styles.text}>
          Dosho - помошник в изучении {'\n'}Ингушского и Чеченского языка
        </Text>
      </View>
      <Button size="large" style={styles.button} accessoryLeft={AppleIcon}>
        Войти с помощью Apple
      </Button>
      <Button size="large" style={styles.button} accessoryLeft={GmailIcon}>
        Войти с помощью Gmail
      </Button>
      <Button size="large" style={styles.button} accessoryLeft={FacebookIcon}>
        Войти с помощью Facebook
      </Button>
      <Button size="large" style={styles.button} accessoryLeft={VkontakteIcon}>
        Войти с помощью Vkontakte
      </Button>
      <Button
        size="large"
        appearance="outline"
        style={{ marginTop: 24 }}
        onPress={skipAuth}
        accessoryLeft={LoadingIndicator}
      >
        Пропустить регистарцию
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 20,
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
});

export default inject((authStore: IAuthStore) => authStore)(
  observer(AuthScreen),
);
