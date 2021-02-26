import React from "react";
import "./App.css";

const startMessage = "処理開始";
const blockMessage = "ポップアップがブロックされました。";
const endMessage = "処理終了";

function App() {
  const [message, setMessage] = React.useState("");
  const [targetUrl, setTargetUrl] = React.useState("");

  const onClickOpenPopup = () => {
    window.open(targetUrl);
  };

  const onClickOpenClosePopup = () => {
    setMessage(startMessage);
    const win1 = window.open(targetUrl);
    if (!win1) {
      setMessage(`${blockMessage}(1)`);
    } else {
      win1.close();
      setMessage(endMessage);
    }
  };

  const onClick5SecondPopup = () => {
    setMessage(startMessage);
    setTimeout(() => {
      const win1 = window.open(targetUrl);
      if (!win1) {
        setMessage(`${blockMessage}(1)`);
      } else {
        win1.close();
        setMessage(endMessage);
      }
    }, 5500);
  };

  const onClickDoublePopup = async () => {
    setMessage(startMessage);
    const win1 = window.open(targetUrl);
    win1?.close();
    if (!win1) {
      setMessage(`${blockMessage}(1)`);
    } else {
      const win2 = window.open(targetUrl);
      win2?.close();
      if (!win2) {
        setMessage(`${blockMessage}(2)`);
      } else {
        setMessage(endMessage);
      }
    }
  };

  const onClickDoubleWaitPopup = async () => {
    setMessage(startMessage);
    const win1 = window.open(targetUrl);
    win1?.close();
    if (!win1) {
      setMessage(`${blockMessage}(1)`);
    } else {
      setTimeout(() => {
        const win2 = window.open(targetUrl);
        win2?.close();
        if (!win2) {
          setMessage(`${blockMessage}(2)`);
        } else {
          setMessage(endMessage);
        }
      }, 1000);
    }
  };

  const onChange = (e) => setTargetUrl(e.target.value);

  return (
    <div>
      <div className="row">
        <input
          className="input"
          type="text"
          onChange={onChange}
          value={targetUrl}
          placeholder="プップアップページのURLを入力"
        />
      </div>
      <div className="row">
        <div className="button" onClick={onClickOpenPopup}>
          ポップアップを開く
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={onClickOpenClosePopup}>
          ポップアップを開いて閉じる
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={onClick5SecondPopup}>
          5.5秒待ち開いて閉じる
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={onClickDoublePopup}>
          2回開いて閉じる
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={onClickDoubleWaitPopup}>
          開いて閉じる(2回目だけ1秒待ち)
        </div>
      </div>
      <div className="row">
        <div>{message}</div>
      </div>
    </div>
  );
}

export default App;
