import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store, { persistor } from 'store';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </DndProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
