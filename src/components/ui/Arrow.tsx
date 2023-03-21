import { SVGProps } from 'react'

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.454 10.812a.9.9 0 1 1-1.108-1.418l4.096-3.203a.9.9 0 0 1 1.109 0l4.1 3.203a.9.9 0 1 1-1.108 1.418l-3.546-2.77-3.543 2.77Z"
      fill="#333"
    />
  </svg>
)

export default ArrowSvg
