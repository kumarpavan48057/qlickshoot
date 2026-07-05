import { supabase } from './supabase';

export type WaitlistEntry = {
  name: string;
  email: string;
};

export type WaitlistResult =
  | { ok: true }
  | { ok: false; error: 'duplicate' | 'network' | 'unknown'; message: string };

export async function joinWaitlist({ name, email }: WaitlistEntry): Promise<WaitlistResult> {
  try {
    const { error } = await supabase.from('waitlist').insert({ name, email });
    if (!error) return { ok: true };

    // 23505 = unique_violation (email already on the list)
    if (error.code === '23505') {
      return {
        ok: false,
        error: 'duplicate',
        message: "You're already on the waitlist — we'll be in touch soon.",
      };
    }
    return { ok: false, error: 'unknown', message: error.message || 'Something went wrong.' };
  } catch {
    return {
      ok: false,
      error: 'network',
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
