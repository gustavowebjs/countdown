import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
