import React , { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
  const App =()=> {

  const Employes=[
    {
      id:"15",
      employeName:"Zia",
      age:25,
      gender:"Male", 
  },
  {
    id:"22",
    employeName:"Hira",
    age:20,
    gender:"Female", 
  },
  {
    id:"13",
    employeName:"Maaz",
    age:30,
    gender:"Male", 
  },
  {
    id:"30",
    employeName:"Hadi",
    age:40,
    gender:"Male", 
  }
    ];
    
  const [data,setData] = useState(Employes);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [formEntry,setFormEntry]=useState([]);

    const emailHandler = (e) => {
      setEmail(e.target.value);
    }
    const passwordHandler = (e) => {
      setPassword(e.target.value);
      }
    const formEntryHandler = (e) => {
      e.preventDefault();
      const formData ={email:email,password:password};
      setFormEntry([...formEntry,formData]);
      console.log(formEntry);
    }
 
    const clearDataHandler = () => {
      setData([]);
    }

 const delteDataHandler = (id) => {
   const newData = data.filter((curData)=>{
return curData.id !== id;

   });
   setData(newData);
   
 }


  // const [inputListData,setInputListData]=useState(" ");
  // const [items,setItems]=useState([]);

  // const itemEventHandler=(e)=>{
  //   setInputListData(e.target.value);
  // };
  // const addItemEventHandler=()=>{
  //   setItems((oldItems)=>{
  //     return [...oldItems,inputListData];
  //   });
  //   setInputListData("");
  //   };
  //     const delItemEventHandler=(id)=>{
  //       setItems((oldItems)=>{
  //         return oldItems.filter((arrElem, index)=>{
  //           return index !== id;
  //       });
  //     });
  //   };

  return (
    <>
    {
      data.map((allEmp)=>{
return(
  

  <div className='employe'>

  <h3 key={data.id}>
    ID: {allEmp.id}<br></br>
    Name: {allEmp.employeName}<br></br>
    Age: {allEmp.age}<br></br>
    Gender: {allEmp.gender}</h3>
    <button type='button' onClick={()=>delteDataHandler(allEmp.id)}>Delete</button>
       </div>

)})
    }
    
    {/* <div className="main">
      <h2 className="heading1">Todo List</h2>
     
    <input type="text" onChange={itemEventHandler} name="" id="" placeholder="Add todo here..."/>
       <button className="add-btn" onClick={addItemEventHandler}>&#10010;</button>
     <ol>
      
        {items.map((itemval,index)=>{
        return <TodoList
        key={index}
        id={index}
        text={itemval}
        onSelect={delItemEventHandler}
        />
        })}        
 
     
    </ol>
    </div> */}
      <button onClick={clearDataHandler}>Clear All Data</button>
 
    <form action='' onSubmit={formEntryHandler}> 
        <input type='text' value={email} onChange={emailHandler} name="email" id="email" placeholder='E-mail' autoComplete='off'></input>
        <input type='password' value={password} onChange={passwordHandler} name="password" id="password" placeholder='Password'></input>
        <button type='submit'>Login</button>
        <h4>User Entry</h4>

        {
    formEntry.map((curElem)=>{
      return(
                 <p> Name: {curElem.email} | Password: {curElem.password}</p>
              )
    })
  }
    </form>
  
    </>
  );
  }

export default App;
