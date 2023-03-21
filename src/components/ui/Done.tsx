import * as React from 'react'
import { SVGProps } from 'react'

const DoneSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5.934 10.758-2.347-2.35a.929.929 0 1 0-1.315 1.316l2.998 3a.938.938 0 0 0 1.328 0l7.13-7.136a.93.93 0 0 0-1.315-1.315l-6.479 6.485Z"
      fill="#fff"
    />
  </svg>
)

export default DoneSvg
