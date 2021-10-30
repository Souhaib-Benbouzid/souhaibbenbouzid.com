function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={120} height={60} {...props}>
      <path
        d="M72.03 26.27c-1.7 0-2.968.835-2.968 2.845 0 1.5.835 2.565 2.875 2.565 1.73 0 2.905-1.02 2.905-2.628 0-1.825-1.05-2.782-2.812-2.782zm-3.4 14.19c-.403.494-.804 1.02-.804 1.625 0 1.235 1.575 1.608 3.74 1.608 1.793 0 4.235-.125 4.235-1.793 0-.99-1.175-1.052-2.66-1.145l-4.5-.308zm9.15-14.098c.555.713 1.144 1.7 1.144 3.123 0 3.43-2.7 5.44-6.584 5.44-1 0-1.875-.125-2.443-.278l-1.02 1.625 3.03.185c5.35.34 8.5.496 8.5 4.605 0 3.556-3.12 5.562-8.5 5.562-5.595 0-7.727-1.422-7.727-3.875 0-1.39.62-2.133 1.7-3.154-1.02-.43-1.36-1.204-1.36-2.038 0-.68.34-1.3.897-1.875l1.916-1.855c-1.515-.74-2.66-2.35-2.66-4.625 0-3.555 2.35-5.996 7.08-5.996 1.33 0 2.134.123 2.845.31h6.028v2.627l-2.845.216m8.282-5.615c-1.75 0-2.782-1.02-2.782-2.784s1.02-2.72 2.782-2.72c1.793 0 2.813.96 2.813 2.72s-1.02 2.784-2.812 2.784zm-4 18.578v-2.44l1.578-.216c.432-.062.495-.155.495-.62V26.96c0-.34-.093-.556-.403-.65l-1.67-.587.34-2.502h6.4v12.83c0 .495.03.556.495.62l1.575.216v2.438H82.06m21.05-1.2c-1.33.65-3.278 1.25-5.04 1.25-3.68 0-5.07-1.482-5.07-4.977v-8.1c0-.185 0-.31-.25-.31H90.6v-2.75c2.72-.3 3.803-1.67 4.143-5.04h2.937v4.39c0 .215 0 .31.248.31h4.36v3.09H97.67v7.375c0 1.825.434 2.535 2.1 2.535.866 0 1.75-.216 2.504-.494l.835 2.72"
        fill={props.fill}
      />
      <path
        d="M50.67 29.25L32.138 10.72a2.733 2.733 0 00-3.865 0l-3.847 3.848 4.88 4.88a3.244 3.244 0 013.337.777 3.25 3.25 0 01.771 3.36l4.704 4.704a3.26 3.26 0 013.36.77 3.25 3.25 0 01-1.459 5.441 3.25 3.25 0 01-3.141-.842 3.256 3.256 0 01-.707-3.537l-4.375-4.375v11.545c.3.154.602.357.86.615a3.253 3.253 0 010 4.6 3.25 3.25 0 01-4.599 0 3.253 3.253 0 010-4.6 3.27 3.27 0 011.065-.71v-11.65a3.522 3.522 0 01-1.065-.7 3.25 3.25 0 01-.7-3.555l-4.812-4.813L9.83 29.163a2.74 2.74 0 000 3.866l18.533 18.53a2.733 2.733 0 003.865 0L50.67 33.116a2.74 2.74 0 000-3.866"
        fill="#f03c2e"
      />
    </svg>
  );
}

export default SvgComponent;
