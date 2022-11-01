import React, { useState } from "react";

const Home = () => {
    let [state, newstate] = useState({temp:false, flag:true,calc:0});
    const ff1=(event)=>{
        event.preventDefault();
        newstate({value:event.target.imp.value,flag:false,temp:true,calc:state.calc+1});
        event.target[0].value="";
    }
    const remove=(event)=>{
        event.preventDefault();
        newstate({temp:false,flag:true});
    }
    if(state.flag===false)
    {
        window.localStorage.setItem(`${state.calc}`,state.value);
    }
    return (      
        <form className="dj card" onSubmit={ff1}>
            <textarea className="form-control" name="imp"></textarea>
            <button type={"submit"} className="btn btn-primary" >Add</button>
            <div className="todo"><div className="card">{state.flag===false?(state.value):""}</div></div>
            <button type={"button"} disabled={state.temp===true?false:true} className="btn btn-danger" onClick={remove}>Delete</button>
        </form>
    )
}
export default Home;