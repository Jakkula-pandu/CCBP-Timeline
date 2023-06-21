import {BrowserRouter, Route} from 'react-router-dom'

import About from './components/About'

import Contact from './components/Contact'

import Header from './components/Header'

import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </switch>
  </BrowserRouter>
)

export default App
