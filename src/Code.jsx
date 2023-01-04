import React from 'react'
import Snippet from './Snippet'
import data from './data.json';

export default function Code(props) {
  
  let topic = props.topic;

  // console.log(topic, data[topic], data.topic);
  
  let obj = data[topic];

  return (
    <>
      <div className="code-container">
        {
          obj.map((a, index) => (
              <div className="" key={index}>
                <Snippet details={a}></Snippet>
              </div>
            )
          )
        }

      </div>
    </>
  )
}