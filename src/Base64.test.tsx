import Base64 from "./Base64";
import {shallow} from 'enzyme';

describe('test Base64 component', () => {
    test('expected elements are rendered', () => {
        const wrapper = shallow(<Base64 />);
        expect(wrapper.find('#text-input')).toExist();
        expect(wrapper.find('#encoding-select')).toExist();
        expect(wrapper.find('#encoding-select')).toHaveValue('_UTF-8');
        expect(wrapper.find('#encode-lines')).toExist();
        expect(wrapper.find('#encode-lines')).not.toBeChecked();
        expect(wrapper.find('#wrap-output')).toExist();
        expect(wrapper.find('#wrap-output')).not.toBeChecked();
        expect(wrapper.find('#base64-output')).toExist();
    });
});