import { describe, it, expect, beforeEach } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ErrorBanner from "../ErrorBanner.vue";

describe('ErrorBanner', () => {
  let wrapper: ReturnType<typeof shallowMount>;
  const message = 'Test error';
  const createWrapper = () => shallowMount(ErrorBanner, {
    props: { message }
  });

  beforeEach(() => {
    wrapper = createWrapper();
  });

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
