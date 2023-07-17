import { HTMLAttributes, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export default function NeuBlock() {
  return (
    <div className="m-10 grid grid-cols-5 gap-12 rounded-lg border bg-neutral-700 p-10">
      <NeuDiv className="h-14 w-16" depth={8}>
        flat
      </NeuDiv>
      <NeuDiv className="h-14 w-16" depth={8} bevel={3}>
        bevel
      </NeuDiv>
      <NeuDiv className="h-14 w-16" depth={8} concave>
        concave
      </NeuDiv>
      <NeuDiv className="h-14 w-16" depth={8} convex>
        convex
      </NeuDiv>
      <NeuDiv className="h-14 w-16" depth={4} pressed>
        pressed
      </NeuDiv>

      <NeuDiv className="h-14 w-14 rounded-full" depth={4} concave>
        A
      </NeuDiv>
      <NeuDiv className="h-14 w-14 rounded-full" depth={8} concave>
        B
      </NeuDiv>
      <NeuDiv className="h-14 w-14 rounded-full" depth={12} concave>
        C
      </NeuDiv>
      <NeuDiv className="h-14 w-14 rounded-full" depth={16} concave>
        D
      </NeuDiv>
      <NeuDiv className="h-14 w-14 rounded-full" depth={20} concave>
        E
      </NeuDiv>
    </div>
  )
}

function NeuDiv({
  children,
  className,
  depth = 12,
  concave = false,
  convex = false,
  pressed = false,
  colorLight = "#fff2",
  colorDark = "#0004",
  bevel = 0,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  depth?: number
  concave?: boolean
  convex?: boolean
  pressed?: boolean
  bevel?: number
  colorLight?: string
  colorDark?: string
}) {
  return (
    <div
      className={twMerge("flex h-10 w-10 items-center justify-center rounded-lg", className)}
      style={{
        boxShadow: `
          ${bevel ? `0 0 0 ${bevel}px #fff1,` : ""}
          ${
            pressed
              ? `inset ${depth}px ${depth}px ${depth * 2}px ${colorDark},
                inset -${depth}px -${depth}px ${depth * 3}px ${colorLight}`
              : `${depth}px ${depth}px ${depth * 2}px ${colorDark},
                -${depth}px -${depth}px ${depth * 3}px ${colorLight}`
          }
      `,
        background: concave
          ? `linear-gradient(145deg, ${colorLight}, ${colorDark})`
          : convex
          ? `linear-gradient(145deg, ${colorDark}, ${colorLight})`
          : "",
      }}
      {...props}
    >
      {children}
    </div>
  )
}
