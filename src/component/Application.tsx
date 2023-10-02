
import React from 'react';
export const Application = () => {
    return (
        <>
            <h1>Form</h1>
            <h2>Job Application 1</h2>

            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder='FullName' value={"Avinash"} onChange={() => console.log("Hello")}/>
                </div>
                
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select name="" id="job-location">
                        <option value="">Select a Country</option>
                        <option value="IN">India</option>
                        <option value="US">USA</option>
                        <option value="AU">Australia</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" id="forms"/> I agree to terms and conditions
                    </label>
                </div>
                <button>Submit</button>
                <button>Reset</button>
            </form>
            <p>This is my form testing</p>
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="This is dummy image" />

            <span title='Dummy Title'>Dummy</span>

            <div data-testid="custom html element">Custom HTML Element</div>
        </>
    )
}
