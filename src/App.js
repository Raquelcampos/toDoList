import React, { Component } from "react";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
export const UniversalStyle = createGlobalStyle`
*{
box-sizing: border-box;
padding:0;
margin:0;
background:bisque;
}`
export const Title= styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&display=swap');
font-family: 'Dancing Script', cursive;
font-size:2rem;
margin:10% 0px 15px 0px;
`
export const List= styled.div`
display: flex;
justify-content: space-around;
width:100%;
margin-top:5%;
button{
  border:none;
  background:lightcoral;
  border-radius:15px;
  width:15%;
  height:30px;
  cursor:pointer;
}
div{
  display: flex;
}
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Dancing+Script&display=swap');
p{
  font-family: 'Dancing Script', cursive;
  font-size:2rem; 
}
`
export const Main= styled.main`
margin:0 auto;
display: flex;
flex-direction: column;
align-items: center;
width:70%;
height:100vh;
background:bisque;

`
export const Enter= styled.section`
width:100%;
height:45px;
text-align: center;
input{
  width:60%;
  height:100%;
  background:white;
  border:none;
  border-radius:15px;
  font-size:1.5rem;
  text-align: center;
  outline: 0;
}
button{
  border:none;
  background:darksalmon;
  border-radius:15px;
  width:15%;
  height:100%;
  margin:0px 0px 0px 10px;
  cursor:pointer;
}
`
export default class App extends Component {
    state = {
      tasks: "",
      toDoList: []
    };
  
    handleChange = (event) => {
      this.setState({
        tasks: event.target.value
      });
    };
  
    add = () => {
      if(this.state.tasks!== "" && !this.state.tasks.match(/^[ \t]+$/)){
         this.setState({
          toDoList: this.state.toDoList.concat({
          tasks: this.state.tasks,
          id:Date.now()
        }),
        tasks:"",
      });  
      }
     
    };
    enter = (e) => {
      if (this.state.tasks.length > 0 && e.key === "Enter") {
        this.setState({
          toDoList: this.state.toDoList.concat({
            tasks: this.state.tasks,
            id: Date.now()
          }),
          tasks: ""
        });
      }
    };
    delet=(id)=>{
      this.setState({
          toDoList:this.state.toDoList.filter((item)=>{
              return item.id !==id;    
          })
      })
    }
  
    render() {
      return (
          <Main>
            <UniversalStyle/>
          <Title>Lista de Tarefas</Title>
          <Enter>
            <input onChange={this.handleChange} value={this.state.tasks} onKeyPress={this.enter}/>
            <button onClick={this.add}>Adicionar</button>
          </Enter>
          {this.state.toDoList.map((item) =>(
              <List key={item.id}>
                <div>
                 <input type="checkbox"/>
                  <p>{item.tasks}</p>
                </div>  
                  <button onClick={() => this.delet(item.id)}>Delet</button>
              </List>
          ))  }
  
      </Main>
      );
    }
  }