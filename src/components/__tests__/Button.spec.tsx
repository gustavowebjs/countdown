import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button Component', () => {
  it('Should renders correctly', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
