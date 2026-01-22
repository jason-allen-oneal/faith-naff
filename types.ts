
export interface Issue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface CampaignNav {
  name: string;
  href: string;
}
