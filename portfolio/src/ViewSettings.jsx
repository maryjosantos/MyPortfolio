import Project from './Project';
import './style/Project.css'

function ViewSettings(props) {
    let divClass;
    if (props.viewState == "Scrapbook") {
        divClass = "scrapbook";
    }
    else {
        divClass = "list";
    }
    return (
        <div className={divClass}>
            <Project name="project 1" viewState={props.viewState} />
            <Project name="project 2" viewState={props.viewState} />
        </div>
    );
}

export default ViewSettings;