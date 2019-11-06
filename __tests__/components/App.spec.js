import App from '../../src/components/App/App';

describe('App component test', () => {
  it('contains a div element', () => {
    const component = shallow(<App />);
    expect(component.find('div')).toHaveLength(1);
  });
});
