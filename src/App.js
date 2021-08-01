import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './pages/Admin';
import Document from './pages/Admin/Document';
import Setting from './pages/Admin/Setting';
import { useSelector } from 'react-redux';
import Authenticate from './pages/Authenticate'
import Techer from './pages/Techer';
import Student from './pages/Student';
import NavigationBar from './components/shared/Navigation/NavigationBar'
import FormStudentRequest from './pages/Student/FormStudentRequest';
import TecherSetting from './pages/Techer/TecherSetting';

function App() {
  return (
    <BrowserRouter basename={'/petition-system'} >
      <div className="bg-gray-100 min-h-screen overflow-x-hidden py-2">
        <div className="container mx-auto">
          <header className="flex justify-center bg-yellow-300">
            <img src="/petition-system/Logo-sskru.jpg" alt="" width="70%" />
          </header>
          <Switch>
            <GuestRoute path="/" exact>
              <Authenticate />
            </GuestRoute>
            <AuthRoute>
              <NavigationBar />
              <AdminRoute path="/admin/manage-request">
                <Admin />
              </AdminRoute>
              <AdminRoute path="/admin/issue-document">
                <Document />
              </AdminRoute>
              <AdminRoute path="/admin/settings">
                <Setting />
              </AdminRoute>

              <StudentRoute path="/student/track">
                <Student />
              </StudentRoute>
              <StudentRoute path="/student/create">
                <FormStudentRequest />
              </StudentRoute>

              <TecherRoute path="/involved/process">
                <Techer />
              </TecherRoute>
              <TecherRoute path="/involved/alert">
                <TecherSetting />
              </TecherRoute>

            </AuthRoute>
            <Route path="/404">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuth, admin, student, techer } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (isAuth && admin && !student && !techer) {
          return <Redirect
            to={{
              pathname: '/admin/manage-request',
              state: { from: location },
            }}
          />
        } else if (isAuth && !admin && student && !techer) {
          return <Redirect
            to={{
              pathname: '/student/track',
              state: { from: location },
            }}
          />
        } else if (isAuth && !admin && !student && techer) {
          return <Redirect
            to={{
              pathname: '/involved/process',
              state: { from: location },
            }}
          />
        } else {
          return children
        }
      }}
    ></Route>
  );
};


const TecherRoute = ({ children, ...rest }) => {
  const { isAuth, techer } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth && techer ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
}

const AdminRoute = ({ children, ...rest }) => {
  const { isAuth, admin } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
}
const AuthRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
}
const StudentRoute = ({ children, ...rest }) => {
  const { isAuth, student } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth && student ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: location },
            }}
          />
        );
      }}
    ></Route>
  );
}
export default App;
