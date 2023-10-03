"use client";
import { Application } from "@/component/Application";
import Counter from "@/component/counter";
import CounterTwo from "@/component/counter-two";
import MUIMode from "@/component/mui-mode";
import Skills from "@/component/skills";
import Users from "@/component/user";
import UserComponent from "@/component/user-component";
import UserList from "@/component/user-list";
import React, { useCallback, useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <>
      <h1>Avinash Kokare</h1>
      <button>Click Me</button>

      <div>
        <label htmlFor="randomText">Enter the text</label>
        <input type="text" id="randomText" />
      </div>
      <div>
        <label htmlFor="name">Enter the Name</label>
        <input type="name" id="name" placeholder="name" />
      </div>

      <div>
        {showText && <span>This is my hidden text</span>}
        <br></br>
        <button onClick={() => setShowText(!showText)}>Show Text</button>
        <button
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 12000);
          }}
        >
          Asynchronous Click
        </button>

        <h1>This is my user details</h1>
        <UserComponent
          name="Avinash"
          userName="AvkNash"
          email="avi1999kokare@gmail.com"
          isEmailVarified={true}
        />
        <UserList />

        <h1>This is my aaplications</h1>
        <Application />

        <h1>This is my skill set</h1>
        <Skills skill={["HTML", "CSS"]} />

        <h1>Counter Component</h1>
        <Counter />

        <h1>Material UI</h1>
        <MUIMode />

        <h1>Mock Function</h1>
        <CounterTwo />

        <h1>Http API testing</h1>
        <Users />
      </div>
    </>
  );
}
