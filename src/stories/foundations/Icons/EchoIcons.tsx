import React from 'react';

export interface EchoIconProps {
  size: string;
  color: string;
  opacity: string;
}

/**
 * Echo-specific Outlined Icons
 * These are hand-crafted SVG icons for the Echo Design System.
 */

export const EchoEmoticonCoolOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M19 10C19 11.38 16.88 12.5 15.5 12.5C14.12 12.5 12.75 11.38 12.75 10H11.25C11.25 11.38 9.88 12.5 8.5 12.5C7.12 12.5 5 11.38 5 10H4.25C4.09 10.64 4 11.31 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 11.31 19.91 10.64 19.75 10H19ZM12 4C9.04 4 6.45 5.61 5.07 8H18.93C17.55 5.61 14.96 4 12 4ZM22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12ZM12 17.23C10.25 17.23 8.71 16.5 7.81 15.42L9.23 14C9.68 14.72 10.75 15.23 12 15.23C13.25 15.23 14.32 14.72 14.77 14L16.19 15.42C15.29 16.5 13.75 17.23 12 17.23Z" fill={color}/>
  </svg>
);

export const EchoMessageBadgeOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M22 7V16C22 17.1 21.1 18 20 18H6L2 22V4C2 2.9 2.9 2 4 2H14.1C14 2.3 14 2.7 14 3C14 3.3 14 3.7 14.1 4H4V16H20V7.9C20.7 7.8 21.4 7.4 22 7ZM16 3C16 4.7 17.3 6 19 6C20.7 6 22 4.7 22 3C22 1.3 20.7 0 19 0C17.3 0 16 1.3 16 3Z" fill={color}/>
  </svg>
);

export const EchoMapMarkerStarOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 2C15.9 2 19 5.1 19 9C19 14.2 12 22 12 22C12 22 5 14.2 5 9C5 5.1 8.1 2 12 2ZM12 4C9.2 4 7 6.2 7 9C7 10 7 12 12 18.7C17 12 17 10 17 9C17 6.2 14.8 4 12 4ZM12 11.5L14.4 13L13.8 10.2L16 8.3L13.1 8.1L12 5.4L10.9 8L8 8.3L10.2 10.2L9.5 13L12 11.5Z" fill={color}/>
  </svg>
);

export const EchoMovieCogOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 19C12 19.34 12.03 19.67 12.08 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V12.68C21.38 12.39 20.71 12.18 20 12.08V10H5.76L4 6.47V18H12.08C12.03 18.33 12 18.66 12 19ZM23.8 20.4C23.9 20.4 23.9 20.5 23.8 20.6L22.8 22.3C22.7 22.4 22.6 22.4 22.5 22.4L21.3 22C21 22.2 20.8 22.3 20.5 22.5L20.3 23.8C20.3 23.9 20.2 24 20.1 24H18.1C18 24 17.9 23.9 17.8 23.8L17.6 22.5C17.3 22.4 17 22.2 16.8 22L15.6 22.5C15.5 22.5 15.4 22.5 15.3 22.4L14.3 20.7C14.2 20.6 14.3 20.5 14.4 20.4L15.5 19.6V18.6L14.4 17.8C14.3 17.7 14.3 17.6 14.3 17.5L15.3 15.8C15.4 15.7 15.5 15.7 15.6 15.7L16.8 16.2C17.1 16 17.3 15.9 17.6 15.7L17.8 14.4C17.8 14.3 17.9 14.2 18.1 14.2H20.1C20.2 14.2 20.3 14.3 20.3 14.4L20.5 15.7C20.8 15.8 21.1 16 21.4 16.2L22.6 15.7C22.7 15.7 22.9 15.7 22.9 15.8L23.9 17.5C24 17.6 23.9 17.7 23.8 17.8L22.7 18.6V19.6L23.8 20.4ZM20.5 19C20.5 18.2 19.8 17.5 19 17.5C18.2 17.5 17.5 18.2 17.5 19C17.5 19.8 18.2 20.5 19 20.5C19.8 20.5 20.5 19.8 20.5 19Z" fill={color}/>
  </svg>
);

export const EchoStarPlusOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21ZM17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" fill={color}/>
  </svg>
);

