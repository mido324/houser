import React from 'react';
import Auth from './Components/Login/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
// import Step1 from './components/Step1/Step1'
// import Step2 from './components/Step2/Step2';
// import Step3 from './components/Step3/Step3';
// import Step4 from './components/Step4/Step4';
// import Step5 from './components/Step5/Step5';
import {HashRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';

export default(

    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        {/* <Route path='/step1' component={Step1}/>
        <Route path='/step2' component={Step2}/>
        <Route path='/step3' component={Step3}/>
        <Route path='/step4' component={Step4}/>
        <Route path='/step5' component={Step5}/> */}
    </Switch>

)
