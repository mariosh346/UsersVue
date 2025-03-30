import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BaseInput from "../BaseInput.vue";

describe('BaseInput', () => {
  const inputProps = {
    modelValue: 'test',
    label: 'Input Label',
    rules: [],
    type: 'text'
  };
  let wrapper: ReturnType<typeof shallowMount>;
  const createWrapper = () => shallowMount(BaseInput, {
    props: inputProps,
    global: {
      stubs: ['q-input']
    }
  });

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('renders with a model value', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
