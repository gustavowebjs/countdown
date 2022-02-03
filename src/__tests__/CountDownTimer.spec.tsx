import { shallow } from 'enzyme';
import CountDownTimer from '../components/CountDownTimer';

describe('CountDownTimer Component', () => {
  it('Should Countdown component render correctly', () => {
    const wrapper = shallow(
      <CountDownTimer speed={1000} timeFormat={{ minutes: 20, seconds: 0 }} />
    );
    expect(wrapper.text()).toEqual(' 20:00');
    expect(wrapper).toMatchSnapshot();
  });
});
