import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store, { persistor } from 'store';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
