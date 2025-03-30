import { describe, it, expect, beforeEach, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import LoginButton from "../login/LoginButton.vue";

vi.mock('../composables/useAuthFunctions', () => ({
  useAuthFunctions: () => ({
    signinPopup: vi.fn(() => Promise.resolve())
  })
}));

describe('LoginButton', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const createWrapper = () => shallowMount(LoginButton);

  beforeEach(() => {
    wrapper = createWrapper();
  });
  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
