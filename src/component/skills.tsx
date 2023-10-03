import { ISkills } from "@/types/skill.type";
import React, { useEffect, useState } from "react";

interface IProps {
  skill: ISkills[];
}
const Skills = ({ skill }: IProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Testing asynchronous queries
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 4000);
  }, []);
  return (
    <>
      <ul>
        {skill.map((skill: ISkills, ind: number) => {
          return (
            <div key={ind}>
              <li>{skill}</li>
            </div>
          );
        })}
      </ul>

      {isLoggedIn ? (
        <>
          <div>Hello There</div>
          <button onClick={() => setIsLoggedIn(false)}>Logged Out</button>
          <button onClick={() => console.log(false)}>Learning</button>
        </>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
