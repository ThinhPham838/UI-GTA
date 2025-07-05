declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module 'jsrmvi';
declare module 'react-multiselect-checkboxes';
declare module 'react-table-plugins';
declare module 'file-saver-es';
declare module 'uuid';
declare module 'antd';
declare module 'bluebird';
declare module 'devextreme';
declare module 'precompiled-mqtt';
