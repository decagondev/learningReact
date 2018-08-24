const NameComponent = props => <h1>Hello my name is <span>{props.name}</span>.</h1>;

const AgeComponent = props => <p>I am <span>{props.age}</span> years old.</p>;

const LocationComponent = props => <p>I live in <span>{props.location}</span>.</p>;

const HeaderComponent = props => {
    return (
        <div className="heading">
            <NameComponent name={props.name} />
            <AgeComponent age={props.age} />
            <LocationComponent location={props.location} />
        </div>
    );
};

ReactDOM.render(<HeaderComponent name="Tom" age={39} location="England" />, document.getElementById("root"));