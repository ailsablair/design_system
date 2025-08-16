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

const LogomarkSVG = ({ color, width = 250, height = 240 }: { color: string; width: number; height: number }) => {
  const getFillColors = () => {
    switch (color) {
      case 'white':
        return { primary: '#FFFFFF', secondary: '#FFFFFF', tertiary: '#FFFFFF' };
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
    <svg width={width} height={height} viewBox="0 0 250 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.352 239.988C95.3272 239.988 51.1049 200.681 45.4611 148.311L44.231 136.917L136.306 132.083L131.241 35.1626L142.058 34.5947C198.497 31.6101 246.891 75.2553 249.858 131.842C252.813 188.428 209.278 236.882 152.803 239.855C150.982 239.952 149.161 240 147.364 240L147.352 239.988ZM69.0375 157.338C78.3956 194.192 112.681 220.207 151.657 218.165C196.205 215.833 230.551 177.614 228.223 132.965C226.077 92.0028 193.781 59.6556 154.045 56.4052L159.074 152.601L69.0375 157.326V157.338Z" fill={colors.primary}/>
      <path d="M1.27495 97.1987L0.466962 89.5378C0.310188 88.0516 0.189592 86.5532 0.105176 85.0549C-0.980182 63.5344 6.36407 42.8718 20.7752 26.8855C35.1984 10.8992 54.964 1.49834 76.442 0.410835L84.5581 0L89.2372 92.7399L1.27495 97.1987ZM69.1701 17.5813C55.1931 20.0584 42.4944 27.0788 32.8227 37.7968C22.2344 49.5418 16.4217 64.4406 16.2408 80.1369L72.185 77.2973L69.1701 17.5692V17.5813Z" fill={colors.secondary}/>
      <path d="M30.3022 124.181L29.3616 115.239C29.2048 113.729 29.0722 112.206 28.9998 110.672C27.8903 88.7886 35.3552 67.7877 50.0196 51.5235C64.684 35.2714 84.7872 25.7013 106.615 24.6018L116.082 24.1184L120.905 119.565L30.3022 124.157V124.181ZM98.1371 44.7689C85.0525 47.4272 73.1859 54.1577 64.0689 64.2715C54.0233 75.4123 48.3795 89.4411 47.873 104.28L101.007 101.585L98.1371 44.7689Z" fill={colors.tertiary}/>
    </svg>
  );
};

const WordmarkSVG = ({ color, width = 680, height = 168 }: { color: string; width: number; height: number }) => {
  const fillColor = color === 'white' ? '#FFFFFF' :
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
      small: { logomark: { width: 80, height: 77 }, wordmark: { width: 200, height: 49 }, full: { width: 280, height: 100 } },
      medium: { logomark: { width: 125, height: 120 }, wordmark: { width: 340, height: 84 }, full: { width: 465, height: 150 } },
      large: { logomark: { width: 185, height: 178 }, wordmark: { width: 510, height: 126 }, full: { width: 695, height: 220 } }
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
