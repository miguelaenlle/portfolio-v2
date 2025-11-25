import { motion } from 'framer-motion';
import { useMemo } from 'react';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 12}C-${
      380 - i * 5 * position
    } -${189 + i * 12} -${312 - i * 5 * position} ${216 - i * 12} ${
      152 - i * 5 * position
    } ${343 - i * 12}C${616 - i * 5 * position} ${470 - i * 12} ${
      684 - i * 5 * position
    } ${875 - i * 12} ${684 - i * 5 * position} ${875 - i * 12}`,
    color: `rgba(8, 145, 178, ${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  const isMobileViewport = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 640;
    }
    return false;
  }, [window.innerWidth]);

  return (
    <div className="absolute inset-0 pointer-events-none opacity-50">
      <svg
        className="w-full h-full"
        viewBox={`0 0 696 ${isMobileViewport ? 800 : 316}`}
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
export interface BackgroundPathsProps {
  children: React.ReactNode;
  onGoToPage: (newPage: string) => void;
}
export function BackgroundPaths({
  children,
  onGoToPage,
}: BackgroundPathsProps) {

    const handleClickLearnMore = () => {
        onGoToPage("About");
    }

    return (
        <div className="relative h-[100dvh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-cyan-950 px-4">
          <div className="absolute inset-0 opacity-60">
              <FloatingPaths position={1} />
              <FloatingPaths position={-1} />
          </div>
          <div className="relative z-10 container mx-auto px-2 sm:px-4 md:px-6 text-center">
              {children}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none">

          </div>

          <motion.div
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{
                delay: 0.4 + 0.6,
                duration: 0.5,
            }}
            className="absolute bottom-4 sm:bottom-8"
          >
            <div className="flex flex-col items-center gap-0 text-slate-300 hover:text-gray-400 cursor-pointer transition-colors" onClick={handleClickLearnMore}>
                <span className="text-base sm:text-lg md:text-xl font-medium">Learn more</span>
                <motion.svg
                animate={{ y: [0, 8, 0] }}
                transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                }}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-10 sm:h-10"
                >
                <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
            </div>
            </motion.div>
        </div>
    );
}
