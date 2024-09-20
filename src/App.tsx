import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
