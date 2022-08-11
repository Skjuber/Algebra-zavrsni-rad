import { useState } from "react";
import Button from "../utils/Button";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");

  const [avatar, setAvatar] = useState("👨‍🌾");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const avatarChangeHandler = (event) => {
    setAvatar(event.target.value);
  };

  const onSubmitUsernameHandler = () => {
    const enteredUsername = username;
    const enteredAvatar = avatar;

    if (enteredUsername.trim().length === 0) {
      alert("USERNAME CANNOT BE EMPTY!");

      return;
    }

    //e.preventDefault();
    // sruši se kad napravim ovo ;
    else props.onLogin(enteredUsername, enteredAvatar);
  };

  return (
    <div className="login">
      <div className="login__input ">
        <h5>Log In with your username </h5>

        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={usernameChangeHandler}
        />

        <select onChange={avatarChangeHandler}>
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
          <option value="🍀">🍀</option>
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
          <option value="🕸️">🕸️</option>
          <option value="🦂">🦂</option>
          <option value="🐨">🐨</option>
          <option value="🕷️">🕷️</option>
          <option value="🐗">🐗</option>
          <option value="🦥">🦥</option>
          <option value="🦩">🦩</option>
          <option value="🦜">🦜</option>
          <option value="🐣">🐣</option>
        </select>
        <Button onClick={onSubmitUsernameHandler}>Log In</Button>
      </div>
    </div>
  );
};

export default Login;
