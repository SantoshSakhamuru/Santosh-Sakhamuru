export type FileType = 'document' | 'image' | 'video' | 'audio' | 'zip';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size: string;
  modifiedDate: string;
} 