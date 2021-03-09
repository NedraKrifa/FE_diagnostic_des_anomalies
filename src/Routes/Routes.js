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

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/questions' component={QuestionsList} />
                <Route exact path='/tags' component={Tags} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/questions/:id' component={QuestionAnswer} />
                <Route exact path='/questions/search' component={SearchResults} />
                <Route exact path='/users/:id' component={Profile} />
                <Route exact path='/tags/:tagname' component={QuestionsTag} />
                <Route exact path='/add/question' component={QuestionForm} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}
