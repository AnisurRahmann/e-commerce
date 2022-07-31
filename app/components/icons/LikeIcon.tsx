export default function LikeICon({ favorite }: { favorite: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill={favorite ? "black" : "none"}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.31776 2.11174C9.80066 0.629421 12.2049 0.629421 13.6878 2.11174C15.1707 3.59414 15.1707 5.99766 13.6878 7.48006L8.28278 12.8829C8.12659 13.039 7.87341 13.039 7.71721 12.8829L2.31224 7.48006C0.82925 5.99766 0.82925 3.59414 2.31224 2.11174C3.79514 0.629421 6.19933 0.629421 7.68223 2.11174L8 2.42938L8.31776 2.11174Z"
        stroke="#161D25"
      />
    </svg>
  );
}
