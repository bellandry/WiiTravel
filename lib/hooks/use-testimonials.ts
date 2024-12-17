"use client";

import { baseTestimonials } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

const fetchTestimonials = async (page: number): Promise<Testimonial[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return baseTestimonials.map(t => ({
    ...t,
    id: Math.random().toString(36).substr(2, 9)
  }));
};

export function useTestimonials() {
  return useInfiniteQuery({
    queryKey: ['testimonials'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) => fetchTestimonials(pageParam!),
    getNextPageParam: (_, pages) => pages.length > 0 ? pages.length : undefined,
    initialPageParam: 0,
  });
}
