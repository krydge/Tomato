import React, { useState } from 'react';

function Menu(props){
const[workTime, setWorkTime]= useState(null);
const[restTime, setRestTime] = useState(null);

const handleWorkTime = (e) => {
    setWorkTime(e.target.value);
}
const handleRestTime = (e) =>{
    setRestTime(e.target.valu)
}

    return (
    <form>
<label for="workTime">How long do you want each work round to last?:</label>
<input for="workTime" OnChange={handleWorkTime}></input>
<label for="restTime">How long do you want each rest round to last?:</label>
<input for="restTime" OnChange={handleRestTime}></input>

    </form>)

}