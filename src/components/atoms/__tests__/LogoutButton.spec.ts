import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import LogoutButton from "../login/LogoutButton.vue"

// Replace jest.mock with vi.mock
vi.mock('../composables/useAuthFunctions', () => ({
  useAuthFunctions: () => ({
    signout: vi.fn(() => Promise.resolve())
  })
}))

describe('LogoutButton', () => {
  let wrapper: ReturnType<typeof shallowMount>
  const createWrapper = () => shallowMount(LogoutButton)

  beforeEach(() => {
    wrapper = createWrapper()
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
