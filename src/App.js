import jss from 'jss';
import jssPresetDefault from 'jss-preset-default';
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { NewUserInput } from './NewUserInput/NewUserInput';
import { UsersList } from './UsersList/UsersList';
import { useTestStyles } from './utils/useTestStyles';
import cn from 'classnames';

jss.setup(jssPresetDefault());

function App() {

  const [ height, setHeight ] = useState(100);
  const handleHeight = () => setHeight(height + 20);

  const classes = useTestStyles({ bg: 'red' });
  const classes2 = useTestStyles({ bg: 'blue', height: height });

  return (
    <div className="App">

      <div className={cn(classes.test, height > 200 && 'aoshdlashdoaho')}></div>
      <div className={classes2.test} onClick={handleHeight}></div>

      <BrowserRouter>

        <Route path="/" exact component={UsersList} />
        <Route path="/nuevo" component={NewUserInput} />

      </BrowserRouter>

    </div>
  );
}

export default App;