export const EchoPentagonOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 5L19.6 10.5L16.7 19.4H7.3L4.4 10.5L12 5ZM12 2.5L2 9.8L5.8 21.5H18.1L22 9.8L12 2.5Z" fill={color}/>
  </svg>
);

export const EchoFileExportOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM16 11V18.1L13.9 16L11.1 18.8L8.3 16L11.1 13.2L8.9 11H16Z" fill={color}/>
  </svg>
);

export const EchoAccountSettingsOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.11 14 8C14 6.89 13.11 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9ZM13 22H11V24H13V22ZM17 22H15V24H17V22ZM9 22H7V24H9V22Z" fill={color}/>
  </svg>
);

export const EchoArrowBottomRightBoldOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M9.87997 15.54L4.21997 9.87997L9.87997 4.21997L15.54 9.87997L19.78 5.63997V19.78H5.63997L9.87997 15.54ZM17.66 10.59L15.54 12.71L9.87997 7.04997L7.04997 9.87997L12.71 15.54L10.59 17.66H17.66V10.59Z" fill={color}/>
  </svg>
);

export const EchoAccountCogOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M10 4C8.93913 4 7.92172 4.42143 7.17157 5.17157C6.42143 5.92172 6 6.93913 6 8C6 9.06087 6.42143 10.0783 7.17157 10.8284C7.92172 11.5786 8.93913 12 10 12C11.0609 12 12.0783 11.5786 12.8284 10.8284C13.5786 10.0783 14 9.06087 14 8C14 6.93913 13.5786 5.92172 12.8284 5.17157C12.0783 4.42143 11.0609 4 10 4ZM10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 8.53043 11.7893 9.03914 11.4142 9.41421C11.0391 9.78929 10.5304 10 10 10C9.46957 10 8.96086 9.78929 8.58579 9.41421C8.21071 9.03914 8 8.53043 8 8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6ZM17 12C16.84 12 16.76 12.08 16.76 12.24L16.5 13.5C16.28 13.68 15.96 13.84 15.72 14L14.44 13.5C14.36 13.5 14.2 13.5 14.12 13.6L13.16 15.36C13.08 15.44 13.08 15.6 13.24 15.68L14.28 16.5V17.5L13.24 18.32C13.16 18.4 13.08 18.56 13.16 18.64L14.12 20.4C14.2 20.5 14.36 20.5 14.44 20.5L15.72 20C15.96 20.16 16.28 20.32 16.5 20.5L16.76 21.76C16.76 21.92 16.84 22 17 22H19C19.08 22 19.24 21.92 19.24 21.76L19.4 20.5C19.72 20.32 20.04 20.16 20.28 20L21.5 20.5C21.64 20.5 21.8 20.5 21.8 20.4L22.84 18.64C22.92 18.56 22.84 18.4 22.76 18.32L21.72 17.5V16.5L22.76 15.68C22.84 15.6 22.92 15.44 22.84 15.36L21.8 13.6C21.8 13.5 21.64 13.5 21.5 13.5L20.28 14C20.04 13.84 19.72 13.68 19.4 13.5L19.24 12.24C19.24 12.08 19.08 12 19 12H17ZM10 13C7.33 13 2 14.33 2 17V20H11.67C11.39 19.41 11.19 18.77 11.09 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.43 14.9 10.87 14.94 11.3 15C11.5 14.36 11.77 13.76 12.12 13.21C11.34 13.08 10.6 13 10 13ZM18.04 15.5C18.84 15.5 19.5 16.16 19.5 17.04C19.5 17.84 18.84 18.5 18.04 18.5C17.16 18.5 16.5 17.84 16.5 17.04C16.5 16.16 17.16 15.5 18.04 15.5Z" fill={color}/>
  </svg>
);

export const EchoRocketOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 2C12 2 7 4 7 12C7 15.1 7.76 17.75 8.67 19.83C9 20.55 9.71 21 10.5 21H13.5C14.29 21 15 20.55 15.33 19.83C16.25 17.75 17 15.1 17 12C17 4 12 2 12 2ZM13.5 19H10.5C9.5 16.76 9 14.41 9 12C9 7.36 10.9 5.2 12 4.33C13.1 5.2 15 7.36 15 12C15 14.41 14.5 16.76 13.5 19ZM20 22L16.14 20.45C16.84 18.92 17.34 17.34 17.65 15.73M7.86 20.45L4 22L6.35 15.73C6.66 17.34 7.16 18.92 7.86 20.45ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill={color}/>
  </svg>
);

