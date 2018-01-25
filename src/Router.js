import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            titleStyle={{fontWeight: '400', alignSelf: 'center', borderWidth: 1, borderColor: 'white'}}
            title="Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            titleStyle={{fontWeight: '400', alignSelf: 'center', borderWidth: 1, borderColor: 'white'}}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            titleStyle={{fontWeight: '400', alignSelf: 'center', borderWidth: 1, borderColor: 'white'}}
            component={EmployeeCreate}
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            titleStyle={{fontWeight: '400', alignSelf: 'center', borderWidth: 1, borderColor: 'white'}}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
