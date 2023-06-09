// Import the Provider component from the "@self.id/react" ibrary.
import { Provider } from '@self.id/react'

// Import the "global.css" file from the "@/styles" directory.
import '@/styles/globals.css'

// Define the App component as a default export.
export default function App({ Component, pageProps }) {

  // Render the Provider component, which provides authentication and and authorization functionality to the app.
  // Pass a client prop to the Provider component, which configures the Ceramic testnet with the "testnet-clay" value
  // Render the Component with its props inside the Provider component, which allows the app to access the authentication and authorization context.

  return (
    <Provider client={{ ceramic: "testnet-clay" }} >
      <Component {...pageProps} />
    </Provider>
  )
}
