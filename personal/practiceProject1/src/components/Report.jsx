import { useState } from 'react';
import style from './styles.module.css';

export default function ReportForm() {
    const [notes, setNotes] = useState("");
    const [submissionMessage, setSubmissionMessage] = useState("");

    const handleChange = (event) => {
        setNotes(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmissionMessage("Form Submitted");
        
    };
    

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label> Add your report here: 
                    <textarea value = {notes} onChange = {handleChange}/>
                </label>

            <input 
                type="submit" 
            />
            </form>
            <div className={style.messagePreviewContainer}>
                <p className={style.messagePreview}>Report Preview: {submissionMessage || notes}</p>
            </div>
        </div>
    )
};