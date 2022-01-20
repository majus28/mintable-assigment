import App from 'layouts/App';
import LazyRoute from './LazyRoute';
import { Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LazyRoute page="Home" />} />
      </Route>
    </Routes>
  );
}

export default Router;
