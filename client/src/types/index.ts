export interface Employee {
  id: string;
  name: string;
  department: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  photoUrl: string;
  birthday?: string;
  anniversary?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  department: string;
  category: string;
  description: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  priority: number;
}