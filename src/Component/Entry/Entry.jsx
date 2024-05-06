import React,{useState} from 'react'

const Entry = () => {
  
   const [registerNumber,setRegisterNumber] = useState('');
   const inputHandle = (e) => {
    setRegisterNumber(()=>e.target.value);
   }
   const formSubmitHandler = (e) => {
      e.preventDefault();
      console.log(registerNumber)
      setRegisterNumber('')
   }
   return (
      <div className='login-container'>
         <form className='login-form' onSubmit={formSubmitHandler}>
            <div>
               <label htmlFor='regno'>Register No</label>
               <input 
               type='text' 
               placeholder='Ref/Reg No' 
               id='regno'
               onChange={inputHandle}
               required
               value={registerNumber}
               />
            </div>
           
            <div>
               <button type='submit' className='btn btn-login'>Add Entry</button>
            </div>
         </form>
      </div>
   )
}

export default Entry