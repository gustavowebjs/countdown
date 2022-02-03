import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../components/Button';

describe('Button Component', () => {
  it('Should button component render correctly', () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.text()).toEqual('Test');
    expect(wrapper).toMatchSnapshot();
  });

  it('Should button clicks work correctly', () => {
    const onButtonClick = sinon.spy();

    const wrapper = shallow(
      <Button className="button" onClick={onButtonClick}>
        Test
      </Button>
    );

    wrapper.find('.button').simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
    expect(wrapper).toMatchSnapshot();
  });
});
