import React from 'react';
import './tokens.css';

export interface LogoProps {
  /** Logo variant to display */
  variant?: 'logomark' | 'wordmark' | 'full';
  /** Color scheme for the logo */
  color?: 'brand' | 'dark-blue' | 'sky-blue' | 'white' | 'black';
  /** Size of the logo */
  size?: 'small' | 'medium' | 'large';
  /** Custom width (overrides size) */
  width?: number;
  /** Custom height (overrides size) */
  height?: number;
}

const LogomarkSVG = ({ color, width = 100, height = 96 }: { color: string; width: number; height: number }) => {
  const getFillColors = () => {
    switch (color) {
      case 'white':
        return { primary: 'white', secondary: 'white', tertiary: 'white' };
      case 'sky-blue':
        return { primary: '#0BA7EA', secondary: '#0BA7EA', tertiary: '#0BA7EA' };
      case 'dark-blue':
        return { primary: '#191E3C', secondary: '#191E3C', tertiary: '#191E3C' };
      case 'black':
        return { primary: '#1C1C1C', secondary: '#1C1C1C', tertiary: '#1C1C1C' };
      case 'brand':
      default:
        return { primary: '#0BA7EA', secondary: '#3A3282', tertiary: '#2F42BD' };
    }
  };

  const colors = getFillColors();

  return (
    <svg width={width} height={height} viewBox="0 0 290 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M167.352 259.988C115.327 259.988 71.1049 220.681 65.4611 168.311L64.231 156.917L156.306 152.083L151.241 55.1626L162.058 54.5947C218.497 51.6101 266.891 95.2553 269.858 151.842C272.813 208.428 229.278 256.882 172.803 259.855C170.982 259.952 169.161 260 167.364 260L167.352 259.988ZM89.0375 177.338C98.3956 214.192 132.681 240.207 171.657 238.165C216.205 235.833 250.551 197.614 248.223 152.965C246.077 112.003 213.781 79.6556 174.045 76.4052L179.074 172.601L89.0375 177.326V177.338Z" fill={colors.primary}/>
      <path d="M21.275 117.199L20.467 109.538C20.3102 108.052 20.1896 106.553 20.1052 105.055C19.0198 83.5344 26.3641 62.8718 40.7752 46.8855C55.1984 30.8992 74.964 21.4983 96.442 20.4108L104.558 20L109.237 112.74L21.275 117.199ZM89.1701 37.5813C75.1931 40.0584 62.4944 47.0788 52.8227 57.7968C42.2344 69.5418 36.4217 84.4406 36.2408 100.137L92.185 97.2973L89.1701 37.5692V37.5813Z" fill={colors.secondary}/>
      <path d="M50.3022 144.181L49.3616 135.239C49.2048 133.729 49.0722 132.206 48.9998 130.672C47.8903 108.789 55.3552 87.7877 70.0196 71.5235C84.684 55.2714 104.787 45.7013 126.615 44.6018L136.082 44.1184L140.905 139.565L50.3022 144.157V144.181ZM118.137 64.7689C105.053 67.4272 93.1859 74.1577 84.0689 84.2715C74.0233 95.4123 68.3795 109.441 67.873 124.28L121.007 121.585L118.137 64.7689Z" fill={colors.tertiary}/>
    </svg>
  );
};

