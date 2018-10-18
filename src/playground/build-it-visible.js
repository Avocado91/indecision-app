let visibility = false;

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Some details go here</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();

