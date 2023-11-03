import "./App.css";
import React, { useState } from 'react';
function App() {
const[formData,setFormData] =useState({
  firstName:"",lastName:"",email:"",country:"India",streetAddress:"",city:"",state:"",postalCode:"",comments:false ,candidates:false,offers:false,pushNotifications:""
})

function changeHandler(event){
const{name , value,checked,type} =event.target;
setFormData((prev)=>({...prev,[name]:type=="checkbox"?checked:value}))
}

function submiteHandler(event){
  event.preventDefault();
  console.log("finally printing the value of form data");
  console.log(formData);

}

  return (
    <div className="flex flex-col items-center">
       <form onSubmit={submiteHandler}>

       <label htmlFor="firstName">FirstName</label>
       <br></br>
        <input type="text" 
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

<br></br>
<label htmlFor="lastName">LastName</label>
       <br></br>
      
        <input type="text" 
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />
       
       <br></br>
       <label htmlFor="email">E-mail</label>
       <br></br>
        <input type="text" 
          name="email"
          id="email"
          placeholder="love@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />
        <br></br>
 
<label htmlFor="country">Country</label>
<br></br>
<select
id="country"
name="country"
value={formData.country}
className="outline"
onChange={changeHandler}>
 <option>India</option> 
 <option>United States</option> 
 <option>Canada</option> 
 <option>Mexico</option> 
</select>
<br/>
<label htmlFor="streetAddress">streetAddress</label>
       <br></br>
      
        <input type="text" 
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

<br></br>

<label htmlFor="city">City</label>
       <br></br>
      
        <input type="text" 
          name="city"
          id="city"
          placeholder="Delhi"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
 <br/>

<label htmlFor="state">State</label>
<br></br>

<input type="text" 
  name="state"
  id="state"
  placeholder="Uttar Pradesh"
  value={formData.state}
  onChange={changeHandler}
  className="outline"
/>
        <br/>

        <label htmlFor="postalCode">postalCode</label>
       <br></br>
      
        <input type="text" 
          name="postalCode"
          id="postalCode"
          placeholder="208006"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />
        <fieldset>
          <legend>By Email</legend>

          <div className="flex flex-row">

          <input 
          type="checkbox"
          id="comments"
          name="comments"
          checked={formData.comments}
          onChange={changeHandler}
          ></input>


          <div>
          <label htmlFor="comments" >Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>
          </div>
          </div>

          <div className="flex flex-row">

          <input 
          type="checkbox"
          id="candidates"
          name="candidates"
          checked={formData.candidates}
          onChange={changeHandler}
          ></input>


          <div>
          <label htmlFor="candidates" >Candidates</label>
          <p>Get notified when a candidates applies for a job.</p>
          </div>
          </div>


          <div className="flex flex-row">

          <input 
          type="checkbox"
          id="offers"
          name="offers"
          checked={formData.offers}
          onChange={changeHandler}
          ></input>


          <div>
          <label htmlFor="offers" >Offers</label>
          <p>Get notified when a candidates accept or rejects an offer.</p>
          </div>
          </div>
        </fieldset>
<br></br>
        <fieldset>
          <legend>Push Notification</legend>
          <p>Thes are delivered via SMS to your mobile phones</p>

          <input 
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}>
          </input>
          <label htmlFor="pushEverthing">Everything</label>

          <br></br>
          <input 
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as email"
          onChange={changeHandler}>
          </input>
          <label htmlFor="pushEmail">Same as Email</label>

          <br></br>
          <input 
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No push Notifications"
          onChange={changeHandler}>
          </input>
          <label htmlFor="pushNothing">No push Notifications</label>
        </fieldset>

<button className="bg-blue-500 text-white font-bold rounded-md py-2 px-4">Save</button>
       </form>
    </div>
  );
}

export default App;
