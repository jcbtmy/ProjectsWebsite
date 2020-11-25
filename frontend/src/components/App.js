import React from 'react';
import ReactDOM, { render } from "react-dom";
import AboutMe from './AboutMe';
import {Contact} from './Contact';
import BootstrapNavBar from "./Nav";


import {
    BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom';



const SurfApp = React.lazy(() =>  import("./SurfApp") );
const MealApp = React.lazy(() =>  import("./MealApp") );
const ReadMe = React.lazy(() => import("./ReadMe") );
const TicTacToe = React.lazy(() => import("./TicTacToe"));
const ArticlesApp = React.lazy(() => import("./ArticlesApp"));

const routes = [
    {
        path: "/SurfApp",
        githref : "https://github.com/jcbtmy/SurfApp",
        name : "Surf App",
        readme_path : "/static/frontend/media/SurfApp/README.md",
        component : <SurfApp />
    },
    {
        path: "/TicTacToe",
        githref : "https://github.com/jcbtmy/Alpha-Beta-TicTacToe",
        name: "Alpha Beta TicTacToe",
        readme_path : "/static/frontend/media/TicTacToeApp/README.md",
        component : <TicTacToe />
    },
    {
        path: "/ArticlesApp",
        githref : "https://github.com/jcbtmy/ArticlesApp",
        name : "Article Organizer App",
        readme_path : "/static/frontend/media/ArticlesApp/README.md",
        component : <ArticlesApp />
    },
    {
        path : "/RecipeApp",
        githref : "https://github.com/jcbtmy/TheMealApp",
        name: "Recipe App",
        readme_path : "/static/frontend/media/MealApp/README.md",
        component : <MealApp />
    },
];



class Main extends React.Component{
    render(){
          return(
                <div className="app">
                    <Switch>
                        
                            <Route exact path="/" component={AboutMe}/>
                            {
                                routes.map((route) => {
                                    return(
                    
                                            <Route exact path={route.path} key={route.path} >
                                                    <ReadMe url={route.readme_path} githref={route.githref} />
                                                    {route.component}
                                            </Route>
                                    );
                                })
                            }
                            <Route exact path="/Contact" component={Contact}/>
                        </Switch>
                    </div>
              

          );
    }
}

class App extends React.Component {
    
   render() {
       return(
            
                <Router>
                    <BootstrapNavBar routes={routes}/>
                    <React.Suspense fallback={<h1></h1>} >
                        <Main />
                    </React.Suspense>
                </Router>
       );

   }
};

ReactDOM.render(<App />,  document.getElementById('page'));