export const EchoCoffeeOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M2 21V19H20V21H2ZM20 8V5H18V8H20ZM20 3C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H18V13C18 14.0609 17.5786 15.0783 16.8284 15.8284C16.0783 16.5786 15.0609 17 14 17H8C6.93913 17 5.92172 16.5786 5.17157 15.8284C4.42143 15.0783 4 14.0609 4 13V3H20ZM16 5H6V13C6 13.5304 6.21071 14.0391 6.58579 14.4142C6.96086 14.7893 7.46957 15 8 15H14C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13V5Z" fill={color}/>
  </svg>
);

export const EchoViewGalleryOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M1 3V21H23V3H1ZM21 5V14H3V5H21ZM11 16V19H8V16H11ZM3 16H6V19H3V16ZM13 19V16H16V19H13ZM18 19V16H21V19H18Z" fill={color}/>
  </svg>
);

export const EchoChatPlusOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 3C17.5 3 22 6.58 22 11C22 11.58 21.92 12.14 21.78 12.68C21.19 12.38 20.55 12.16 19.88 12.06C19.96 11.72 20 11.36 20 11C20 7.69 16.42 5 12 5C7.58 5 4 7.69 4 11C4 14.31 7.58 17 12 17L13.09 16.95L13 18L13.08 18.95L12 19C10.81 19 9.62 18.83 8.47 18.5C6.64 20 4.37 20.89 2 21C4.33 18.67 4.75 17.1 4.75 16.5C3.06 15.17 2.05 13.15 2 11C2 6.58 6.5 3 12 3ZM18 14H20V17H23V19H20V22H18V19H15V17H18V14Z" fill={color}/>
  </svg>
);

export const EchoFolderSearchOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M16.5 12C19 12 21 14 21 16.5C21 17.38 20.75 18.21 20.31 18.9L23.39 22L22 23.39L18.88 20.32C18.19 20.75 17.37 21 16.5 21C14 21 12 19 12 16.5C12 14 14 12 16.5 12ZM16.5 14C15.837 14 15.2011 14.2634 14.7322 14.7322C14.2634 15.2011 14 15.837 14 16.5C14 17.163 14.2634 17.7989 14.7322 18.2678C15.2011 18.7366 15.837 19 16.5 19C17.163 19 17.7989 18.7366 18.2678 18.2678C18.7366 17.7989 19 17.163 19 16.5C19 15.837 18.7366 15.2011 18.2678 14.7322C17.7989 14.2634 17.163 14 16.5 14ZM19 8H3V18H10.17C10.34 18.72 10.63 19.39 11 20H3C1.89 20 1 19.1 1 18V6C1 4.89 1.89 4 3 4H9L11 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V11.81C20.42 11.26 19.75 10.81 19 10.5V8Z" fill={color}/>
  </svg>
);

export const EchoTooltipTextOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H16L12 22L8 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2ZM4 4V16H8.83L12 19.17L15.17 16H20V4H4ZM6 7H18V9H6V7ZM6 11H16V13H6V11Z" fill={color}/>
  </svg>
);

