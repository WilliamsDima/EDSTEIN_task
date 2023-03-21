import { SVGProps } from 'react'

const CloseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.552 2.448a.675.675 0 0 1 0 .954L6.955 6l2.597 2.598c.242.241.262.62.06.885l-.06.07a.675.675 0 0 1-.954 0L6 6.954 3.402 9.552a.675.675 0 0 1-.954-.954L5.045 6 2.448 3.402a.675.675 0 0 1-.06-.885l.06-.07a.675.675 0 0 1 .954 0L6 5.046l2.598-2.597a.675.675 0 0 1 .954 0Z"
      fill="#333"
    />
  </svg>
)

export default CloseSvg
