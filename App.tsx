import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { FontAwesomeIconsPack } from './fontawesome-icons';
import Navigation from './navigation';
import { Provider } from 'mobx-react';
import RootStore from './store/RootStore';

const App: React.FC = () => {
  return (
    <>
      <IconRegistry icons={FontAwesomeIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <Provider rootStore={RootStore} authStore={RootStore.authStore}>
            <Navigation />
          </Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};
export default App;
