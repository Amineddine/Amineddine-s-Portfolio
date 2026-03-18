"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function SignalField() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);

  const softX = useSpring(pointerX, { stiffness: 80, damping: 18 });
  const softY = useSpring(pointerY, { stiffness: 80, damping: 18 });

  const glow = useMotionTemplate`radial-gradient(circle at ${softX}% ${softY}%, rgba(149, 208, 224, 0.2), transparent 34%)`;
  const layerX = useTransform(softX, [0, 100], [-18, 18]);
  const layerY = useTransform(softY, [0, 100], [-16, 16]);
  const altLayerX = useTransform(softX, [0, 100], [12, -12]);
  const altLayerY = useTransform(softY, [0, 100], [10, -10]);

  return (
    <motion.div
      className="signal-panel signal-frame relative overflow-hidden rounded-[2rem] p-5 md:p-6"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
      }}
      onMouseLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
      }}
      initial={{ opacity: 0, y: 30, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="ui-micro text-slate-400">Signal field</p>
          <p className="mt-2 text-sm text-slate-200">Morocco based / available globally / web + security</p>
        </div>
        <div className="signal-pill">Live frame</div>
      </div>

      <div className="relative mt-8 aspect-[4/4.7] overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,14,24,0.76),rgba(8,14,24,0.22))]">
        <motion.div
          className="absolute inset-[8%] rounded-[1.4rem] border border-white/10 bg-white/[0.02]"
          style={{ x: layerX, y: layerY }}
        />
        <motion.div
          className="absolute inset-[16%] rounded-[1.4rem] border border-white/[0.08]"
          style={{ x: altLayerX, y: altLayerY }}
        />

        <motion.svg
          viewBox="0 0 520 620"
          className="absolute inset-0 h-full w-full"
          style={{ x: layerX, y: layerY }}
        >
          {[0, 1, 2, 3, 4].map((line) => (
            <motion.path
              key={line}
              d={`M -20 ${120 + line * 92} C 90 ${70 + line * 86}, 230 ${175 + line * 95}, 540 ${102 + line * 86}`}
              fill="none"
              stroke="rgba(151, 166, 190, 0.24)"
              strokeWidth="1.1"
              strokeLinecap="round"
              initial={{ pathLength: 0.85, opacity: 0.28 }}
              animate={{
                pathLength: [0.75, 1, 0.75],
                opacity: [0.2, 0.34, 0.2],
                y: [0, line % 2 === 0 ? -7 : 7, 0],
              }}
              transition={{
                duration: 8 + line,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.circle
            cx="352"
            cy="238"
            r="6"
            fill="rgba(149, 208, 224, 0.95)"
            animate={{ cy: [238, 262, 238], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="352"
            cy="238"
            r="20"
            fill="none"
            stroke="rgba(149, 208, 224, 0.2)"
            animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.12, 0.28, 0.12] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        <div className="absolute left-5 top-5">
          <div className="signal-pill">Field 01</div>
        </div>

        <div className="absolute bottom-5 left-5 max-w-[13rem] rounded-[1.25rem] border border-white/10 bg-[rgba(8,14,24,0.78)] px-4 py-3 backdrop-blur-md">
          <p className="ui-micro mb-2">Coordinates</p>
          <p className="text-sm leading-6 text-slate-200">
            Interfaces, client work, and security tooling shaped with a quieter sense of control.
          </p>
        </div>

        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-[1.25rem] border border-white/10 bg-[rgba(8,14,24,0.78)] px-4 py-3 backdrop-blur-md sm:block">
          <p className="ui-micro mb-2">Focus</p>
          <div className="space-y-2 text-sm text-slate-200">
            <p>Web systems</p>
            <p>Secure delivery</p>
            <p>Field-tested polish</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
