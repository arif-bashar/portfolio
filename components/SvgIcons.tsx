import * as React from 'react'

export function XButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M11.25 3.75l-7.5 7.5M3.75 3.75l7.5 7.5"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LeftArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{ marginRight: 6 }}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="#504CFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={13} height={13} viewBox="0 0 13 13" fill="none" {...props}>
      <g
        opacity={0.4}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.292 5.958H2.708c-.598 0-1.083.485-1.083 1.084v3.791c0 .599.485 1.084 1.083 1.084h7.584c.598 0 1.083-.485 1.083-1.084V7.042c0-.599-.485-1.084-1.083-1.084zM3.792 5.958V3.792a2.708 2.708 0 015.416 0v2.166" />
      </g>
    </svg>
  )
}

export function RightArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <g
        opacity={0.3}
        stroke="#504CFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </g>
    </svg>
  )
}

export function Droplet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={34} height={67} viewBox="0 0 34 67" fill="none" {...props}>
      <g filter="url(#prefix__filter0_i)">
        <path
          d="M34 45.213C34 57.246 26.389 67 17 67S0 57.246 0 45.213C0 33.181 7.611 0 17 0s17 33.18 17 45.213z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_i"
          x={0}
          y={0}
          width={34}
          height={71}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  )
}

export function Puddle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={320} height={48} viewBox="0 0 320 48" fill="none" {...props}>
      <ellipse cx={160} cy={24} rx={160} ry={24} fill="#221C47" />
    </svg>
  )
}

