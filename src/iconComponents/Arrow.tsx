import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 8"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M7.862.528c.26-.26.682-.26.943 0l3 3c.26.26.26.683 0 .943l-3 3a.667.667 0 1 1-.943-.943l1.862-1.862H.667a.667.667 0 0 1 0-1.333h9.057L7.862 1.471a.667.667 0 0 1 0-.943Z" />
  </svg>
);
export default SvgArrow;
