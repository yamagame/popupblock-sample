import React from "react";
import "./App.css";

const startMessage = "処理開始";
const blockMessage = "ポップアップがブロックされました。";
const endMessage = "処理終了";

const wait = (time = 5500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

function App() {
  const [message, setMessage] = React.useState("");
  const [targetUrl, setTargetUrl] = React.useState("");
  const [onlineMessage, setOnlineMessage] = React.useState("");
  const [onlineClass, setOnlineClass] = React.useState("");
  const [showButtons, setShowButtons] = React.useState("show");
  const [disableButtons, setDisableButtons] = React.useState(false);

  React.useEffect(() => {
    if (window.navigator.onLine) {
      setOnlineMessage("オンライン");
    } else {
      setOnlineMessage("オフライン");
    }
    const onOnline = (e) => {
      setOnlineMessage("オンライン");
    };
    const onOffline = (e) => {
      setOnlineMessage("オフライン");
    };
    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  React.useEffect(() => {
    if (onlineMessage === "オンライン") {
      setOnlineClass("online");
    } else {
      setOnlineClass("offline");
    }
  }, [onlineMessage]);

  React.useEffect(() => {
    if (message === startMessage) {
      setDisableButtons(true);
    } else {
      setDisableButtons(false);
    }
  }, [message]);

  const buttonCss = React.useMemo(
    () => `button ${disableButtons ? "disabled" : ""}`,
    [disableButtons]
  );

  const onClickOpenPopup = () => {
    window.open(targetUrl);
    setShowButtons("show");
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

  const onClick1SecondPopup = () => {
    setMessage(startMessage);
    setTimeout(() => {
      const win1 = window.open(targetUrl);
      if (!win1) {
        setMessage(`${blockMessage}(1)`);
      } else {
        win1.close();
        setMessage(endMessage);
      }
    }, 1500);
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

  const onClickDoubleWait5secPopup = () => {
    setMessage(startMessage);
    setTimeout(() => {
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
        }, 5500);
      }
    }, 5500);
  };

  const onClick5SecondOpenPopup = () => {
    setMessage(startMessage);
    setShowButtons("hidden");
    setTimeout(() => {
      setMessage("ポップアップを開いてください。");
    }, 5500);
  };

  const onOpenWindow = () => {
    console.log("click");
    const test = async () => {
      const value = "hello";
      await wait();
      return () => {
        return value;
      };
    };
    test().then(async (cb) => {
      await wait();
      console.log(cb());
    });
  };

  const onChange = (e) => setTargetUrl(e.target.value);

  return (
    <div>
      <div className="row">
        <div className="col border">
          <p className="label">オンライン・オフライン判定</p>
          <div className={onlineClass}>{onlineMessage}</div>
        </div>
      </div>
      <div className="row">
        <div className="col border">
          <p className="label">半角数字入力 対策あり</p>
          <input
            type="number"
            className="number"
            defaultValue="0"
            pattern="[0-9]"
            onKeyDown={(e) => {
              if (
                !e.ctrlKey &&
                !e.metaKey &&
                e.key.length === 1 &&
                !e.key.match(/^[0-9]$/)
              ) {
                e.preventDefault();
              }
            }}
            onInput={(e) => {
              var str = e.target.value;
              while (str.match(/[^0-9]/)) {
                str = str.replace(/[^0-9]/, "");
              }
              e.target.value = str;
            }}
            onBeforeInput={(e) => {
              if (e.data.length === 1 && !e.data.match(/^[0-9]$/)) {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col border">
          <p className="label">半角数字入力 対策なし</p>
          <input
            type="number"
            pattern="[0-9]"
            className="number"
            defaultValue="0"
          />
        </div>
      </div>
      <div className="row">
        <input
          className="input"
          type="text"
          onChange={onChange}
          value={targetUrl}
          placeholder="ポップアップページのURLを入力"
        />
      </div>
      <div className="row">
        <div className={buttonCss} onClick={onClickOpenPopup}>
          ポップアップを開く
        </div>
      </div>
      <div className={showButtons}>
        <div className="row">
          <div className={buttonCss} onClick={onClickOpenClosePopup}>
            ポップアップを開いて閉じる
          </div>
        </div>
        <div className="row">
          <div className={buttonCss} onClick={onClick1SecondPopup}>
            1.5秒待ち開いて閉じる
          </div>
        </div>
        <div className="row">
          <div className={buttonCss} onClick={onClick5SecondPopup}>
            5.5秒待ち開いて閉じる
          </div>
        </div>
        <div className="row">
          <div className={buttonCss} onClick={onClickDoublePopup}>
            2回開いて閉じる
          </div>
        </div>
        <div className="row">
          <div className={buttonCss} onClick={onClickDoubleWait5secPopup}>
            2回開いて閉じる(5秒待ち)
          </div>
        </div>
        <div className="row">
          <div className={buttonCss} onClick={onClickDoubleWaitPopup}>
            開いて閉じる(2回目だけ1秒待ち)
          </div>
        </div>
      </div>
      <div className="row">
        <div className={buttonCss} onClick={onClick5SecondOpenPopup}>
          5.5秒待ち問い合わせで開く
        </div>
      </div>
      <div className="row">
        <div className={buttonCss} onClick={onOpenWindow}>
          ウインドウを開く
        </div>
      </div>
      <div className="row">
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default App;
