import { shallow } from 'enzyme';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('Should Home Page render correctly', () => {
    const wrapper = shallow(<Home />);

    const startButton = wrapper.find('Button');
    expect(startButton.length).toEqual(1);

    const countdown = wrapper.find('CountDownTimer');
    expect(countdown.length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
