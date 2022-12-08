import React, { useEffect, useState, useRef } from "react";
import "./styles/Chat2.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";

const Chatbox = (props) => {
  const [msgs, setMsgs] = useState([
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
  ]);
  const [messageArray, setMessageArray] = useState([
    {
      time: 10.1,
      sender: "manike",
      message: "noty gf",
      image:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    { time: 10.1, sender: "manike", message: "noty gf" },
    {
      time: 10.1,
      sender: "manike",
      message: "noty gf",
      image:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
  ]);
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [uploadPercentage, setUploadPercentage] = useState(0);
  ///const [socket, setSocket] = useState();
  const socket = useRef();
  const [val, setVal] = useState("");
  const [messages, setMessages] = useState([]);
  const [change, setChange] = useState(false);
  /*const catchMessage = () => {
    socket.current.on("chat message", (res) => {
      console.log(res);
    });
  };
  catchMessage();
  */
  useEffect(() => {
    //socket connection connect with backend
    const backEndURL = "https://ggh123.herokuapp.com";
    socket.current = io(backEndURL, {
      transports: ["websocket", "polling", "flashsocket"],
      reconnectionAttempts: 20,
      reconnectionDelay: 5000,
    });

    socket.current.on("chat message", (replyFromServer) => {
      //setMessages((rememeber) => [...rememeber, replyFromServer]);
      setMessages((prevState) => [...prevState, replyFromServer]);
      console.log(messages);
      setChange(Math.round(Math.random(1000)));
    });
  }, [change]);

  useEffect(() => {
    setMessageArray([
      { time: 10.1, sender: "Nethme", message: "Hello I am Nethmee .." },
      { time: 10.1, sender: "Nethme", message: "So,How I Help You ?" },
      {
        time: 10.1,
        sender: "Nethme",
        message: "Please Describe your issue ..?",
      },
    ]);
  }, []);

  const chatlist = messages.map((item, index) => {
    var side = "";
    return (
      <div style={{ display: "flex" }}>
        {side == "l" ? (
          <div style={{ flexDirection: "left" }}>
            <span
              className="irc-message message-highlight"
              style={{ "font-size": "18px" }}
              key={index}
            >
              <div className="irc-time">{item.time}</div>
              {item.sender} : {item.message}
            </span>
            <>
              {" "}
              {item.image ? (
                <div>
                  <img
                    width="100"
                    height="100"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
              ) : (
                ""
              )}
            </>
          </div>
        ) : (
          <div style={{ flexDirection: "right" }}>
            <span
              className="irc-message message-highlight"
              style={{ "font-size": "18px" }}
              key={index}
            >
              <div className="irc-time">{item.time}</div>
              {item.sender} : {item.message}
            </span>
            <>
              {" "}
              {item.image ? (
                <div>
                  <img
                    width="100"
                    height="100"
                    src={item.image}
                    alt={item.image}
                  />
                </div>
              ) : (
                ""
              )}
            </>
          </div>
        )}
      </div>
    );
  });

  /**
 *  <span className='irc-message message-highlight' style = {{'font-size' : '18px'}} key={index}>
                <div className = 'irc-time'>{item.time}</div>
                        {item.sender} : {item.message}
            </span>
 * const catchMessage = () => {
    socket.current.on('chat-message', (res) => {
         inputMsg(res,false) 
        //  setMessageArray([...messageArray, res]);
    });
 */

  function inputMsg(msg, emit) {
    setMessageArray([...messageArray, msg]);
    if (emit) {
      /**
        *  socket.current.emit('chat-message', {
            'message': msg.message,
            'sender': props.username,
            'time': msg.time
        });
        */
    } else {
      return;
    }
  }

  function sendMessage(event, type) {
    var today = new Date();
    let msg = {};
    if (type === "Enter") {
      if (event.key === "Enter") {
        if (val) {
          msg.message = val;
          msg.sender = "Nethme ";

          var currentTime =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
          msg.time = currentTime;

          socket.current.emit("chat message", msg);
          event.target.value = null;
        }
      }
    }

    if (type === "change") {
      if (event.target.value) {
        setVal(event.target.value);
        msg.message = event.target.value;
        event.target.value = null;
      } else {
        setVal(event.target.value);
      }
    }

    if (type === "button") {
      if (val) {
        let txt = document.getElementById("irc-Entrybox");
        console.log(txt.value);
        msg.message = txt.value || val;
        msg.sender = "Nethme ";

        var currentTime =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        msg.time = currentTime;
        socket.current.emit("chat message", msg);
      } else {
        alert("Please Enter Message..");
      }
    }
    if (msg.message) {
      msg.sender = "Nethmee";
      // msg.time =
      inputMsg(msg, true);
    }
  }

  //catchMessage();
  const onChangeImage = (e) => {
    /// debugger;
    /* setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setUploadedFile(e.target.files[0]);
    const reader = new FileReader(); 
    */
    const reader = new FileReader();
    //using file reader
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadedFile(reader.result);
        console.log(uploadedFile);
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.file[0]);
  };

  return (
    <div id="helper-section">
      <div id="irc-section">
        <div id="irc-message-container">
          <span className="irc-message">Welcome to your session!</span>
          {chatlist}
        </div>
        <input
          value={val}
          id="irc-Entrybox"
          /* onKeyPress={(e) => {
            sendMessage(e, "Enter");
          }}*/
          onChange={(e) => {
            sendMessage(e, "change");
          }}
          placeholder="Enter your message here..."
        />

        <div
          id="irc-sendButton"
          variant="contained"
          style={{
            margin: "0 auto",
            width: "300px",
            display: "flex",
            float: "left",
          }}
        >
          <input
            type="file"
            accept="image/*"
            className="custom-file-input"
            id="customFile"
            onChange={onChangeImage}
          />
          <Button
            id="irc-sendButton"
            variant="contained"
            style={{ margin: "0 auto", width: "100px" }}
            onClick={(e) => {
              sendMessage(e, "button");
            }}
          >
            Send
          </Button>
          <Button
            id="AR-button"
            onClick={(e) => {
                window.location.href = "/ImageUpload";
              }}
            >
          
            {" "}
            Open AR scanner
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
/**
 *        <div className="search-bar">
             <button className="search-btn">


             <SearchIcon/>
             </button>
         <input type="text" placeholder="search" />
         
        </div>

         <div className="text-1">
        <li className='img1'>

<img src ={photo}/>


</li>
<li className="textname">
 Hi

 </li>
 </div>
         <div className="text-send">
         <input type="text" placeholder="Enter your message here"id="message"/>
        
</div>
           
 */
