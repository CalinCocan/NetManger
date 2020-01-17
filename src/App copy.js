import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <div class="out-frame">
        <header>
          Info header
        </header>
        <div class="continut">
          <nav>
            Navigation menu
          </nav>
          <main>
            Main application space
            <section>

            </section>
          </main>

        </div>
        <footer>
          Info footer
        </footer>
      </div>
    );
  }
}

export default App;
