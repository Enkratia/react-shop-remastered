import * as React from "react";
import type { SVGProps } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 15"
    {...props}
  >
    <path
      d="M7 1.666a2.333 2.333 0 1 0 0 4.667 2.333 2.333 0 0 0 0-4.667ZM3.335 4a3.667 3.667 0 1 1 7.333 0 3.667 3.667 0 0 1-7.333 0Z"
      clipRule="evenodd"
    />
    <path d="M3.07 9.666c-.462 0-.824.225-.97.549-.203.447-.387.98-.43 1.486-.02.225.074.392.204.473.686.426 2.276 1.159 5.127 1.159 2.85 0 4.44-.733 5.126-1.16.13-.08.224-.247.204-.473-.043-.505-.227-1.038-.43-1.485-.146-.324-.508-.549-.97-.549H3.07ZM.885 9.664c.406-.894 1.31-1.331 2.185-1.331h7.861c.874 0 1.78.437 2.185 1.331.232.513.482 1.203.544 1.922.056.655-.216 1.339-.83 1.72-.902.56-2.736 1.36-5.83 1.36-3.093 0-4.927-.8-5.83-1.36-.613-.381-.885-1.065-.829-1.72.062-.719.312-1.409.544-1.922Z" />
  </svg>
);
export default SvgPerson;
