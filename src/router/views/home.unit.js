import Home from './home.vue'
import vue from 'vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const { element } = shallowMountView(Home)
    expect(element.textContent).toContain('Aplikasi Foreign Exchange Currency')
  })
})
