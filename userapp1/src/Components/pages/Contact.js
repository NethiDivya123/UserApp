import React from "react";
const Contact=()=>{
    return(
        <div className='container'>
            <div className='py-5'>
                <h2>Contact Page</h2>
                <form>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">UserName</label>
  <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
</div> 
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">phone</label>
  <input type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></input>
</div>            
<button className='btn btn-primary'>Submit</button>
</form>
                </div>
            </div>

        
    )
}
export default Contact;