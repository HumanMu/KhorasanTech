export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  city?: string;
  venue?: string;  // navnet på stedet hvor aktivititen afholdes
  imageUrl?: string;
}

export interface AddActivity {
  title: string;
  description: string;
  imageUrl?: string;
}