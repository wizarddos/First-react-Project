import React, { useRef } from 'react';
import ReactDom from 'react-dom';

let messages =[
  {
    "title": "Lorem Ipsum", 
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit, ligula et vehicula vestibulum, massa ipsum fringilla felis, nec varius est ante at ante. Sed finibus, dolor eget accumsan elementum, mi elit mollis nulla, eu tincidunt augue massa vel dui. Praesent iaculis sem at odio suscipit, id elementum nisl lobortis. Aliquam volutpat commodo odio non pharetra. Etiam rhoncus feugiat justo at ullamcorper. Nullam venenatis dignissim leo, at aliquet magna vestibulum non. Maecenas pellentesque in felis vitae blandit.",
    "time": "10:37:07",

  },
  {
    "title": "Etiam rhoncus",
    "content": "eleifend. Aenean iaculis libero a consectetur dictum. Curabitur at enim ac mi euismod rhoncus. Vestibulum ante ipsum primis in faucibus ",
    "time": "15:21:53"
  },
  {
    "title": "feugiat justo",
    "content": "Nullam vitae massa sit amet felis ornare pulvinar. Nulla malesuada purus a consectetur sodales. Nunc eget molestie nulla.",
    "time": "18:45:32"
  },
  {
    "title": "at ullamcorper",
    "content": "Suspendisse mattis, erat sit amet ornare pulvinar, arcu massa sodales nulla, vestibulum pulvinar odio est tincidunt purus",
    "time": "20:59:01"
  },
  {
    "title": "Nullam venenatis",
    "content": "Ut in felis urna. Praesent nec posuere mi. Fusce aliquet, neque at tincidunt ultricies, eros augue hendrerit libero, sed rutrum metus enim a urna",
    "time": "01:13:46"
  }
  
];
export default function MessageForm(){
  const Formtitle = useRef();
  const Formcontent = useRef();
  const checkSubmit = e =>{
    e.preventDefault();
    const title = Formtitle.current.value;
    const content = Formcontent.current.value;
    ReactDom.render(
      <InsertedData messages = {messages} title = {title} content = {content} when = {new Date()}/>,
      document.getElementById("text")
      );
  }
    return(
      <>
      <form>
        <h1>Napisz wiadomość</h1>
        <input ref = {Formtitle} type = "text" placeholder="Tytuł"/><br/><br/>
        <textarea ref = {Formcontent} placeholder="Treść"></textarea><br/><br/>
        <input type = "button" value="wyślij" onClick = {checkSubmit}/>
      </form>
      </>
    );
}

export function InsertedData({title, content, when, messages}){
  return(
    <>
      <h2>Wpisałeś</h2>
      <p>tytuł: {title}</p>
      <p>terść: {content}</p>
      <p>O Godzinie: {when.toLocaleTimeString()}</p>
      <br/><br/>
      <h2>Pozostałe Wiadomości</h2>
      <ul>
        {
          messages.map((message, i) => {
            return(
            <Message key = {i} {...message} />
            );
          })
        }
      </ul>
    </>
  );
}

export function Message({title, content, time, key}){
  return(
    <>
      <li id = {key}>
        <p>tytuł: {title}</p>
        <p>terść: {content}</p>
        <p>O Godzinie: {time}</p>
      </li>
    </>
  );
}