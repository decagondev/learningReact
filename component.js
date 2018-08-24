const MyHeader = props => {
return (
        <div className="content">
            <h1>Hello my name is <span>{props.name}</span></h1>
            <p>I am <span>{props.age}</span> years old.</p>
            <p>I live in <span>{props.location}</span></p>
        </div>
    ); 
};

const MyComponent = props => {
    console.log("Props: " + props);
return (
    <div className="heading">
        <MyHeader name={props.name} age={props.age} location={props.location} />
    </div>
    );
};
ReactDOM.render(<MyComponent name="Tom" age={39} location="England" />, document.getElementById('root'));