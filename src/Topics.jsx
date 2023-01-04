import React from 'react'
import {useState} from 'react'

import Search from './Search'
import Code from './Code'

export default function Topics() {
  const [isShow, setIsShow] = useState(false);
  const [topic, setTopic] = useState('');
  
  return (
    <>
      <div className="topic-container">
        <button className={topic == "array" ? "topic-tag active-topic" : "topic-tag"} id="topic-array" onClick={() => {
          setIsShow(true);
          setTopic('array');
        }}>Array</button>
        <button className={topic == "linkedlist" ? "topic-tag active-topic" : "topic-tag"} id="topic-list" onClick={() => {
          setIsShow(true);
          setTopic('linkedlist');
        }}>Linked List</button>
        <button className={topic == "tree" ? "topic-tag active-topic" : "topic-tag"} id="topic-tree" onClick={() => {
          setIsShow(true);
          setTopic('tree');
        }}>Tree</button>
        
        <button className={topic == "stack" ? "topic-tag active-topic" : "topic-tag"} id="topic-stack" onClick={() => {
          setIsShow(true);
          setTopic('stack');
        }}>Stack</button>
        
        <button className={topic == "queue" ? "topic-tag active-topic" : "topic-tag"} id="topic-queue" onClick={() => {
          setIsShow(true);
          setTopic('queue');
        }}>Queue</button>

        <button className={topic == "graph" ? "topic-tag active-topic" : "topic-tag"} id="topic-graph" onClick={() => {
          setIsShow(true);
          setTopic('graph');
        }}>Graph</button>
      </div>

      <Search topic = {topic}></Search>

      {
        isShow 
        ? <Code topic = {topic}/> 
        : <div className="welcome-text">Copy the snippets and paste on your main code...</div>
      }
    </>
  );
}