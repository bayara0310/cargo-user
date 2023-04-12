import '@/styles/globals.css'
import 'swiper/css';
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
    <>
      <ChakraProvider>
          <ToastContainer/>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