export function DotGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)" fill="#D2D6DB">
        <circle cx={0.5} cy={0.5} r={0.5} />
        <circle cx={4.5} cy={0.5} r={0.5} />
        <circle cx={8.5} cy={0.5} r={0.5} />
        <circle cx={12.5} cy={0.5} r={0.5} />
        <circle cx={16.5} cy={0.5} r={0.5} />
        <circle cx={20.5} cy={0.5} r={0.5} />
        <circle cx={24.5} cy={0.5} r={0.5} />
        <circle cx={28.5} cy={0.5} r={0.5} />
        <circle cx={0.5} cy={4.5} r={0.5} />
        <circle cx={4.5} cy={4.5} r={0.5} />
        <circle cx={8.5} cy={4.5} r={0.5} />
        <circle cx={12.5} cy={4.5} r={0.5} />
        <circle cx={16.5} cy={4.5} r={0.5} />
        <circle cx={20.5} cy={4.5} r={0.5} />
        <circle cx={24.5} cy={4.5} r={0.5} />
        <circle cx={28.5} cy={4.5} r={0.5} />
        <circle cx={0.5} cy={8.5} r={0.5} />
        <circle cx={4.5} cy={8.5} r={0.5} />
        <circle cx={8.5} cy={8.5} r={0.5} />
        <circle cx={12.5} cy={8.5} r={0.5} />
        <circle cx={16.5} cy={8.5} r={0.5} />
        <circle cx={20.5} cy={8.5} r={0.5} />
        <circle cx={24.5} cy={8.5} r={0.5} />
        <circle cx={28.5} cy={8.5} r={0.5} />
        <circle cx={0.5} cy={12.5} r={0.5} />
        <circle cx={4.5} cy={12.5} r={0.5} />
        <circle cx={8.5} cy={12.5} r={0.5} />
        <circle cx={12.5} cy={12.5} r={0.5} />
        <circle cx={16.5} cy={12.5} r={0.5} />
        <circle cx={20.5} cy={12.5} r={0.5} />
        <circle cx={24.5} cy={12.5} r={0.5} />
        <circle cx={28.5} cy={12.5} r={0.5} />
        <circle cx={0.5} cy={16.5} r={0.5} />
        <circle cx={4.5} cy={16.5} r={0.5} />
        <circle cx={8.5} cy={16.5} r={0.5} />
        <circle cx={12.5} cy={16.5} r={0.5} />
        <circle cx={16.5} cy={16.5} r={0.5} />
        <circle cx={20.5} cy={16.5} r={0.5} />
        <circle cx={24.5} cy={16.5} r={0.5} />
        <circle cx={28.5} cy={16.5} r={0.5} />
        <circle cx={0.5} cy={20.5} r={0.5} />
        <circle cx={4.5} cy={20.5} r={0.5} />
        <circle cx={8.5} cy={20.5} r={0.5} />
        <circle cx={12.5} cy={20.5} r={0.5} />
        <circle cx={16.5} cy={20.5} r={0.5} />
        <circle cx={20.5} cy={20.5} r={0.5} />
        <circle cx={24.5} cy={20.5} r={0.5} />
        <circle cx={28.5} cy={20.5} r={0.5} />
        <circle cx={0.5} cy={24.5} r={0.5} />
        <circle cx={4.5} cy={24.5} r={0.5} />
        <circle cx={8.5} cy={24.5} r={0.5} />
        <circle cx={12.5} cy={24.5} r={0.5} />
        <circle cx={16.5} cy={24.5} r={0.5} />
        <circle cx={20.5} cy={24.5} r={0.5} />
        <circle cx={24.5} cy={24.5} r={0.5} />
        <circle cx={28.5} cy={24.5} r={0.5} />
        <circle cx={0.5} cy={28.5} r={0.5} />
        <circle cx={4.5} cy={28.5} r={0.5} />
        <circle cx={8.5} cy={28.5} r={0.5} />
        <circle cx={12.5} cy={28.5} r={0.5} />
        <circle cx={16.5} cy={28.5} r={0.5} />
        <circle cx={20.5} cy={28.5} r={0.5} />
        <circle cx={24.5} cy={28.5} r={0.5} />
        <circle cx={28.5} cy={28.5} r={0.5} />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h30v30H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function BrowserMock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={1011}
      height={523}
      viewBox="0 0 1011 523"
      fill="none"
      {...props}
    >
      <g filter="url(#prefix__filter0_f)">
        <rect x={3} y={3} width={1005} height={517} rx={15} fill="#1F1A42" />
      </g>
      <circle cx={33.5} cy={28.5} r={5.5} fill="#FF4A4A" />
      <circle cx={51.5} cy={28.5} r={5.5} fill="#FFC700" />
      <path d="M75 28.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" fill="#05FF00" />
      <path
        d="M105.733 34l-.078-1.144c-.087.2-.208.381-.364.546a2.378 2.378 0 01-1.144.676 2.4 2.4 0 01-.65.091 2.68 2.68 0 01-.988-.169 2.379 2.379 0 01-.741-.442 2.859 2.859 0 01-.806-1.209 4.765 4.765 0 01-.26-1.586c0-.537.082-1.049.247-1.534a2.97 2.97 0 01.767-1.222c.217-.208.468-.373.754-.494a2.648 2.648 0 011.014-.182c.468 0 .901.117 1.3.351.407.234.698.537.871.91v-3.978h.65V34h-.572zm-.065-3.25c0-.485-.061-.914-.182-1.287a2.24 2.24 0 00-.637-.988 1.764 1.764 0 00-.585-.364 1.932 1.932 0 00-.78-.143c-.303 0-.568.052-.793.156a2.06 2.06 0 00-.598.416 2.631 2.631 0 00-.559 1.001c-.113.39-.169.793-.169 1.209 0 .468.065.906.195 1.313.139.407.36.745.663 1.014.165.147.351.26.559.338.208.078.451.117.728.117.286 0 .537-.048.754-.143.217-.095.407-.221.572-.377a2.5 2.5 0 00.637-1.001c.13-.39.195-.81.195-1.261zm8.801-.273c0 .078-.005.152-.013.221v.208h-4.966c.008.381.069.741.182 1.079.121.33.286.62.494.871.182.217.398.386.65.507.26.121.567.182.923.182.58 0 1.053-.19 1.417-.572.121-.121.221-.256.299-.403.086-.147.151-.32.195-.52h.676a2.31 2.31 0 01-.26.767c-.13.225-.286.425-.468.598-.234.234-.512.42-.832.559-.312.13-.655.195-1.027.195-.468 0-.871-.087-1.209-.26a2.843 2.843 0 01-.858-.663 3.376 3.376 0 01-.624-1.092 4.405 4.405 0 01-.208-1.378c0-.416.043-.819.13-1.209.086-.39.255-.758.507-1.105.554-.754 1.291-1.131 2.21-1.131.442 0 .832.087 1.17.26.346.173.637.407.871.702.242.286.424.62.546 1.001.13.381.195.776.195 1.183zm-.663-.169a2.977 2.977 0 00-.156-.884 2.292 2.292 0 00-.416-.754 1.982 1.982 0 00-.663-.533 1.95 1.95 0 00-.884-.195 2.06 2.06 0 00-.91.195c-.269.121-.499.29-.689.507a2.476 2.476 0 00-.429.754c-.104.286-.156.59-.156.91h4.303z"
        fill="#fff"
      />
      <path
        d="M334.25 24.75l-7.5 7.5M326.75 24.75l7.5 7.5"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={86} y={46} width={863} height={25} rx={10} fill="#1D183D" />
      <path
        d="M124.654 61.825c0 .213-.04.403-.121.572a1.37 1.37 0 01-.297.451c-.235.242-.546.41-.935.506a5.208 5.208 0 01-1.243.143c-.418 0-.807-.048-1.166-.143a1.932 1.932 0 01-.88-.495 1.29 1.29 0 01-.286-.429 1.473 1.473 0 01-.099-.561c0-.264.073-.513.22-.748.147-.235.348-.414.605-.539a1 1 0 01-.495-.352.905.905 0 01-.198-.55c0-.235.055-.436.165-.605.117-.169.282-.315.495-.44a2.034 2.034 0 01-.407-.583 1.98 1.98 0 01-.143-.77c0-.3.051-.568.154-.803a1.86 1.86 0 011.089-.99c.257-.088.528-.132.814-.132.484 0 .913.125 1.287.374a.983.983 0 01.418-.55c.213-.132.444-.198.693-.198.037 0 .07.004.099.011a.562.562 0 00.11.011v.473a.562.562 0 01-.11-.011.828.828 0 00-.605.143.703.703 0 00-.253.44c.139.161.246.345.319.55.081.205.121.433.121.682 0 .293-.055.561-.165.803-.11.235-.26.433-.451.594a1.93 1.93 0 01-.66.374 2.394 2.394 0 01-.803.132c-.411 0-.777-.084-1.1-.253a1.062 1.062 0 00-.385.264.566.566 0 00-.165.418.5.5 0 00.11.33.73.73 0 00.275.187c.103.037.224.062.363.077.147.007.271.011.374.011h1.199c.352 0 .664.044.935.132a1.63 1.63 0 011.001.858c.081.169.121.374.121.616zm-1.199-4.543c0-.22-.04-.418-.121-.594a1.234 1.234 0 00-.319-.451 1.432 1.432 0 00-.495-.286 1.738 1.738 0 00-.594-.099c-.213 0-.414.033-.605.099a1.458 1.458 0 00-.484.286 1.44 1.44 0 00-.319.451c-.073.176-.11.374-.11.594 0 .44.147.785.44 1.034.293.25.653.374 1.078.374a1.738 1.738 0 001.089-.374c.139-.125.246-.271.319-.44.081-.176.121-.374.121-.594zm.649 4.543a.935.935 0 00-.077-.396 1.005 1.005 0 00-.187-.286 1.149 1.149 0 00-.517-.297c-.213-.073-.484-.11-.814-.11h-1.452c-.235.059-.447.18-.638.363-.183.183-.275.44-.275.77 0 .147.026.279.077.396.059.117.132.216.22.297.198.19.447.312.748.363.308.051.601.077.88.077.139 0 .286-.007.44-.022.161-.007.323-.03.484-.066a1.8 1.8 0 00.451-.143c.147-.066.271-.15.374-.253a.946.946 0 00.198-.297.869.869 0 00.088-.396z"
        fill="#fff"
      />
      <defs>
        <filter
          id="prefix__filter0_f"
          x={0}
          y={0}
          width={1011}
          height={523}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={1.5} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

