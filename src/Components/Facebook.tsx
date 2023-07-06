function Facebook({ color ,size}: { color: string,size: string }) {
    console.log(color)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      enable-background="new 0 0 56.693 56.693"
      height={size}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 56.693 56.693"
      width="56.693px"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z"
      />
    </svg>
  );
}

export default Facebook;
