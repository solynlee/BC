export interface MapLocation {
  longitude: number;
  latitude: number;
  address: string;
  title?: string;
}

export interface MapProps {
  location: MapLocation;
  zoom?: number;
  height?: string;
  width?: string;
  showControls?: boolean;
  preferredProvider?: 'baidu' | 'google' | 'tencent';
}

export type MapType = 'roadmap' | 'satellite';
export type MapProvider = 'baidu' | 'google' | 'tencent';

// 向后兼容的类型定义
export interface TencentMapProps extends MapProps { }
export type TencentMapLocation = MapLocation;

export { };