export const EchoHandshakeOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M21.7099 8.71005C22.9599 7.46005 22.3899 6.00005 21.7099 5.29005L18.7099 2.29005C17.4499 1.04005 15.9999 1.61005 15.2899 2.29005L13.5899 4.00005H10.9999C9.09993 4.00005 7.99993 5.00005 7.43993 6.15005L2.99993 10.5901V14.5901L2.28993 15.2901C1.03993 16.5501 1.60993 18.0001 2.28993 18.7101L5.28993 21.7101C5.82993 22.2501 6.40993 22.4501 6.95993 22.4501C7.66993 22.4501 8.31993 22.1 8.70993 21.7101L11.4099 19.0001H14.9999C16.6999 19.0001 17.5599 17.9401 17.8699 16.9001C18.9999 16.6001 19.6199 15.7401 19.8699 14.9001C21.4199 14.5001 21.9999 13.0301 21.9999 12.0001V9.00005H21.4099L21.7099 8.71005ZM19.9999 12.0001C19.9999 12.4501 19.8099 13.0001 18.9999 13.0001H17.9999V14.0001C17.9999 14.4501 17.8099 15.0001 16.9999 15.0001H15.9999V16.0001C15.9999 16.4501 15.8099 17.0001 14.9999 17.0001H10.5899L7.30993 20.2801C6.99993 20.5701 6.81993 20.4001 6.70993 20.2901L3.71993 17.3101C3.42993 17.0001 3.59993 16.8201 3.70993 16.7101L4.99993 15.4101V11.4101L6.99993 9.41005V11.0001C6.99993 12.2101 7.79993 14.0001 9.99993 14.0001C12.1999 14.0001 12.9999 12.2101 12.9999 11.0001H19.9999V12.0001ZM20.2899 7.29005L18.5899 9.00005H10.9999V11.0001C10.9999 11.4501 10.8099 12.0001 9.99993 12.0001C9.18993 12.0001 8.99993 11.4501 8.99993 11.0001V8.00005C8.99993 7.54005 9.16993 6.00005 10.9999 6.00005H14.4099L16.6899 3.72005C16.9999 3.43005 17.1799 3.60005 17.2899 3.71005L20.2799 6.69005C20.5699 7.00005 20.3999 7.18005 20.2899 7.29005Z" fill={color}/>
  </svg>
);

export const EchoClipboardListOutline: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM7 7H17V5H19V19H5V5H7V7ZM12 17V15H17V17H12ZM12 11V9H17V11H12ZM8 12V9H7V8H9V12H8ZM9.25 14C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10V18H7V17.08L9 15H7V14H9.25Z" fill={color}/>
  </svg>
);

/**
 * Echo-specific Filled Icons
 * Standard filled versions of the Echo icon set.
 */

export const EchoEmoticonCoolFilled: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <circle cx="12" cy="12" r="10" fill={color} />
  </svg>
);

export const EchoMessageBadgeFilled: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill={color} />
  </svg>
);

export const EchoMapMarkerStarFilled: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2ZM12 11.5L9.5 13L10.2 10.2L8 8.3L10.9 8.1L12 5.4L13.1 8L16 8.3L13.8 10.2L14.4 13L12 11.5Z" fill={color} />
  </svg>
);

export const EchoMovieCogFilled: React.FC<EchoIconProps> = ({ size, color, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity }}>
    <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" fill={color} />
  </svg>
);

// Mapping for component usage
export const echoIconComponents = {
  // Outlined
  'emoticon-cool-outline': EchoEmoticonCoolOutline,
  'message-badge-outline': EchoMessageBadgeOutline,
  'map-marker-star-outline': EchoMapMarkerStarOutline,
  'movie-cog-outline': EchoMovieCogOutline,
  'star-plus-outline': EchoStarPlusOutline,
  'pentagon-outline': EchoPentagonOutline,
  'file-export-outline': EchoFileExportOutline,
  'account-settings-outline': EchoAccountSettingsOutline,
  'arrow-bottom-right-bold-outline': EchoArrowBottomRightBoldOutline,
  'account-cog-outline': EchoAccountCogOutline,
  'rocket-outline': EchoRocketOutline,
  'coffee-outline': EchoCoffeeOutline,
  'view-gallery-outline': EchoViewGalleryOutline,
  'chat-plus-outline': EchoChatPlusOutline,
  'folder-search-outline': EchoFolderSearchOutline,
  'tooltip-text-outline': EchoTooltipTextOutline,
  'handshake-outline': EchoHandshakeOutline,
  'clipboard-list-outline': EchoClipboardListOutline,
  
  // Filled
  'emoticon-cool-filled': EchoEmoticonCoolFilled,
  'message-badge-filled': EchoMessageBadgeFilled,
  'map-marker-star-filled': EchoMapMarkerStarFilled,
  'movie-cog-filled': EchoMovieCogFilled,
};

export type EchoIconName = keyof typeof echoIconComponents;
