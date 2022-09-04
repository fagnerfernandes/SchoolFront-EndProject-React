import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Context } from './contexts/AuthContext';
import LoaderSpinner from './components/Core/LoaderSpinner';
import DefaultLayout from './layouts/Default';
import NotFound from './views/pages/NotFound';
import HomeIndex from './views/pages/Home/HomeIndex';
import WaitingListForm from './views/pages/WaitingList/WaitingListForm';

const CustomRoute = ({ ...rest }: any) => {
  const { loading }: any = useContext(Context);

  if (loading) {
    return <LoaderSpinner />;
  }

  const Layout = DefaultLayout;
  return <Route {...rest} render={() => <Layout></Layout>} />;
};

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/">
        <HomeIndex />
      </CustomRoute>

      <CustomRoute exact path="/waiting-list/:schoolId">
        <WaitingListForm />
      </CustomRoute>

      <Route component={NotFound} />
    </Switch>
  );
}
//react-qr-reader
//svgo