const WordmarkSVG = ({ color, width = 234, height = 58 }: { color: string; width: number; height: number }) => {
  const fillColor = color === 'white' ? 'white' : 
                   color === 'sky-blue' ? '#0BA7EA' : 
                   color === 'black' ? '#1C1C1C' : '#191E3C';

  return (
    <svg width={width} height={height} viewBox="0 0 680 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.3531 136.8H125.74V168H0V0H122.706V31.2H37.3531V136.8ZM34.5874 67.4154H112.773V97.9077H34.5874V67.4154Z" fill={fillColor}/>
      <path d="M237.651 167.97C225.13 167.97 213.472 165.918 202.736 161.814C191.97 157.71 182.662 151.881 174.781 144.297C166.9 136.714 160.743 127.822 156.342 117.621C151.94 107.42 149.74 96.2082 149.74 83.9851C149.74 71.7621 151.94 60.5502 156.342 50.3494C160.743 40.1487 166.929 31.2565 174.9 23.6729C182.87 16.0892 192.208 10.2602 202.974 6.15614C213.71 2.05205 225.368 0 237.888 0C251.955 0 264.714 2.43866 276.164 7.31599C287.613 12.1933 297.19 19.3309 304.922 28.7881L280.565 51.0632C275.152 44.7286 268.996 39.9405 262.126 36.6691C255.256 33.4275 247.792 31.7918 239.732 31.7918C232.149 31.7918 225.19 33.0706 218.855 35.6283C212.52 38.1859 207.019 41.7844 202.379 46.4238C197.74 51.0632 194.141 56.5651 191.584 62.8996C189.026 69.2342 187.747 76.2825 187.747 84.0149C187.747 91.7472 189.026 98.7955 191.584 105.13C194.141 111.465 197.74 116.967 202.379 121.606C207.019 126.245 212.52 129.844 218.855 132.401C225.19 134.959 232.149 136.238 239.732 136.238C247.762 136.238 255.227 134.572 262.126 131.242C268.996 127.911 275.152 123.093 280.565 116.729L304.922 139.004C297.19 148.431 287.584 155.628 276.164 160.565C264.714 165.502 251.896 168 237.651 168V167.97Z" fill={fillColor}/>
      <path d="M368.03 168H328.922V0H368.03V168ZM446.983 99.1077H364.891V66.2154H446.983V99.1077ZM444.091 0H482.984V168H444.091V0Z" fill={fillColor}/>
      <path d="M593.47 168C580.995 168 569.531 165.918 559.02 161.724C548.509 157.559 539.355 151.67 531.529 144.085C523.732 136.5 517.668 127.606 513.394 117.404C509.12 107.201 506.984 96.0468 506.984 84C506.984 71.9533 509.12 60.6204 513.394 50.4773C517.668 40.3343 523.732 31.5 531.529 23.915C539.326 16.33 548.451 10.4703 558.904 6.27621C569.329 2.1119 580.793 0 593.239 0C605.685 0 617.149 2.05241 627.574 6.15723C637.998 10.262 647.123 16.0921 654.949 23.6771C662.746 31.262 668.81 40.1558 673.084 50.3584C677.358 60.5609 679.494 71.7748 679.494 84C679.494 96.2252 677.358 107.231 673.084 117.523C668.81 127.814 662.746 136.738 654.949 144.323C647.152 151.908 638.027 157.738 627.574 161.843C617.149 165.948 605.772 168 593.441 168H593.47ZM593.239 136.232C600.285 136.232 606.782 134.953 612.731 132.395C618.651 129.837 623.877 126.208 628.382 121.479C632.887 116.749 636.381 111.276 638.865 105C641.348 98.7238 642.59 91.7337 642.59 84C642.59 76.2663 641.348 69.2762 638.865 63C636.381 56.7238 632.887 51.2507 628.382 46.5213C623.877 41.7918 618.651 38.1629 612.731 35.6048C606.811 33.0467 600.314 31.7677 593.239 31.7677C586.164 31.7677 579.638 33.0467 573.632 35.6048C567.625 38.1629 562.398 41.7918 557.98 46.5213C553.562 51.2507 550.097 56.7238 547.613 63C545.13 69.2762 543.888 76.2663 543.888 84C543.888 91.7337 545.13 98.7238 547.613 105C550.097 111.276 553.533 116.749 557.98 121.479C562.398 126.208 567.625 129.837 573.632 132.395C579.638 134.953 586.164 136.232 593.239 136.232Z" fill={fillColor}/>
    </svg>
  );
};

const FullLogoSVG = ({ color, width = 403, height = 150 }: { color: string; width: number; height: number }) => {
  const getColors = () => {
    switch (color) {
      case 'white':
        return { logo: 'white', text: 'white' };
      case 'sky-blue':
        return { logo: '#0BA7EA', text: '#0BA7EA' };
      case 'dark-blue':
        return { logo: '#191E3C', text: '#191E3C' };
      case 'black':
        return { logo: '#1C1C1C', text: '#1C1C1C' };
      case 'brand':
      default:
        return { logo: 'brand', text: color === 'brand' ? '#1C1C1C' : '#191E3C' };
    }
  };

  const colors = getColors();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width, height }}>
      <LogomarkSVG color={colors.logo} width={Math.round(width * 0.3)} height={Math.round(height * 0.9)} />
      <WordmarkSVG color={colors.text} width={Math.round(width * 0.65)} height={Math.round(height * 0.6)} />
    </div>
  );
};

export const Logo = ({
  variant = 'full',
  color = 'brand',
  size = 'medium',
  width,
  height,
  ...props
}: LogoProps) => {
  const getSizeDimensions = () => {
    if (width && height) return { width, height };
    
    const sizeMap = {
      small: { logomark: { width: 60, height: 58 }, wordmark: { width: 140, height: 35 }, full: { width: 200, height: 75 } },
      medium: { logomark: { width: 100, height: 96 }, wordmark: { width: 234, height: 58 }, full: { width: 334, height: 125 } },
      large: { logomark: { width: 145, height: 140 }, wordmark: { width: 340, height: 84 }, full: { width: 485, height: 180 } }
    };
    
    return sizeMap[size][variant];
  };

  const dimensions = getSizeDimensions();

  const renderLogo = () => {
    switch (variant) {
      case 'logomark':
        return <LogomarkSVG color={color} {...dimensions} />;
      case 'wordmark':
        return <WordmarkSVG color={color} {...dimensions} />;
      case 'full':
      default:
        return <FullLogoSVG color={color} {...dimensions} />;
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
    >
      {renderLogo()}
    </div>
  );
};
