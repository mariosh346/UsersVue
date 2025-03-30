import { describe, it, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import UserDropdown from "../UserDropdown.vue";
import { createTestingPinia } from '@pinia/testing';

describe('UserDropdown', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const createWrapper = () => shallowMount(UserDropdown, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn })]
    }
  });

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
