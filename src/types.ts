export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'Client' | 'Personal';
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
  details?: string;
}
