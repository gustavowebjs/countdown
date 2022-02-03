import { shallow } from 'enzyme';
import Label from '../components/Label';

describe('Label Component', () => {
  it('Should Label component render correctly', () => {
    const wrapper = shallow(<Label text="Label" />);
    expect(wrapper.text()).toEqual('Label');
    expect(wrapper).toMatchSnapshot();
  });
});
