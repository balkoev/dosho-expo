import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  IndexPath,
  Button,
  Text,
  Select,
  SelectItem,
  Spinner,
} from '@ui-kitten/components';
import { observer, inject } from 'mobx-react';
import { AuthScreenProps } from '../../types/navigation';
import { IAuthStore } from '../../types/store';

const selectValues = [4, 5, 6, 7, 8];

const ChooseCountScreen: React.FC<AuthScreenProps> = ({ authStore }) => {
  const { user, isLoading, setCount } = authStore;
  const [choosenCount, setChoosenCount] = React.useState<number>();
  const [selectedIndex, setSelectedIndex] = React.useState<any>(
    new IndexPath(1),
  );

  React.useEffect(() => {
    setChoosenCount(selectValues[Number(selectedIndex) - 1]);
  }, [selectedIndex]);

  const handleNext = () => {
    if (!choosenCount) return;
    setCount(user.id, choosenCount);
  };

  const displayValue = () => {
    return selectValues[selectedIndex.row];
  };

  const LoadingIndicator = () => (
    <View>{isLoading.count && <Spinner status="basic" size="small" />}</View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} category="h4">
        Цель на день
      </Text>
      <Text style={styles.textCount}>{choosenCount}</Text>
      <Text style={styles.textWord}>слов</Text>
      <View style={styles.wrapper}>
        <Select
          size="large"
          style={{ flex: 1 }}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          label="Выберите число"
          value={displayValue()}
        >
          <SelectItem title="4" />
          <SelectItem title="5" />
          <SelectItem title="6" />
          <SelectItem title="7" />
          <SelectItem title="8" />
        </Select>
      </View>
      <Text style={{ textAlign: 'center', marginBottom: 12 }}>
        Установите в выпадающем списке сколько слов вы собираетесь учить в день
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
  textCount: {
    fontSize: 120,
    textAlign: 'center',
  },
  textWord: {
    textAlign: 'center',
    fontSize: 24,
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
  observer(ChooseCountScreen),
);
