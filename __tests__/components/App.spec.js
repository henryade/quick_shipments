import App from '../../src/components/App/App';

describe('App component test', () => {
  it('contains a div element', () => {
    const component = mount(<App />);
    component.containsMatchingElement(<div>welcome to the Home page</div>);
  });
});
