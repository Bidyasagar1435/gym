const Background = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* Blue glow */}
      <div
        className="
          absolute
          left-[20%]
          top-[35%]
          h-[500px]
          w-[500px]
          rounded-full
        bg-blue-700/20
          blur-[140px]
        "
      />

      {/* Purple glow */}
      <div
        className="
          absolute
          right-[18%]
          top-[38%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-700/20
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148, 163, 184, 0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top-right purple glow */}
      <div
        className="
          absolute
          -right-24
          -top-28
          h-[360px]
          w-[360px]
          rounded-full
          bg-purple-700/10
          blur-3xl
        "
      />

      {/* Bottom-left blue glow */}
      <div
        className="
          absolute
          -bottom-40
          -left-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-blue-600/10
          blur-3xl
        "
      />
    </div>
  );
};

export default Background;
