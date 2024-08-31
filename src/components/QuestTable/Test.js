'use client';


export default function Test({ object }) {

    return(
        <div>
            <details name="test-details">
                <summary className="question-list" ><h2 className="question-list">{object.question}</h2></summary>
                <p className="py-2 gradient p-2">{object.answer}</p>
            </details>
        </div>
    )
}