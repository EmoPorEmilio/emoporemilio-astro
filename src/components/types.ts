
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Warning = 'warning',
  Success = 'success',
  Link = 'link',
  Text = 'text',
}

export interface HeaderLink {
  text: string;
  href: string;
  class?: string;
}