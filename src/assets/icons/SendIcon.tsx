type Props = {
  className: string;
  fill?: string;
};

export default function SendIcon({ className, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M23.844 1.15591C23.7133 1.02578 23.5481 0.935687 23.3679 0.896216C23.1877 0.856746 23 0.869542 22.8268 0.9331L1.51435 8.6831C1.33054 8.75282 1.1723 8.8768 1.06063 9.03859C0.948965 9.20037 0.88916 9.3923 0.88916 9.58888C0.88916 9.78546 0.948965 9.97739 1.06063 10.1392C1.1723 10.301 1.33054 10.4249 1.51435 10.4947L10.8143 14.2147L14.5343 23.5147C14.6042 23.6904 14.724 23.8418 14.879 23.9503C15.0339 24.0587 15.2172 24.1195 15.4062 24.125C15.602 24.121 15.7919 24.0577 15.9511 23.9436C16.1102 23.8294 16.2309 23.6698 16.2975 23.4856L24.0475 2.1731C24.1135 2.00171 24.1294 1.81508 24.0934 1.63498C24.0574 1.45489 23.9709 1.28874 23.844 1.15591ZM15.4062 20.4437L12.7034 13.6625L17.3437 9.02216L15.9778 7.65622L11.2987 12.3353L4.55622 9.59372L21.5384 3.46154L15.4062 20.4437Z"
        fill={fill}
      />
    </svg>
  );
}