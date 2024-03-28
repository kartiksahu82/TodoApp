import React, { useState } from 'react'

function Todoitem({hn}) {

// const [todoname,settodoname]= useState();
// const [tododate,settododate]=useState();

// const handleclickname=(elm)=>{
//   settodoname(elm.target.value)
// }

// const handleclickdate=(elm)=>{
//  settododate(elm.target.value)
// }

// const handlebtnclick=()=>{
//   hn(todoname,tododate)
//   settodoname("")
//   settododate("")
// }

const [todoname,settodoname]=useState();
const [tododate,settododate]=useState();


const handleclickdate=(elm)=>{
  settododate(elm.target.value)
};

const handleclickname=(elm)=>{
  settodoname(elm.target.value)
}

const handlebtnclick=()=>{
  settododate("")
  settodoname("")
  hn(todoname,tododate)
}

;
return (
    <div>
        <div className='eql'>
        <input
          type="text" onChange={handleclickname} value={todoname}
         className='fstinput'
          placeholder="Add your Todo Task"
        />

        <input type="date"  className='fstinput' onChange={handleclickdate} value={tododate}/>
        <button onClick={handlebtnclick} className="rounded-lg hover:bg-zinc-100 color-black bottom-8 bg-green-500 p-4 btnadd">Add</button>
      </div>
    </div>
  )
}

export default Todoitem;
