import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

//////////////////////////////////////

// class Tooltip extends React.Component {
//   render() {
//     // Write your code here
//     return <h1>{this.props.text}</h1>;
//   }
// }

// class App extends React.Component {
//   state = {
//     text: '',
//   };

//   onDocumentClick = (event) => {
//     if (event.target.tagName === 'BUTTON') {
//       this.setState({ text: event.target.textContent });
//     }
//   };

//   componentDidMount() {
//     document.addEventListener('click', this.onDocumentClick);
//   }
//   componentWillUnmount() {
//     document.removeEventListener('click', this.onDocumentClick);
//   }

//   render() {
//     return (
//       <div>
//         {this.props.children}
//         <Tooltip text={this.state.text} />
//       </div>
//     );
//   }
// }

// document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";
// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <App>
//     <button id='button1' onclick={Tooltip}>
//       First button
//     </button>
//     <button id='button2'>Second button</button>
//   </App>,
//   rootElement
// );
// document.getElementById('button2').click();
// setTimeout(() => console.log(document.body.innerHTML));

////////////////////////
