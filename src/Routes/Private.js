import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import QuestionsList from '../Pages/QuestionsList/QuestionsList'
import Tags from '../Pages/Tags/Tags';
import QuestionAnswer from '../Pages/QuestionAnswer/QuestionAnswer';
import Users from '../Pages/Users/Users';
import Moderation from "../Pages/Moderation/Moderation";
import Administration from "../Pages/Administration/Administration";
import QuestionsTag from '../Pages/QuestionsTag/QuestionsTag';
import SearchResults from '../Pages/SearchResults/SearchResults';
import QuestionForm from '../Pages/QuestionForm/QuestionForm';
import { loadUser } from '../Redux/actions/Auth/authActions';
import { getTopTags } from "../Redux/actions/Tags/tagsActions";
import { getMembers } from "../Redux/actions/Users/usersActions";
import { useDispatch } from "react-redux";

export default function Private() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(loadUser()), [dispatch]);
  useEffect(() => dispatch(getTopTags()), [dispatch]);
  useEffect(() => dispatch(getMembers()), [dispatch]);
    return (
        <Switch>
          <Route exact path="/private" component={Home} />
          <Route exact path="/private/questions" component={QuestionsList} />
          <Route exact path="/private/tags" component={Tags} />
          <Route exact path="/private/users" component={Users} />
          <Route exact path="/private/moderation" component={Moderation} />
          <Route exact path="/private/administration" component={Administration} />
          <Route
            exact
            path="/private/questions/question/:id"
            component={QuestionAnswer}
          />
          <Route
            exact
            path="/private/questions/search"
            component={SearchResults}
          />
          <Route exact path="/private/users/:id" component={Profile} />
          <Route exact path="/private/questions/tags/:tagname" component={QuestionsTag} />
          <Route exact path="/private/add/question" component={QuestionForm} />
        </Switch>
    );
}
