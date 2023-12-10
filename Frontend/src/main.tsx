import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreContext, store } from './stores/Store';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  </ChakraProvider>

)
