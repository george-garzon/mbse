// app/components/GradientCircle.tsx
export default function GradientCircle() {
    return (
        <div
            className="
        absolute top-[-500px] left-[200px]
        w-[600px] h-[600px] rounded-full
        bg-gradient-to-b from-[#1B2339] via-blue-500 to-cyan-500
        blur-[160px] opacity-70
        pointer-events-none -z-10
      "
        />
    )
}
