import * as React from 'react'
import styled from '../shared/style'

import { IOldRedditCheckboxProps } from '../shared/interfaces'

const CheckboxContainer = styled.div`
  text-align: center;
`

export default function OldRedditCheckbox({
  checked,
  handleCheckboxClick
}: IOldRedditCheckboxProps) {
  return (
    <CheckboxContainer>
      <label>
        <input type="checkbox" checked={checked} onChange={handleCheckboxClick} />
        Use Old Reddit (links will open in old reddit)
      </label>
    </CheckboxContainer>
  )
}
