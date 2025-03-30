import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import BaseSelect from "../BaseSelect.vue";

describe('BaseSelect', () => {
  const options = [{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }];
  let wrapper: ReturnType<typeof shallowMount>;
  const createWrapper = () => shallowMount(BaseSelect, {
    props: {
      modelValue: 'a',
      options,
      label: 'Test Label'
    },
    global: {
      stubs: ['q-select']
    }
  });

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('renders and selects correct option', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
