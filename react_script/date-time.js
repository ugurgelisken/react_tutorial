const tickTock = () => {

    const generateDateTime = () => {
        return new Date().toLocaleTimeString() + "  " + new Date().toLocaleDateString();
    }

    const element = (
      <div>
        <hr />
        <p>{generateDateTime()}</p>
      </div>
    );

    ReactDOM.render(element, document.getElementById('date-time'));
    
  }
  
setInterval(tickTock, 1000);