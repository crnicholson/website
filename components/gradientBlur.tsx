export default function GradientBlur() {
  return (
    <>
      <div className="overflow-x-clip h-[400px] w-[400px] rounded-full relative -mb-[100%] z-0 blur-3xl opacity-[25%]" style={{ background: 'linear-gradient(60deg, #ff9e00, #ff165d, #ff38ef, #3a1c71, #d76d77, #ffaf7b)' }}></div>
    </>
  );
};

