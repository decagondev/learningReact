const NameComponent = props => <h1>Hello my name is <span>{props.name}</span>.</h1>;

const AgeComponent = props => <p>I am <span>{props.age}</span> years old.</p>;

const LocationComponent = props => <p>I live in <span>{props.location}</span>.</p>;

const LinksComponent = props => {
    return (
        <div>
            <ul>
                <li><a href="https://www.github.com/decagondev/" target="_blank">Github</a></li>
                <li><a href="https://projects.decadev.co.uk/sandj/" target="_blank">Project Week UI</a></li>
                <li><a href="https://www.linkedin.com/in/top-tarpey-38594455/" target="_blank">Linkedin</a></li>
            </ul>
        </div>
    );
};

const HeaderComponent = props => {
    return (
        <div className="heading">
            <NameComponent name={props.name} />
            <AgeComponent age={props.age} />
            <LocationComponent location={props.location} />
            <LinksComponent />
        </div>
    );
};

ReactDOM.render(<HeaderComponent name="Tom" age={39} location="England" />, document.getElementById("root"));