import { shallowMount } from '@vue/test-utils'
import Home from '@/components/home.vue'

describe('Home.vue', () => {
  it('Menampilkan pesan ketika data sudah di submit', () => {
    const wrapper = shallowMount(Home)

    wrapper.find("#name").setValue("10.00")
    // wrapper.find("button").trigger("click")

    expect(wrapper.find("#name").val()).toBe("Thank You fulana")
  })
})
