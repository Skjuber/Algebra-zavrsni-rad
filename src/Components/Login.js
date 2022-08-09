import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");

  console.log(username);
  const [color, setColor] = useState("🦄");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    const enteredUsername = username;
    const enteredColor = color;

    if (enteredUsername.trim().length === 0) {
      alert("USERNAME CANNOT BE EMPTY!");

      return;
    }

    //e.preventDefault();
    // sruši se kad napravim ovo ;
    else console.log(enteredUsername);
    console.log(enteredColor);
    props.onLogin(enteredUsername, enteredColor);
  };

  return (
    <div className="login">
      <div className="login__input ">
        <h5>Log In with your username</h5>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={usernameChangeHandler}
        />

        <select onChange={colorChangeHandler}>
          <option value="👨‍🌾">👨‍🌾</option>
          <option value="👩‍🌾">👩‍🌾</option>
          <option value="👨‍⚕️">👨‍⚕️</option>
          <option value="👨‍🎓">👨‍🎓</option>
          <option value="👩‍🎓">👩‍🎓</option>
          <option value="👨‍🏫">👨‍🏫</option>
          <option value="👨‍⚖️">👨‍⚖️</option>
          <option value="🧑‍⚖️">🧑‍⚖️</option>
          <option value="👨‍🍳">👨‍🍳</option>
          <option value="👩‍🍳">👩‍🍳</option>
          <option value="👨‍🔧">👨‍🔧</option>
          <option value="👩‍🔧">👩‍🔧</option>
          <option value="👨‍💻">👨‍💻</option>
          <option value="👨‍🚀">👨‍🚀</option>
          <option value="👨‍🎨">👨‍🎨</option>
          <option value="👨‍✈️">👨‍✈️</option>
          <option value="👨‍🚒">👨‍🚒</option>
          <option value="👩‍🚒">👩‍🚒</option>
          <option value="👮">👮</option>
          <option value="👮‍♀️">👮‍♀️</option>
          <option value="💂‍♂️">💂‍♂️</option>
          <option value="💂‍♀️">💂‍♀️</option>
          <option value="🤱">🤱</option>
          <option value="👩‍🍼">👩‍🍼</option>
          <option value="👨‍🍼">👨‍🍼</option>
          <option value="🤰">🤰</option>
          <option value="👳‍♂️">👳‍♂️</option>
          <option value="👳‍♀️">👳‍♀️</option>
          <option value="🧕">🧕</option>
          <option value="👨‍🏭">👨‍🏭</option>
          <option value="👩‍🏭">👩‍🏭</option>
          <option value="👨‍💼">👨‍💼</option>
          <option value="👩‍💼">👩‍💼</option>
          <option value="👨‍🔬">👨‍🔬</option>
          <option value="👩‍🔬">👩‍🔬</option>
          <option value="🦄">🦄</option>
          <option value="🐀">🐀</option>
          <option value="🦁">🦁</option>
          <option value="🦊">🦊</option>
          <option value="🦝">🦝</option>
          <option value="💀">💀</option>
          <option value="🐶">🐶</option>
          <option value="🦓">🦓</option>
          <option value="🤖">🤖</option>
          <option value="🎅">🎅</option>
          <option value="🧝">🧝</option>
          <option value="☃️">☃️</option>
          <option value="😈">😈</option>
          <option value="👽">👽</option>
          <option value="👾">👾</option>
          <option value="🕵️">🕵️</option>
          <option value="👹">👹</option>
          <option value="🤡">🤡</option>
          <option value="🧙">🧙</option>
          <option value="🧛">🧛</option>
          <option value="🧞">🧞</option>
          <option value="🌚">🌚</option>
          <option value="👻">👻</option>
          <option value="🎃">🎃</option>
          <option value="👨‍🎤">👨‍🎤</option>
          <option value="👩‍🎤">👩‍🎤</option>
          <option value="🍕">🍕</option>
          <option value="🏴">🏴</option>
          <option value="🗽">🗽</option>
          <option value="🤿">🤿</option>
          <option value="🥶">🥶</option>
          <option value="🏂">🏂</option>
          <option value="✝️">✝️</option>
          <option value="🏴‍☠️">🏴‍☠️</option>
          <option value="👅">👅</option>
          <option value="🕴️">🕴️</option>
          <option value="🏄‍♂️">🏄‍♂️</option>
          <option value="🤹‍♂️">🤹‍♂️</option>
          <option value="🤹‍♀️">🤹‍♀️</option>
          <option value="🏀">🏀</option>
          <option value="⚽">⚽</option>
          <option value="🤵">🤵</option>
          <option value="👰">👰</option>
          <option value="🎩">🎩</option>
          <option value="💐">💐</option>
          <option value="💰">💰</option>
          <option value="♟️">♟️</option>
          <option value="🥋">🥋</option>
          <option value="🎤">🎤</option>
          <option value="🥳">🥳</option>
          <option value="🌟">🌟</option>
          <option value="🎎">🎎</option>
          <option value="🔮">🔮</option>
          <option value="📿">📿</option>
          <option value="📚">📚</option>
          <option value="💶">💶</option>
          <option value="💵">💵</option>
          <option value="🐢">🐢</option>
          <option value="🦖">🦖</option>
          <option value="🦕">🦕</option>
          <option value="🐲">🐲</option>
          <option value="🐍">🐍</option>
          <option value="🐊">🐊</option>
          <option value="🦍">🦍</option>
          <option value="🦧">🦧</option>
        </select>

        <button onClick={onSubmitUsernameHandler} className="LoggedInButton">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
