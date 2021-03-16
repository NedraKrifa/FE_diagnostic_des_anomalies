import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import Profile from '../Pages/Profile/Profile';
import QuestionsList from '../Pages/QuestionsList/QuestionsList'
import Tags from '../Pages/Tags/Tags';
import QuestionAnswer from '../Pages/QuestionAnswer/QuestionAnswer';
import Login from '../Pages/Login/Login'
import Users from '../Pages/Users/Users';
import QuestionsTag from '../Pages/QuestionsTag/QuestionsTag';
import SearchResults from '../Pages/SearchResults/SearchResults';
import QuestionForm from '../Pages/QuestionForm/QuestionForm';
import PrivateRoute from "./PrivateRoute";
export default function Routes() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/questions' component={QuestionsList} />
                <PrivateRoute exact path='/tags' component={Tags} />
                <PrivateRoute exact path='/users' component={Users} />
                <PrivateRoute exact path='/questions/:id' component={QuestionAnswer} />
                <PrivateRoute exact path='/questions/search' component={SearchResults} />
                <PrivateRoute exact path='/users/:id' component={Profile} />
                <PrivateRoute exact path='/tags/:tagname' component={QuestionsTag} />
                <PrivateRoute exact path='/add/question' component={QuestionForm} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}
