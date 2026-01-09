"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // La animación dura 4 segundos en total (2s delay + 2s duración)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <>
      <style jsx global>{`
        :root {
          --color-blue: #0056b3;
          --color-yellow: #facc15;
        }

        @keyframes accelerateAndFade {
          0% {
            transform: rotate(-90deg);
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: rotate(2000deg);
            opacity: 0;
          }
        }

        .loader-ring {
          transform: rotate(-90deg);
          transform-origin: center;
          animation: accelerateAndFade 2s cubic-bezier(0.8, 0, 1, 1) 2s forwards;
        }

        @keyframes logoVanish {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }

        @keyframes fillArc {
          from {
            stroke-dasharray: 0 283;
          }
          to {
            stroke-dasharray: 136 283;
          }
        }

        .logo-animate {
          animation: logoVanish 0.8s ease-out 3.2s forwards;
        }

        .arc-blue {
          stroke: var(--color-blue);
          stroke-dashoffset: -3;
          animation: fillArc 1s ease-out forwards;
        }

        .arc-yellow {
          stroke: var(--color-yellow);
          stroke-dashoffset: -144;
          animation: fillArc 1s ease-out 1s forwards;
        }
      `}</style>
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden">
        <div className="relative flex items-center justify-center w-40 h-40">
          <Image
            src="/images/op-logo.png"
            alt="Logo OccPartes"
            width={104}
            height={104}
            priority
            className="relative z-10 w-[65%] h-auto object-contain logo-animate"
          />

          <svg className="absolute top-0 left-0 w-full h-full loader-ring" viewBox="0 0 100 100">
            {/* Arco Azul */}
            <circle
              className="arc-blue"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="8"
              strokeLinecap="butt"
              strokeDasharray="0 283"
            ></circle>

            {/* Arco Amarillo */}
            <circle
              className="arc-yellow"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="8"
              strokeLinecap="butt"
              strokeDasharray="0 283"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  )
}
