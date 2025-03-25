import React from "react";
import ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.querySelector("#root"));

const HeaderFn = () => <header style={{color: 'red'}}>Moja pierwsza strona w React Fn</header>;

class HeaderCl extends React.Component {
  render() {
    return <header style={{color: 'green'}}>Moja pierwsza strona w React Cl</header>;
  }
}

const App = () => {
  return (
    <div>
      <HeaderFn />
      <HeaderCl />
    </div>
  );
};

root.render(<App />);
