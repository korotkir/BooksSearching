// Необходимо написать тест, который покажет что компонент выводит действительно 30 компонентов Card

import BookList from './BookList'
import {render} from '@testing-library/react'

it(
  "BookList component should rendered 30 Card component",
  () => {
    render(<BookList />)
    expect(screen)
  }

)
