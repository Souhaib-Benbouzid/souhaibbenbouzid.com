function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={120}
      height={60}
      {...props}
    >
      <defs>
        <clipPath id="prefix__d">
          <path d="M0 216h216V0H0v216z" />
        </clipPath>
        <clipPath id="prefix__c">
          <path d="M121.724 55.66c.343 1.114.4 2.832-3.038 2.054 0 0-9.395-1.342-9.843-12.303l-.214-21h-2.258l-.213 21c-.448 10.96-9.842 12.303-9.842 12.303-3.428.778-3.383-.938-3.04-2.052-3.37 5.738-12.394 4.996-12.394 4.996-3.133-1.117-.224-3.13-.224-3.13 4.92-1.788 5.37-7.158 5.37-7.158V35.2l.52-11.728c1.117-5.224 3.874-8.312 6.578-10.13l28.803.033c3.484 2.365 7.047 6.846 7.047 15.307V50.37s.447 5.37 5.37 7.158c0 0 2.906 2.014-.225 3.13 0 0-.382.03-1.017.032-2.455 0-8.7-.47-11.378-5.03M94.53 34.04v16.552c0 1.617-.285 2.977-.773 4.12 3.24-2.526 3.457-8.855 3.457-8.855v-20.66c-3.225 2.282-2.684 8.846-2.684 8.846M117.8 45.86s.217 6.33 3.456 8.855c-.487-1.143-.772-2.503-.772-4.12V34.042s.54-6.1-2.684-8.612v20.43z" />
        </clipPath>
        <clipPath id="prefix__a">
          <path d="M0 216h216V0H0v216z" />
        </clipPath>
        <path
          id="prefix__b"
          d="M158.542 54.996c0-9.73-22.538-17.617-50.34-17.617s-50.34 7.887-50.34 17.617 22.537 17.62 50.34 17.62 50.34-7.9 50.34-17.62"
        />
        <path
          id="prefix__e"
          d="M75.282 93.676c0-.555-.65-1.006-1.454-1.006s-1.455.45-1.455 1.006.65 1.008 1.455 1.008 1.454-.45 1.454-1.008"
        />
      </defs>
      <g
        clipPath="url(#prefix__a)"
        transform="matrix(.19858 0 0 -.19858 -.188 52.85)"
      >
        <use xlinkHref="#prefix__b" fill="#a0dcf2" />
      </g>
      <g
        clipPath="url(#prefix__c)"
        transform="matrix(.19858 0 0 -.19858 -.188 52.85)"
      >
        <use xlinkHref="#prefix__b" fill="#82bde7" />
      </g>
      <g
        clipPath="url(#prefix__d)"
        transform="matrix(.19858 0 0 -.19858 -.188 52.85)"
      >
        <path
          d="M50.7 106.8l-1.453-5.063s-.378-1.83 1.346-2.154c1.8.035 1.653 1.72 1.527 2.266l-1.42 4.95z"
          fill="#a0dcf2"
        />
        <path
          d="M197.042 128.027l.133.658c-14.768 2.953-29.922 2.983-39.1 2.602 1.506 5.426 1.96 11.67 1.96 18.633 0 9.986-3.752 17.975-9.843 24.054 1.065 3.435 2.487 11.066-1.42 20.833 0 0-6.9 2.188-22.476-8.243-6.106 1.526-12.604 2.28-19.112 2.28-7.16 0-14.395-.912-21.143-2.763-16.086 10.975-23.186 8.727-23.186 8.727-4.636-11.6-1.77-20.17-.9-22.302-5.448-5.88-8.774-13.384-8.774-22.585 0-6.947.792-13.178 2.724-18.594-9.247.336-23.85.207-38.1-2.64l.132-.658c14.325 2.865 29.018 2.965 38.2 2.617.425-1.12.9-2.2 1.43-3.26-9.088-.293-24.604-1.45-39.475-5.646l.182-.645c14.988 4.227 30.64 5.356 39.64 5.63 5.43-10.12 16.135-16.658 35.18-18.7-2.704-1.816-5.46-4.904-6.58-10.13-3.683-1.76-15.343-6.062-22.34 5.97 0 0-3.916 7.16-11.412 7.72 0 0-7.27.1-.503-4.53 0 0 4.867-2.293 8.223-10.9 0 0 4.38-14.695 25.512-9.98v-15.18s-.447-5.37-5.37-7.158c0 0-2.908-2.014.224-3.13 0 0 13.645-1.12 13.645 10.065v16.552s-.54 6.565 2.683 8.846V68.963s-.222-6.487-3.578-8.948c0 0-2.237-4.025 2.684-2.908 0 0 9.394 1.342 9.842 12.303l.214 27.513h2.257l.215-27.513c.447-10.96 9.842-12.303 9.842-12.303 4.92-1.117 2.683 2.908 2.683 2.908-3.355 2.46-3.578 8.948-3.578 8.948v26.953c3.223-2.5 2.684-8.612 2.684-8.612V70.752c0-11.184 13.644-10.065 13.644-10.065 3.13 1.117.225 3.13.225 3.13-4.922 1.8-5.37 7.158-5.37 7.158v21.697c0 8.46-3.563 12.942-7.047 15.307 20.3 2.014 30.056 8.572 34.548 18.762 8.896-.244 24.906-1.328 40.22-5.65l.182.645c-15.227 4.295-31.13 5.406-40.117 5.668.426 1.03.797 2.1 1.127 3.2 9.105.4 24.328.385 39.154-2.58"
          fill="#292929"
        />
        <path
          d="M140.178 150.4c4.375-3.963 6.934-8.75 6.934-13.905 0-24.075-17.948-24.728-40.085-24.728S66.94 115.09 66.94 136.485c0 5.122 2.524 9.878 6.845 13.825 7.206 6.578 19.404 3.095 33.24 3.095 13.782 0 25.934 3.518 33.15-3.015"
          fill="#f5cdb5"
        />
        <path
          d="M93.697 135.258c0-6.63-3.734-12.006-8.34-12.006s-8.342 5.375-8.342 12.006 3.736 12.004 8.342 12.004 8.34-5.373 8.34-12.004"
          fill="#fff"
        />
        <path
          d="M91.02 135.107c0-4.42-2.5-8.002-5.56-8.002s-5.56 3.582-5.56 8.002 2.488 8.006 5.56 8.006 5.56-3.584 5.56-8.006"
          fill="#b1645a"
        />
        <path
          d="M138.443 135.258c0-6.63-3.734-12.006-8.342-12.006s-8.34 5.375-8.34 12.006 3.735 12.004 8.34 12.004 8.342-5.373 8.342-12.004"
          fill="#fff"
        />
        <path
          d="M135.766 135.107c0-4.42-2.5-8.002-5.56-8.002s-5.56 3.582-5.56 8.002 2.5 8.006 5.56 8.006 5.56-3.584 5.56-8.006m-26.536-10.5a2.086 2.086 0 10-4.172 0 2.086 2.086 0 004.172 0m-6.945-5.275a.67.67 0 101.265.447c.536-1.515 1.973-2.533 3.577-2.533s3.04 1.018 3.578 2.533a.67.67 0 101.264-.447 5.15 5.15 0 00-9.684 0"
          fill="#b1645a"
        />
        <g fill="#c5e6da">
          <path d="M56.04 109.785c0-.557-.652-1.006-1.455-1.006s-1.454.45-1.454 1.006.65 1.008 1.454 1.008 1.455-.45 1.455-1.008m4.028-2.235c0-.557-.652-1.008-1.455-1.008s-1.454.45-1.454 1.008.65 1.006 1.454 1.006 1.455-.45 1.455-1.006m2.462-2.9c0-.555-.65-1.006-1.455-1.006s-1.453.45-1.453 1.006.65 1.008 1.453 1.008 1.455-.45 1.455-1.008m2.235-3.357c0-.557-.65-1.008-1.453-1.008s-1.455.45-1.455 1.008.65 1.008 1.455 1.008 1.453-.45 1.453-1.008m2.462-3.143c0-.555-.65-1.006-1.454-1.006s-1.455.45-1.455 1.006.652 1.008 1.455 1.008 1.454-.45 1.454-1.008m3.357-2.683c0-.557-.65-1.008-1.455-1.008s-1.453.45-1.453 1.008.65 1.006 1.453 1.006 1.455-.45 1.455-1.006" />
          <use xlinkHref="#prefix__e" />
          <use xlinkHref="#prefix__e" x={4.676} />
          <path d="M84.704 94.455c0-.557-.65-1.008-1.454-1.008s-1.455.45-1.455 1.008.65 1.008 1.455 1.008 1.454-.45 1.454-1.008" />
        </g>
      </g>
      <path d="M50.666 21.143c1.1 0 2.353-.273 3.785-.818v3.513c-.318.114-.773.24-1.364.375.182.523.273 1.012.273 1.466 0 1.455-.443 2.728-1.33 3.82a5.13 5.13 0 01-3.376 1.9c-.9.136-1.364.625-1.364 1.466 0 .296.148.6.443.887.386.432.955.705 1.705.818 3.25.5 4.877 1.853 4.877 4.058 0 3.524-2.103 5.286-6.3 5.286-1.728 0-3.15-.307-4.263-.92-1.4-.773-2.114-2-2.114-3.65 0-1.9 1.057-3.217 3.17-3.922v-.068c-.773-.477-1.16-1.205-1.16-2.182 0-1.273.364-2.07 1.1-2.387v-.068c-.728-.25-1.375-.818-1.944-1.705-.637-.955-.955-1.978-.955-3.07 0-1.637.58-3 1.74-4.092a5.7 5.7 0 014-1.534 6.15 6.15 0 013.103.818m-5.115 4.842c0 1.57.716 2.353 2.148 2.353 1.387 0 2.08-.796 2.08-2.387 0-.66-.16-1.228-.477-1.705-.386-.523-.92-.784-1.603-.784-1.432 0-2.148.84-2.148 2.524m5.252 13.095c0-1.16-.955-1.74-2.865-1.74-1.842 0-2.762.602-2.762 1.807 0 1.182 1 1.773 3 1.773 1.75 0 2.626-.614 2.626-1.84M58.3 17.835c-.66 0-1.228-.25-1.705-.75a2.55 2.55 0 01-.682-1.773c0-.705.227-1.307.682-1.807.477-.5 1.046-.75 1.705-.75.637 0 1.182.25 1.637.75.477.5.716 1.103.716 1.807a2.48 2.48 0 01-.716 1.773c-.455.5-1 .75-1.637.75m-1.944 17.8c.045-.455.068-1.228.068-2.32V22.712l-.068-2.217H60.2c-.045.432-.068 1.148-.068 2.148v10.47l.068 2.524h-3.854m11-15.142h2.967v3.308a9.98 9.98 0 01-.648-.034l-.853-.034h-1.466v6.343c0 1.523.5 2.285 1.5 2.285a3.32 3.32 0 001.91-.58v3.4c-.84.455-1.853.682-3.035.682-1.66 0-2.808-.6-3.444-1.773-.477-.887-.716-2.285-.716-4.194v-6.104h.034v-.068l-.512-.034a8.61 8.61 0 00-1.16.102v-3.308h1.67v-1.33c0-.637-.034-1.148-.102-1.535h3.956c-.068.432-.102.92-.102 1.466v1.398m12.1-.092c-.978 0-2 .34-3.07 1.023v-5.968l.068-2.558h-3.888c.068.364.102 1.216.102 2.558v18.04l-.102 2.148h3.956c0-.068-.023-.34-.068-.82l-.068-1.33V25.1c.796-.75 1.57-1.125 2.32-1.125.864 0 1.523.432 1.978 1.296.34.682.512 1.535.512 2.558l-.034 4.604c0 .773-.057 1.84-.17 3.206h4.126c-.1-.568-.136-1.614-.136-3.137V27.83c0-1.978-.443-3.66-1.33-5.047-1-1.6-2.4-2.387-4.195-2.387M92.55 35.773c-1.796 0-3.126-.796-4-2.387-.682-1.296-1.023-3-1.023-5.08v-4.672l-.136-3.137h4.092c-.068.5-.114 1.57-.136 3.206l-.034 4.604c0 1.296.148 2.228.443 2.796.34.705.966 1.057 1.876 1.057.637 0 1.353-.375 2.148-1.125v-8.4a14.89 14.89 0 00-.068-1.33l-.068-.818H99.6c-.045.387-.068 1.103-.068 2.148V33.08l.068 2.558h-3.7V34.4c-1.046.9-2.16 1.364-3.342 1.364m16.77-.034a4 4 0 01-3.069-1.33v1.228h-3.615c.068-.387.102-1.103.102-2.148V15.45l-.102-2.558h3.888c-.046.4-.068 1.262-.068 2.558v5.934c1.046-.66 2.07-1 3.07-1 1.796 0 3.206.796 4.23 2.387.864 1.387 1.296 3.07 1.296 5.047 0 2.023-.455 3.785-1.364 5.286-1.1 1.75-2.546 2.626-4.365 2.626m-.512-11.765c-.75 0-1.535.375-2.353 1.125V31c.728.705 1.444 1.057 2.148 1.057.887 0 1.557-.5 2.012-1.466.364-.773.546-1.694.546-2.762 0-2.57-.784-3.853-2.353-3.853" />
    </svg>
  );
}

export default SvgComponent;
