import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BaseBtn from "../BaseBtn.vue"

describe('BaseBtn', () => {
  let wrapper: ReturnType<typeof shallowMount>
  const createWrapper = () => shallowMount(BaseBtn, {
    global: {
      stubs: ['q-btn']
    }
  })

  beforeEach(() => {
    wrapper = createWrapper()
  })

  it('matches snapshot', async () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
