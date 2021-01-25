import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
//  IMporting components
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // firebase will keep the user logged in even if he reloads the page
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        {/* path eshte thjesht rruga dmthn nis nga localhost pra nqs e leme thjesht / 
         dmthn qe i thua kur te jesh ne / pra ne fillim pas  localhost:3000 dua qe te renderizosh homePage component 
         exact eshte nje boolean value dhe pa exact Route do te renderizoje komponentin mjafton qe te path te jete i perfshire pra / te ekzistoje ska rendesi se ku .
         ndersa nese ti i jep exact ai do te renderizoje komponentin vetem kur te jete vetem pathi pa asgje tjt pra vetem /*}

        {/* Switch component ben te mundur qe ne kur brenda tij gjen nje Route component dhe ai route gjen nje path psh te paren 
         switch direkt do te renderizoje ate qe gjeti path-in dhe asnje tjt. pra sdo renderizohen componente te tjere aksidentalisht */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
