import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <div className='logo'>My Website</div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>contact</li>
            </ul>
          </nav>
        </header>
        <section>
          <h1>Welcome To My Responsive Website</h1>
          <p>This design adopts that various screen sizes</p>
        </section>
        <footer>copyright @2025.Allrights reserved.</footer>
      </>
    )
  }
}
