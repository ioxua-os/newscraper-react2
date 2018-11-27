import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "tachyons/css/tachyons.min.css";

const MenuOption = ({ title }) => (
  <a
    class="link dim dark-gray f6 f5-l dib mr3 mr4-l"
    href="#"
    title={{ title }}
  >
    {title}
  </a>
);
const Menu = () => (
  <div className="helvetica db dt-l w-100 border-box pa3 ph5-l">
    <a
      className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
      href="#"
      title="Home"
    >
      <img
        src="http://tachyons.io/img/logo.jpg"
        class="dib w2 h2 br-100"
        alt="Site Name"
      />
    </a>
    <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <MenuOption title="Login" />
      <MenuOption title="Lorem" />
    </div>
  </div>
);

function App() {
  return <Menu />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
