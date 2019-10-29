import React from 'react';
import Container from '@material-ui/core/Container';
import 'typeface-roboto';
import Basiclayout from './containers/Basiclayout';
import Notification from './containers/Notification';
import Cardfactory from './components/Cardfactory';
import StringCarddata from './types/StringCarddata';
import { MultiStringcardContext } from './contexts/CardContexts';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <MultiStringcardContext.Provider value={[new StringCarddata(), new StringCarddata("Universe!", "Welcome")]}>
        <Notification />
        <Basiclayout />
        <Cardfactory />
      </MultiStringcardContext.Provider>
    </Container>
  );
}

export default App;
