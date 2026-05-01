interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <span
      className={`text-[7px] uppercase tracking-[0.21px] text-[#a6a6a6] font-normal ${className ?? ""}`}
    >
      {text}
    </span>
  );
}