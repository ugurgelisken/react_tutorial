class Baslik extends React.Component {
    render() {
        return (
            <div>
                <h1>Merhaba React!</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Baslik />,
    document.getElementById('app')
);