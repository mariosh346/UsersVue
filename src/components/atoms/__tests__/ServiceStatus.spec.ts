import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ServiceStatus from "../ServiceStatus.vue";

describe('ServiceStatus', () => {
  const createWrapper = (props: Record<string, unknown>) =>
    shallowMount(ServiceStatus, { props });

  it('matches snapshot for active false', () => {
    const wrapper = createWrapper({ active: false });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
