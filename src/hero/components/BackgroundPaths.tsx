import { motion } from 'framer-motion';

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

  return (
    <div className="pointer-events-none absolute inset-0 opacity-45">
      <svg
        className="h-full w-full"
        viewBox="0 0 696 420"
        preserveAspectRatio="xMidYMid slice"
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
              duration: 22 + (path.id % 6) * 1.4,
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
        <div className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950 px-4">
          <div className="absolute inset-0 opacity-60">
              <FloatingPaths position={1} />
              <FloatingPaths position={-1} />
          </div>
          <div className="container relative z-10 mx-auto px-2 text-center sm:px-4 md:px-6">
              {children}
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950/70 to-transparent" />

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 0.4 + 0.6,
                duration: 0.5,
            }}
            className="absolute bottom-5 sm:bottom-8"
          >
            <button
              type="button"
              className="flex min-h-[44px] flex-col items-center gap-0 rounded-xl px-4 text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
              onClick={handleClickLearnMore}
            >
                <span className="text-sm font-semibold sm:text-base">Explore</span>
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
            </button>
            </motion.div>
        </div>
    );
}
