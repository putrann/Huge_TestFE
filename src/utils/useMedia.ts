import { useMediaLayout } from 'use-media';

type DeviceSize = 'md' | 'sm' | 'lg' | 'xl';

export const screens: { [k in DeviceSize]: number } = {
  sm: 375,
  md: 767,
  lg: 1024,
  xl: 1280,
};

function useMedia(deviceSize: DeviceSize = 'md'): boolean {
  return useMediaLayout({ maxWidth: screens[deviceSize] });
}

useMedia.screens = screens;

export default useMedia;
