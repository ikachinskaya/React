import React, { useEffect, useReducer } from "react";
import reducer from "./reducer.js";

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, { messages: [], users: [] });

  useEffect(() => {
    fetch("/chat.json")
      .then((res) => res.json())
      .then((data) => {
        const action = {
          data,
          type: "DATA_RESPONSE_SUCCESS",
        };
        dispatch(action);
      });
  }, []);
  return (
    <div>
      {state.messages.map((msg) => {
        return (
          <div key={msg.id}>
            <p>{msg.user.name}</p>
            <p>{msg.body}</p>
            <p>{msg.createdAt.toString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
