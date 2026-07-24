import './style/Project.css'

function Project(props) {
    if (props.viewState == "Scrapbook") {
        return(
            <div className="project">
                <h2>{props.name}</h2>
            </div>
        );
    }
    
    return (
        <div className="project">
            <p>test text</p>
            <h2>{props.name}</h2>
        </div>
    );
}

export default Project;