import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreContext, store } from './stores/Store';
import Theme from './theme/Theme';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider  theme={Theme}>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  </ChakraProvider>

)
