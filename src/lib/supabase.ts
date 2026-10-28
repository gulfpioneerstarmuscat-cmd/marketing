// src/lib/supabase.ts - Client Configuration & Data Access Layer
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://ymbpjnpwjhtdswamengv.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_lfLpUBuWWGXJvw7i5iN0yw_Z4lxjS9A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Business Logic Caps
export const MAX_LIVE_PROMOTIONS = 10;
export const MAX_STORED_PROMOTIONS = 15;

export interface PromotionRecord {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tag: string;
  valid_till: string;
  cta_category: string;
  active: boolean;
  sort_order: number;
  created_at?: string;
}

/**
 * Public: Fetch up to 10 active promotions for the homepage story carousel
 */
export async function getActivePromotions(): Promise<PromotionRecord[]> {
  try {
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })
      .limit(MAX_LIVE_PROMOTIONS);

    if (error) {
      console.warn('Supabase fetch failed, falling back:', error.message);
      return [];
    }
    return data || [];
  } catch (err) {
    console.warn('Network error fetching promotions:', err);
    return [];
  }
}

/**
 * Staff (/admin): Fetch all stored promotions (up to 15) with counts
 */
export async function getAllPromotions(): Promise<{
  promotions: PromotionRecord[];
  liveCount: number;
  storedCount: number;
}> {
  const { data, error } = await supabase
    .from('promotions')
    .select('*')
    .order('active', { ascending: false })
    .order('created_at', { ascending: false });

  if (error) throw error;
  const list = data || [];
  const liveCount = list.filter(p => p.active).length;
  const storedCount = list.length;

  return { promotions: list, liveCount, storedCount };
}

/**
 * Staff (/admin): Upload a 9:16 poster image into the public 'promotions' bucket
 */
export async function uploadPosterImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop() || 'jpg';
  const fileName = `poster_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${ext}`;
  const filePath = `posters/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('promotions')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (uploadError) throw uploadError;

  const { data } = supabase.storage
    .from('promotions')
    .getPublicUrl(filePath);

  return data.publicUrl;
}

/**
 * Staff (/admin): Delete a poster image from storage
 */
export async function deletePosterImage(imageUrl: string): Promise<void> {
  try {
    const url = new URL(imageUrl);
    const pathParts = url.pathname.split('/promotions/');
    if (pathParts.length > 1) {
      const storagePath = pathParts[1];
      await supabase.storage.from('promotions').remove([storagePath]);
    }
  } catch (e) {
    console.warn('Could not extract storage path to delete image file:', e);
  }
}
