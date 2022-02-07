import React, { useState }  from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props){
   const [isExpanded, setIsExpanded] = useState(false);

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevValue) => {
            return {...prevValue, [name] : value};
        });
    }

    function handleSubmit(e){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    function handleExpansion(){
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded &&  
                (<input name="title" onChange={handleChange} value={note.title} type="text" placeholder="Title"/>) }
                <textarea name="content" onClick={handleExpansion} onChange={handleChange} value={note.content} rows={isExpanded ? 3 : 1} placeholder="Write note here..." />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleSubmit}>
                    <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )

}

export default InputArea;