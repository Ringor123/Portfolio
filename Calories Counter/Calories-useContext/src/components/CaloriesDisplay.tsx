import NumberFlow from "@number-flow/react";

type CaloriesDisplayProps = {
  text: string;
  calories: number;
};

export default function CaloriesDisplay({
  text,
  calories,
}: CaloriesDisplayProps) {
  return (
    <>
      <p className="text-white font-bold rounded-full grid grid-cols-1 text-center">
        <span className="font-bold text-6xl text-[#EFB036]">
          <NumberFlow value={calories} />
        </span>
        {text}
      </p>
    </>
  );
}
