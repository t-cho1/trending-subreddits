import * as styledComponents from 'styled-components'

const {
  default: styled,
  keyframes
} = styledComponents

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export { fadeIn }
export default styled
