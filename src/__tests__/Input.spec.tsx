import { shallow } from 'enzyme';
import Input from '../components/Input';

describe('Input Component', () => {
  it('Should input component render correctly', () => {
    const wrapper = shallow(<Input className="input" placeholder="Email" />);

    expect(wrapper.find('.input').length).toEqual(1);
    expect(wrapper.find('.input').prop('placeholder')).toEqual('Email');
    expect(wrapper).toMatchSnapshot();
  });
});
