function ChangeView(props) {
    if (props.viewState == "Scrapbook") {
        // document.getElementById('style').setAttribute('href', './style/List.css');
        return <p className="small text">click <button onClick={() => props.setViewFunc("Default")}>here</button> to view projects in a list</p>;
    }
    else {
        // document.getElementById('style').setAttribute('href', './style/Scrapbook.css');
        return <p className="small text">click <button onClick={() => props.setViewFunc("Scrapbook")}>here</button> to view projects in a shelf</p>;
    }
}

export default ChangeView;