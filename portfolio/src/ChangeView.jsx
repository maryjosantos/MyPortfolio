function ChangeView(props) {
    if (props.viewState == "Scrapbook") {
        return <p className="small text">click <button onClick={() => props.setViewFunc("Default")}>here</button> to view projects in a list</p>;
    }
    else {
        return <p className="small text">click <button onClick={() => props.setViewFunc("Scrapbook")}>here</button> to view projects in a shelf</p>;
    }
}

export default ChangeView;